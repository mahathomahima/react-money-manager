import './index.css'

const TransactionItem = props => {
    const {eachHistoryDetails, deleteTransactionHistory} = props
    const {title, amount, type, id} = eachHistoryDetails

    const onDeleteTransaction = () => {
        deleteTransactionHistory(id);
    }

    return(
        <li className='table-row'>
            <div className='history-list-container'>
                <div className='table-cell'>
                    <p className='title'>{title}</p>
                </div>
                <div className='table-cell'>
                    <p className='amount'>RS {amount}</p>
                </div>
                <div className='table-cell'>
                    <p className='type'>{type}</p>
                </div>
                <button
                    type="button"
                    className="delete-icon-container"
                    onClick={onDeleteTransaction}
                >
                    <img src='https://assets.ccbp.in/frontend/react-js/money-manager/delete.png' className="delete-icon" alt="delete" />
                </button> 
            </div>
        </li>
    )
}
export default TransactionItem
