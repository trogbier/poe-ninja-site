import React from 'react';
import Welcome from "./MainPagesElement/Welcome";
import {useAppSelector} from "../hooks/useTypedSelector";
import FormItems from "./MainPagesElement/FormItems";
import Currency from "./MainPagesElement/Currency";

const MainContent = () => {
    const selector = useAppSelector(store => store.link)

    return (
        <div className={'main_container'}>
            {selector.form === 'welcome' ? <Welcome/> : null}
            {selector.form === 'form' ? <FormItems/> : null}
            {selector.form === 'currency' ? <Currency/> : null}
        </div>
    );
};

export default MainContent;