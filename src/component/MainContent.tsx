import React from 'react';
import Welcome from "./MainPagesElement/Welcome";
import Currency from "./MainPagesElement/Currency";
import Equipment from "./MainPagesElement/Equipment";

const MainContent = () => {

    return (
        <div className={'main_container'}>
            <Welcome/>
            <Currency/>
            <Equipment/>
        </div>
    );
};

export default MainContent;