import { useState } from 'react'
import './App.css'

export default function NewExpense({expense,
    setExpense,
    amount,
    setAmount,
    date,
    setDate,
    tags,
    setTags,
    onSubmit,
    toggleHandler}) {

    return (
        <>
        <h1>Track my Finances</h1>
        <div className="card m-4 border-2 rounded-3 border-dark-subtle">
          <div className="card-body">
            <h3>New Expense</h3>
            <form onSubmit={e => onSubmit(e)}>
    
            <div className="row g-3">
              <div className="col-sm-7">
                <input type="text" 
                class="form-control" 
                placeholder="Expense" 
                aria-label="City"
                value={expense}
                onChange={e => setExpense(e.target.value)}
                />
              </div>
              <div class="col-sm">
                <input type="date" 
                class="form-control" 
                placeholder="Date" 
                aria-label="State"
                value={date}
                onChange={e => setDate(e.target.value)}
                />
              </div>
              <div class="col-sm">
                <input type="number" 
                class="form-control" 
                placeholder="Amount" 
                aria-label="Zip"
                value={amount}
                onChange={e => setAmount(e.target.value)}
                />
              </div>
            </div>
            
          <div class="btn-group d-flex mt-3" role="group" aria-label="Basic checkbox toggle button group">
            <input 
                type="checkbox" 
                class="btn-check" 
                id="btncheck1" 
                autocomplete="off" 
                onChange={ e => toggleHandler("activities", e.target.checked)}
                checked ={tags.find(tag => tag.id === "activities").checked}
                />
            <label class="btn btn-outline-primary w-100" for="btncheck1">Activities</label>
    
            <input 
                type="checkbox" 
                class="btn-check" 
                id="btncheck2" 
                autocomplete="off" 
                onChange={ e => toggleHandler("groceries", e.target.checked)}
                checked = {tags.find(tag => tag.id === "groceries").checked}
                />
            <label class="btn btn-outline-primary w-100" for="btncheck2">Groceries</label>
    
            <input 
                type="checkbox" 
                class="btn-check" 
                id="btncheck3" 
                autocomplete="off" 
                onChange={e => toggleHandler("fixed", e.target.checked)}
                checked = {tags.find(tag => tag.id === "fixed").checked}/>
            <label class="btn btn-outline-primary w-100" for="btncheck3">Fixed</label>
    
            <input 
                type="checkbox" 
                class="btn-check" 
                id="btncheck4" 
                autocomplete="off"
                onChange={e => toggleHandler("home", e.target.checked)}
                checked = {tags.find(tag => tag.id === "home").checked} />
            <label class="btn btn-outline-primary w-100" for="btncheck4">Home</label>
    
            <input 
                type="checkbox" 
                class="btn-check" 
                id="btncheck5" 
                autocomplete="off" 
                onChange={e => toggleHandler("other", e.target.checked)}
                checked = {tags.find(tag => tag.id === "other").checked}/>
            <label class="btn btn-outline-primary w-100" for="btncheck5">Other</label>
          </div>
    
          <button 
                className='btn mt-3 btn-outline-success' 
                type="submit"
                >Add</button>
          </form>
          </div>
        </div>
        </>
      )
}