import React from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/useTypedSelector";
import {useHistory} from "react-router-dom";
import icon1 from '../static/listImg/1.png'
import icon2 from '../static/listImg/2.png'
import icon3 from '../static/listImg/3.png'
import icon4 from '../static/listImg/4.png'
import icon5 from '../static/listImg/5.png'
import icon6 from '../static/listImg/6.png'
import icon7 from '../static/listImg/7.png'
import icon8 from '../static/listImg/8.png'
import icon9 from '../static/listImg/9.png'
import icon10 from '../static/listImg/10.png'
import icon11 from '../static/listImg/11.png'
import icon12 from '../static/listImg/12.png'
import icon13 from '../static/listImg/13.png'
import icon14 from '../static/listImg/14.png'
import icon15 from '../static/listImg/15.png'
import icon16 from '../static/listImg/16.png'
import icon17 from '../static/listImg/17.png'
import icon18 from '../static/listImg/18.png'
import icon19 from '../static/listImg/19.png'
import icon20 from '../static/listImg/20.png'
import icon21 from '../static/listImg/21.png'
import icon22 from '../static/listImg/22.png'
import icon23 from '../static/listImg/23.png'
import icon24 from '../static/listImg/24.png'
import icon25 from '../static/listImg/25.png'

const ListMain = () => {
    const selector = useAppSelector(store=>store.link)
    const dispatch = useAppDispatch()
    const history = useHistory()

    const imgIconArr =[icon1,icon2,icon3,icon4,icon5,icon6,icon7,icon8,icon9,icon10,icon11,icon12,icon13,icon14,icon15,icon16,icon17,icon18,icon19,icon20,icon21,icon22,icon23,icon24,icon25]
    const arr = [
        ['Currency', 'Fragments', 'Divination Card', 'Artifacts', 'Prophecies', 'Oils', 'Incubators'],
        ['Unique Weapons', 'Unique Armours', 'Unique Accessories', 'Unique Flasks', 'Unique Jewels', 'Cluster Jewels'],
        ['Maps', 'Blighted Maps', 'Unique Maps', 'Delirium Orbs', 'Invitations', 'Scarabs'],
        ['Fossils', 'Resonators', 'Helmet Enchants', 'Beasts', 'Essences', 'Vials']
    ]
    const title = ['GENERAL', 'EQUIPMENT & GEMS', 'ATLAS', 'CRAFTING']

    const changeLink = (e: any) => {
        const link = e.target.innerText.toLowerCase().replace(/\s/g, '')
        dispatch({type: 'CHANGE2', payload: e.target.innerText})
        dispatch({type:'CLICK'})
        history.push(`/${selector.count1}/${link}`)
    }
    let iterNumber = 0
    return (
        <div className={'list_main'}>
            {title.map((title, id) => {
                return (
                    <div className={'list_main_div'} key={id}>
                        <h1  className={'list_main_title'} key={title}>{title}</h1>
                        <ul className={'list_main_ul'}>
                        {arr[id].map(elem => {
                            iterNumber++
                            return (
                                <li className={'list_main_li'}
                                    key={elem}
                                    onClick={(e)=>changeLink(e)}
                                >
                                    <img className={'list_main_img'} key={elem+1} src={imgIconArr[iterNumber-1]} alt="icon"/>
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