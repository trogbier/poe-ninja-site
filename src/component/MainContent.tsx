import React from 'react';
import Welcome from "./MainPagesElement/Welcome";
import { useAppSelector} from "../hooks/useTypedSelector";
import Form1 from "./MainPagesElement/Form1";

const MainContent = () => {
    const selector = useAppSelector(store => store.link)

    return (
        <div className={'main_container'}>
            {selector.form==='welcome'?<Welcome/>:<Form1/>}
        </div>
    );
};

export default MainContent;