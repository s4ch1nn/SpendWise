import './RecentExpense.css'
import { useState } from 'react'
export function RecentExpense({data, setData}){
    const today = new Date();
    const year = today.toLocaleString("default", { year: "numeric" });
    const [selectedYear, setSelectedYear] = useState(year);
    console.log(selectedYear);

    function del(id) {
        setData(prev =>
            prev.filter(item => item.id !== id)
        );
    }

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
                <table className='history' style={{width:"100%"}}>
                    <thead>
                        <tr>
                        <td className='date'><h3>Date</h3></td>
                        <td className='Description'><h3>Description</h3></td>
                        <td className='cate'><h3>Category</h3></td>
                        <td className='Amount'><h3>Amount</h3></td>
                        <td className='Delete'><h3>Delete</h3></td>
                    </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => 
                            (
                                <tr key={item.id}>
                                    <td><p>{item.date}</p></td>
                                    <td><p>{item.Description}</p></td>
                                    <td><p>{item.Category}</p></td>
                                    <td><p>${item.Amount}</p></td>
                                    <td>
                                        <img className='del' src="public/del.png" alt="Delete Record" onClick={ ()=> del(item.id) }/>
                                    </td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}