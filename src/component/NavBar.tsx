import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../static/imgMain/ninja-logo.png'
import discord from '../static/imgMain/discord.png'

const NavBar = () => {
    return (
        <footer>
            <div className={'container footer_cont'}>
                <div className="logo_items">
                    <NavLink to={'/'} className={'logo_items'}>
                        <img src={logo} alt="logo" className={'logo'}/>
                        <span className={'header_span'}>poe.ninja</span>
                    </NavLink>
                </div>
                <div className="header_list">
                    <ul className="header_list_ul">
                        <li className="header_list_li"><NavLink to={'/'}>Economy</NavLink></li>
                        <li className="header_list_li"><NavLink to={'/'}>Builds</NavLink></li>
                        <li className="header_list_li"><NavLink to={'/'}>Daily</NavLink></li>
                        <li className="header_list_li"><NavLink to={'/'}>Streamers</NavLink></li>
                    </ul>
                </div>
                <div className="right">
                    <ul className="header_list_ul">
                        <li className="header_list_li_right"><NavLink to={'/'}><img src={discord} alt="discord logo" className={'dicord_logo'}/></NavLink></li>
                        {/*<li className="header_list_li_right">*/}
                        {/*    <select name="pets" id="language-picker-select">*/}
                        {/*        <option value="" disabled hidden>Select language</option>*/}
                        {/*        <option lang="de" value="deutsch">Deutsch</option>*/}
                        {/*        <option lang="en" value="english">English</option>*/}
                        {/*        <option lang="fr" value="francais">Français</option>*/}
                        {/*        <option lang="it" value="italiano">Italiano</option>*/}
                        {/*    </select>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default NavBar;