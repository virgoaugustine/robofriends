import React from 'react';


const Searchbox = ({searchValue}) => {
    return (
        <div>
            <input type='search' 
            placeholder='Search Robots' 
            className="pa3 ba b--green bg-lightest-blue"
            onChange = {searchValue}

            />
        </div>
    )
};
export default Searchbox;