import './RecentExpense.css'
import { useState } from 'react'
export function RecentExpense(){
    const today = new Date();
    const year = today.toLocaleString("default", { year: "numeric" });
    const [selectedYear, setSelectedYear] = useState(year);
    console.log(selectedYear);
    return(
        <div className="RecentExpenses">
            <div style={{display:"flex" , alignItems:"center", marginTop:"14px",justifyContent:"center"}}>
                <h2 style={{display : "flex" , marginTop:"10px",marginBottom:"0px"}}>Recent Expenses</h2>

                <select className='dropDown' value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} id="recentExpenses" >
                    <option value="" disabled hidden>Filter By Year</option>
                    <option value={year}>{year}</option>
                    <option value={year - 1}>{year - 1}</option>
                    <option value={year - 2}>{year - 2}</option>
                </select>
            </div>
            <div className='inner'>

            </div>
        </div>
    )
}