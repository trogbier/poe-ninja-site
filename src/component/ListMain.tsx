import React from 'react';
import icon from '../static/imgMain/CurrencyRerollRare.png'

const ListMain = () => {
    const arr = [
        ['Currency', 'Fragments', 'Divination Card', 'Artifacts', 'Prophecies', 'Oils', 'Incubators'],
        ['Unique Weapons', 'Unique Armours', 'Unique Accessories', 'Unique Flasks', 'Unique Jewels', 'Skill Gems', 'Cluster Jewels'],
        ['Maps', 'Blighted Maps', 'Unique Maps', 'Delirium Orbs', 'Invitations', 'Scarabs', 'Watchstones'],
        ['Base Types', 'Fossils', 'Resonators', 'Helmet Enchants', 'Beasts', 'Essences', 'Vials']
    ]
    const title = ['GENERAL', 'EQUIPMENT & GEMS', 'ATLAS', 'CRAFTING']

    return (
        <div className={'list_main'}>
            {title.map((title, id) => {
                return (
                    <div className={'list_main_div'} key={id}>
                        <h1  className={'list_main_title'} key={title}>{title}</h1>
                        <ul className={'list_main_ul'}>
                        {arr[id].map((elem) => {
                            return (
                                <li className={'list_main_li'} key={elem}>
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