
function Filter( {filter, setFilter} ) {
  return (
    <div className="filter">
        <h2>Filter:</h2>
        <div className="filterOptions">
            <div>
                <p>Status</p>
                <select value={filter} onChange={(e)=> setFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incompleted">Incompleted</option>
                </select>
            </div>

            <div>
                <p>Order</p>
                <button>ASC</button>
                <button>DESC</button>
            </div>
        </div>
    </div>
  )
}

export default Filter