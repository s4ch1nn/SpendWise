import './SpendCategory.css'
export function SpendCategory({data}){
    const today = new Date();
    const categoryTotals = data.reduce((acc, item) => {
        const amount = Number(item.Amount) || 0;
        acc[item.Category] = (acc[item.Category] || 0) + amount;
        return acc;
    }, {});
    console.log(categoryTotals);
    

    const month = today.toLocaleString("default", { month: "short" });

    console.log(month);

    return(
        <div className="Category">
            <h2>Spending By Category</h2>
            <p style={{fontSize:"24px", marginTop:"25px", fontWeight:"bolder", marginBottom:"20px", marginLeft:"20px"}}>Food : {categoryTotals.Food ||0} </p>
            <p style={{fontSize:"24px", marginTop:"25px", fontWeight:"bolder", marginBottom:"20px", marginLeft:"20px"}}>Transport : {categoryTotals.Transport || 0}</p>
            <p style={{fontSize:"24px", marginTop:"25px", fontWeight:"bolder", marginBottom:"20px", marginLeft:"20px"}}>Utilities : {categoryTotals.Utilities ||0}</p>
            <p style={{fontSize:"24px", marginTop:"25px", fontWeight:"bolder", marginBottom:"20px", marginLeft:"20px"}}>Entertainment : {categoryTotals.Entertainment ||0}</p>
            <p style={{fontSize:"24px", marginTop:"25px", fontWeight:"bolder", marginBottom:"20px", marginLeft:"20px"}}>Other : {categoryTotals.Other ||0}</p>
        </div>
    )
}