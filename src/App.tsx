import React from 'react';
import {Menu} from "./core/ui/menu/menu";
import {Footer} from "./core/ui/footer/footer";
import {Header} from "./core/ui/header/header";
import {Auth} from "./features/ui/auth/auth";

function App() {
    return (
        <div className="App">
            <Menu/>
            <Header/>
            <Auth/>
            <Footer/>
        </div>
    );
}

export default App;
