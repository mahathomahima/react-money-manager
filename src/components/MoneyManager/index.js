import { Component } from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
    {
      optionId: 'INCOME',
      displayText: 'Income',
    },
    {
      optionId: 'EXPENSES',
      displayText: 'Expenses',
    },
]

class MoneyManager extends Component {
    state ={
        transactionHistoryList: [],
        title: '',
        amount: '',
        optionId: transactionTypeOptions[0].optionId,
    }

    getIncome = () => {
        const {transactionHistoryList} = this.state
        let incomeAmount = 0

        transactionHistoryList.forEach(eachTransaction => {
            if (eachTransaction.type === transactionTypeOptions[0].displayText){
                incomeAmount += eachTransaction.amount
            }
        })
        return incomeAmount
    }

    getExpenses = () => {
        const {transactionHistoryList} = this.state
        let expensesAmount = 0

        transactionHistoryList.forEach(eachTransaction => {
            if (eachTransaction.type === transactionTypeOptions[1].displayText){
                expensesAmount += eachTransaction.amount
            }
        })
        return expensesAmount
    }

    getBalance = () => {
        const {transactionHistoryList} = this.state
        let balanceAmount = 0
        let incomeAmount = 0
        let expensesAmount = 0

        transactionHistoryList.forEach(eachTransaction => {
            if(eachTransaction.type === transactionTypeOptions[0].displayText){
                incomeAmount += eachTransaction.amount
            }else{
                expensesAmount += eachTransaction.amount
            }
        })
        balanceAmount = incomeAmount - expensesAmount
        return balanceAmount
    }

    onChangeOptionId = event => {
        this.setState({optionId: event.target.value})
    }

    onChangeTitle = event => {
        this.setState({title: event.target.value})
    }

    onChangeAmount = event => {
        this.setState({amount: event.target.value})
    }

    onAddTransaction = event => {
        event.preventDefault()
        const {title, amount, optionId} = this.state

        const typeOption = transactionTypeOptions.find(eachTransaction => eachTransaction.optionId === optionId)
        const {displayText} = typeOption

        const newTransaction = {
            id: uuidv4(),
            title,
            amount:parseInt(amount),
            type: displayText,
        }

        this.setState(prevState => ({
            transactionHistoryList: [...prevState.transactionHistoryList, newTransaction],
            title: '',
            amount: '',
            optionId: transactionTypeOptions[0].optionId
        }))
    }

    deleteTransactionHistory = id => {
        const {transactionHistoryList} = this.state

        const getFilteredTransaction = transactionHistoryList.filter(eachTransaction => eachTransaction.id !== id)
        this.setState({transactionHistoryList: getFilteredTransaction})
    }

    render(){
        const {transactionHistoryList, title, amount, optionId} = this.state
        const incomeAmount = this.getIncome()
        const expensesAmount = this.getExpenses()
        const balanceAmount = this.getBalance()

        return(
            <div className="app-container">
                <div className='money-manager-container'>
                    <div className='header-section'>
                        <h1 className='heading'>Hi, Mahima</h1>
                        <p className='description'>Welcome back to your <span className='money-manager-text'>Money Manager</span></p>
                    </div>

                    <div className='money-details-container'>
                        <MoneyDetails 
                            incomeAmount={incomeAmount}
                            balanceAmount={balanceAmount}
                            expensesAmount={expensesAmount}
                        />
                    </div>

                    <div className='transaction'>
                    <div className='form-container' onSubmit={this.onAddTransaction}>
                        <form className='form'>
                            <h1 className="form-heading">Add Transaction</h1>
                            <label htmlFor="title" className="label">TITLE</label>
                            <input
                                type="text"
                                id="title"
                                className="input"
                                placeholder="TITLE"
                                value={title}
                                onChange={this.onChangeTitle}
                            />
                            <label htmlFor="amount" className="label">AMOUNT</label>
                            <input
                                type="text"
                                id="amount"
                                className="input"
                                placeholder='AMOUNT'
                                value={amount}
                                onChange={this.onChangeAmount}
                            />
                            <label htmlFor="select" className="label">TYPE</label>
                            <select
                                id='select'
                                className='input'
                                value={optionId}
                                onChange={this.onChangeOptionId}
                            >
                                {transactionTypeOptions.map(eachOption => (
                                    <option key={eachOption.optionId} value={eachOption.optionId}>
                                        {eachOption.displayText}
                                    </option>
                                ))}
                            </select>
                      <button type="submit" className="add-button">
                        Add
                      </button>
                    </form>
                    </div>

                    <div className='history-container form'>
                        <h1 className='history-heading'>History</h1>
                        <ul className='history-table'>
                            <li className='table-header'>
                                <p className="table-header-cell  column">Title</p>
                                <p className="table-header-cell column">Amount</p>
                                <p className="table-header-cell column">Type</p>
                            </li>
                            {transactionHistoryList.map(eachHistoryDetails => (
                                <TransactionItem 
                                    deleteTransactionHistory={this.deleteTransactionHistory} 
                                    eachHistoryDetails={eachHistoryDetails} 
                                    key={eachHistoryDetails.id} 
                                />
                            ))}
                        </ul>
                    </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default MoneyManager