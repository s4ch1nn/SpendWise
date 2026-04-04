import './SpendCategory.css'
export function SpendCategory(){
    const today = new Date();

    const month = today.toLocaleString("default", { month: "short" });

    console.log(month);

    return(
        <div className="Category">
            <h2>Spending By Category</h2>
        </div>
    )
}