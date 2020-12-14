import React from 'react'
import Zenitsu from '../../assets/images/zenitsu.png'
import Facebook from '../../assets/images/facebook.png'
import Instagram from '../../assets/images/Instagram.png'
import Twitter from '../../assets/images/Twitter.png'
import './index.css'
function Rodape() {
    return (
        <div className="all2">
            <div className="logo2">
                <img className="espadao" src={Zenitsu} alt="logo2" />
            </div>
            <div className="contatos">
                <ul>
                    <li>Email: zenitsu@gmail.com</li>
                    <li>Telefone: (45) 99999-9999</li>
                </ul>
            </div>
            <div className="redessociais">
                <a href="/"><img className="fb" src={Facebook} alt="facebook" /></a>
                <a href="/"><img className="ig" src={Instagram} alt="instagram" /></a>
                <a href="/"><img className="tt" src={Twitter} alt="twitter" /></a>
            </div>
        </div>
            
    )
}
export default Rodape;