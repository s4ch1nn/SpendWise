import './Summary.css'
export function Summary({data}){
    

    const categoryTotals = data.reduce((acc, item) => {
        const amount = Number(item.Amount) || 0;
        acc[item.Category] = (acc[item.Category] || 0) + amount;
        return acc;
    }, {});
    const total = (categoryTotals.Food ||0)+(categoryTotals.Transport ||0)+(categoryTotals.Utilities ||0)+(categoryTotals.Entertainment ||0)+(categoryTotals.Other ||0);
    //console.log(total);
    const food = ((categoryTotals.Food ||0)/total)*100 ;
    const trans = ((categoryTotals.Transport ||0)/total)*100;
    const util = ((categoryTotals.Utilities ||0)/total)*100;
    const enter = ((categoryTotals.Entertainment ||0)/total)*100;
    const other = ((categoryTotals.Other ||0)/total)*100;
    //console.log(trans);
    
    
    return(
        <div className="Summary">
            <h2>Overview</h2>
            <h1>Total Expenses: </h1>
            <div className='bar'>
                <div style={{width:`${food}%`, backgroundColor:"blue",borderTopLeftRadius: "40px",borderBottomLeftRadius: "40px"}}></div>
                <div style={{width:`${trans}%`, backgroundColor:"green"}}></div>
                <div style={{width:`${util}%`, backgroundColor:"yellow"}}></div>
                <div style={{width:`${enter}%`, backgroundColor:"pink"}}></div>
                <div style={{width:`${other}%`, backgroundColor:"orange",borderTopRightRadius: "40px",borderBottomRightRadius: "40px"}}></div>
            </div>
        </div>
    )
}