import React from 'react';
import SearhSection from "../component/SearhSection";
import MainContent from "../component/MainContent";
import ListMain from "../component/ListMain";

const MainPage = () => {
    return (
        <>
            <div>
                <SearhSection/>
            </div>
            <div>
                <div className={' container '}>
                    <div className={' containerMain '}>
                        <ListMain/>
                        <MainContent/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainPage;