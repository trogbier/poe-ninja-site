import React from 'react';

const SearhSection = () => {
    return (
        <div>
            <div className="container search_items">
                    <input type="text" defaultValue='search' className='input_main_nav'/>
                    <select className='select_main_nav'>
                        <option value="" disabled hidden>Select League</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select>
            </div>
        </div>
    );
};

export default SearhSection;