import { useState} from "react";
import './App.css'
import {Header} from './Home Page Components/SpendWiseHeader'
import {Summary} from './Home Page Components/SummaryBox'
import {AddExpense} from './Home Page Components/AddExpense'
import {RecentExpense} from './Home Page Components/RecentExpense'
import {SpendCategory} from './Home Page Components/SpendCategory'


function HomePage() {

  const [data, setData] = useState([]);

  
  return (
    <>
      <title>SpendWiseTest</title>
      <Header />
      <hr className='HrTop'/>
      <div className='fst'>
        <Summary  data={data} />
        <AddExpense setData={setData} />
      </div>
      <div className='snd'>
        <RecentExpense />
        <SpendCategory />
      </div>
    </>
  )
}

export default HomePage