import React from 'react';
import Logo from '../../assets/Logo.png';
import './Menu.css'
import Button from '../Button'
// import ButtonLink from './components/ButtonLink/index'

function Menu() {
    return ( 
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="AluraFlexLogo"/>
            </a>
            <Button className="ButtonLink" href="/">
                Novo Vídeo    
            </Button>
        </nav>
    );
}

export default Menu;