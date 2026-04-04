//import { useState } from 'react'
import { useState } from 'react';
import './AddExpense.css'
export function AddExpense({setData}){
    const today = new Date().toISOString().split("T")[0];
    const [Description, setDescription]=useState("");
    const [Amount, setAmount]=useState(0);
    const [date, setDate]=useState(today);
    const [Category, setCategory]=useState("");

    function addData(){
        setData(prev=> [
            ...prev,
            {
                Description,
                Amount,
                date,
                Category,
                id: crypto.randomUUID()
            }
        ]);
        
    }

    return(
        <div className="AddExpense">
            <p style={{fontSize:"28px", marginTop:"25px", fontWeight:"bolder", marginBottom:"20px"}}>Quick Add Expense</p>
            <div className="AddExpense1">
                <div>
                    <p style={{fontSize:"20px"}}>Description</p>
                    <input type="text" defaultValue={Description} name="Description" id="" onChange={(e) => setDescription(e.target.value)}  placeholder="e.g., Groceries"/>
                </div>
                <div>
                    <p style={{fontSize:"20px"}}>Amount ($)</p>
                    <input type="number" defaultValue={Amount} name="Amount" id="" onChange={(e) => setAmount(e.target.value)} />
                </div>
            </div>
            <div className="AddExpense1">
                <div>
                    <p style={{fontSize:"20px", width:"100%"}}>Date</p>
                    <input style={{width:"98%", height:"55px"}} type="date" defaultValue={today} name="date" id="" onChange={(e) => setDate(e.target.value)}/>
                </div>
                <div>
                    <p style={{fontSize:"20px"}}>Category</p>
                    <select className='category' value={Category} name="Category" id="Category" onChange={(e) => setCategory(e.target.value)}>
                        <option value="Food">Food</option>
                        <option value="Transport">Transport</option>
                        <option value="Utilities">Utilities</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>
            <button onClick={addData}>Add Expense</button>
        </div>
    )
}