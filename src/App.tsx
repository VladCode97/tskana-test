import React from 'react';
import {Menu} from "./core/components/menu/menu";
import {Footer} from "./core/components/footer/footer";
import {Header} from "./core/components/header/header";

function App() {
    return (
        <div className="App">
            <Menu/>
            <Header/>
            <div style={{height: "70vh"}}>
                <h1>
                    hello
                </h1>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
