import React from 'react';
import icon from '../static/imgMain/CurrencyRerollRare.png'
import {useAppDispatch, useAppSelector} from "../hooks/useTypedSelector";
import {useHistory} from "react-router-dom";

const ListMain = () => {
    const selector = useAppSelector(store=>store.link)
    const dispatch = useAppDispatch()
    const history = useHistory()

    const arr = [
        ['Currency', 'Fragments', 'Divination Card', 'Artifacts', 'Prophecies', 'Oils', 'Incubators'],
        ['Unique Weapons', 'Unique Armours', 'Unique Accessories', 'Unique Flasks', 'Unique Jewels', 'Cluster Jewels'],
        ['Maps', 'Blighted Maps', 'Unique Maps', 'Delirium Orbs', 'Invitations', 'Scarabs', 'Watchstones'],
        ['Fossils', 'Resonators', 'Helmet Enchants', 'Beasts', 'Essences', 'Vials']
    ]
    const title = ['GENERAL', 'EQUIPMENT & GEMS', 'ATLAS', 'CRAFTING']

    const changeLink = (e: any) => {
        const link = e.target.innerText.toLowerCase().replace(/\s/g, '')
        dispatch({type: 'CHANGE2', payload: e.target.innerText})
        dispatch({type:'CLICK'})
        history.push(`/${selector.count1}/${link}`)
    }
    return (
        <div className={'list_main'}>
            {title.map((title, id) => {
                return (
                    <div className={'list_main_div'} key={id}>
                        <h1  className={'list_main_title'} key={title}>{title}</h1>
                        <ul className={'list_main_ul'}>
                        {arr[id].map((elem) => {
                            return (
                                <li className={'list_main_li'}
                                    key={elem}
                                    onClick={(e)=>changeLink(e)}
                                >
                                    <img className={'list_main_img'} key={elem+1} src={icon} alt="icon"/>
                                    <span key={elem+2}>{elem}</span>
                                </li>
                            )
                        })}
                        </ul>
                    </div>
                )
            })}
        </div>
    );
};

export default ListMain;