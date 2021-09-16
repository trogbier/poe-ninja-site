import React from 'react';
import './App.css'
import NavBar from "./component/NavBar";
import MainPage from "./pages/MainPage";
import {
    Switch,
    Route, Redirect,
} from "react-router-dom";

const App = () => {
    return (
        <div className={"App"}>
            <NavBar/>
            <Switch>
                <Route path={'/'} component={MainPage}/>
            </Switch>
            <Redirect to={'/'}/>
        </div>
    );
};

export default App;