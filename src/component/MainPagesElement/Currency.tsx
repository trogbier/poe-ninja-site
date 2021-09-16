import React from 'react';
import {useAppSelector} from "../../hooks/useTypedSelector";

const Currency = () => {
    const selector = useAppSelector(store=>store.link)
    const title = selector.count2
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default Currency;