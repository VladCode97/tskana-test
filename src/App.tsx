import React from 'react';
import {Menu} from "./core/ui/menu/menu";
import {Footer} from "./core/ui/footer/footer";
import {Header} from "./core/ui/header/header";
import {Auth} from "./features/ui/auth/auth";
import {Home} from "./features/ui/home/home";
import {Route, Switch, BrowserRouter} from 'react-router-dom';


function App() {
    return (
        <div className="App">
            <Menu/>
            <Header/>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Auth}/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/auth" component={Auth}/>
                </Switch>
            </BrowserRouter>
            <Footer/>
        </div>
    );
}

export default App;
