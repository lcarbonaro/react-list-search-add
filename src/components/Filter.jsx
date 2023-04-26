function Filter({ handleFilter }) {
    function handleInput(e) {
        if (e.code === "Enter") {
            let st = e.target.value;
            handleFilter(st);
        } else {
            //console.log('not enter yet');
        }
    }

    return (
        <div>
            <label htmlFor="filter">
                Search:
                <input
                    name="filter"
                    onKeyUp={handleInput}
                    type="text"
                    placeholder="enter search term"
                />
            </label>
        </div>
    );
}

export default Filter;
