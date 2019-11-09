import React from 'react';

export default function NavBar(props){

        return(
            <div className="navigation">
                <div className="nav-title">
                <nav>
                    <ul>
                    <li><a name=".home" onClick={props.handleClick} href="#home">Home</a></li>
                    <li><a name=".features" onClick={props.handleClick} href="#features">Features</a></li>
                    <li><a name=".support" onClick={props.handleClick} href="#support">Support</a></li>
                    </ul>
                </nav>
                </div>
            </div>
        )
    }



