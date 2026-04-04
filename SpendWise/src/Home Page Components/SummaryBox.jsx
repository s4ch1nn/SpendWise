import './Summary.css'
export function Summary(){
    
    const today = new Date();
    const month = today.toLocaleString('default',{month:'long'});
    return(
        <div className="Summary">
            <h2>{month} Overview</h2>
            <h1>Total Expenses: </h1>
            <div className='bar'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}