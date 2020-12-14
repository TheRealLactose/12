import React from 'react'
import "./index.css"
import Agatsuma from '../../assets/images/Agatsuma.png'
import { Link } from 'react-router-dom';


function Menu(){
    return(
    <div className="all">
        <div className="logo">
            <img className="znitsu" src={Agatsuma} alt="logo"/>
        </div>
        <div className="bo">
            <ul>
               <Link to="/"><li>inicio</li></Link> 
                <li>conteudo</li>
                <li>discussão</li>
               <Link to="/Cadastro"><li>Login/Cadastrar</li></Link> 
            </ul>
        </div>
    </div>
    )
}
export default Menu;