import React from 'react';
import {useAppDispatch} from "../hooks/useTypedSelector";
import {useHistory} from "react-router-dom";


const SearhSection = () => {
    const dispatch = useAppDispatch()
    const history = useHistory()

    const setState =  (e: any) => {
        dispatch({type: 'CHANGE', payload: e.target.value})
        history.push(`/${e.target.value}`)
    }

    return (
        <div>
            <div className="container search_items">
                <input type="text" defaultValue='search' className='input_main_nav'/>
                <select className='select_main_nav' onChange={(e) => setState(e)}>
                    <option value="" disabled hidden>Select League</option>
                    <option value="expedition">Expedition</option>
                    <option value="hcexpedition">HC Expedition</option>
                    <option value="standard">Standard</option>
                    <option value="hardcore">Hardcore</option>
                </select>
            </div>
        </div>
    );
};

export default SearhSection;