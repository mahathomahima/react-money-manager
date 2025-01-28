import './index.css'

const MoneyDetails = props => {
    const {incomeAmount, balanceAmount, expensesAmount} = props

    return(
        <div className="money-container">
            <div className='balance-container container'>
                <div className='header-container'>
                    <img src='https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png' alt='balance' className='balance icon' />
                    <div className="content">
                        <p className="title">Your Balance</p>
                        <p className="rupees">Rs {balanceAmount}</p>
                    </div>
                </div>
            </div>
            <div className='income-container container'>
                <div className='header-container'>
                    <img src='https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png' alt='income' className='income icon' />
                    <div className="content">
                        <p className="title">Your Income</p>
                        <p className="rupees">Rs {incomeAmount}</p>
                    </div>
                </div>
            </div>
            <div className='expenses-container container'>
                <div className='header-container'>
                    <img src='https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png' alt='expenses' className='expenses icon' />
                    <div className="content">
                        <p className="title">Your Expenses</p>
                        <p className="rupees">Rs {expensesAmount}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MoneyDetails