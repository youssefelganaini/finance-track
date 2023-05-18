import { useEffect, useState } from 'react'
import './App.css'
import  NewExpense  from './NewExpense'


function App() {

    const[expense, setExpense] = useState("")
    const[amount, setAmount] = useState(0)
    const[date, setDate] = useState(new Date())
    const[tags, setTags] = useState([
        { id: 'groceries', name: 'Groceries', checked: false },
        { id: 'activities', name: 'Activities', checked: false },
        { id: 'fixed', name: 'Fixed', checked: false },
        { id: 'home', name: 'Home', checked: false },
        { id: 'other', name: 'Other', checked: false }
    ])
    const[transactions, setTransactions] = useState(() => {
      const localData = localStorage.getItem("ITEMS")
      if (localData === null) return []
      return JSON.parse(localData)
    })

    useEffect(() => {
      localStorage.setItem("ITEMS", JSON.stringify(transactions))
    }, [transactions])
    

    function toggleHandler(id, mode) {
      setTags(currentTags => {
          return currentTags.map(tag => {
              if(tag.id === id) {
                  return {...tag, checked:mode};
              } else {
                  return {...tag, checked:false};
              }
          }
          
      )})}

      function deleteHandler(id) {
        setTransactions(currentTransactions => {
          return currentTransactions.filter(transaction => transaction.id != id)
        })
      }

     
      
      function onSubmit(e) {
        e.preventDefault();
        const filteredTags = tags.filter(tag => tag.checked === true);
        setTransactions(currentTransactions => [
          { expense: expense, tags: filteredTags, price: amount, date: date, id: crypto.randomUUID() },
          ...currentTransactions
        ]);
        setExpense("");
        setAmount(0);
        setDate(new Date());
        setTags(prevTags => prevTags.map(tag => ({ ...tag, checked: false })));
      }
      

  return (
    <>
    <NewExpense
        {...{
          expense,
          setExpense,
          amount,
          setAmount,
          date,
          setDate,
          tags,
          setTags,
          toggleHandler,
          onSubmit,
          transactions
        }}
      />

<div className="card m-4 border-2 rounded-3 border-dark-subtle">
  <div className="card-body justify-content-between">
  <h3>Expense List</h3>

    <ul className="list-group">
      {transactions.map(transaction => {
        return <li className="list-group-item list-group-left">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            {transaction.tags.map(tag => {
              return <span className="badge bg-primary text-bg-secondary m-1">
                {tag.name}
              </span>
            }
            )}
            <h6 className="h6 d-inline fw-bold">{transaction.expense}</h6>
          </div>
          <div className="badge bg-danger m-1">{transaction.price + " EUR"}</div>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div>{transaction.date}</div>
          <button 
            type="button" 
            class="btn btn-sm btn-close" 
            aria-label="Close"
            onClick={() => deleteHandler(transaction.id)}
            ></button>
        </div>
        
      </li>
      })}

     
    </ul>
  </div>
</div>






    </>
  )
}

export default App
