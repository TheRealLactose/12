import React from 'react'
import Menu from '../../components/Menu'
import Rodape from '../../components/Rodape'
import Erro from '../../assets/images/erro.png'
import './index.css'
import { Link } from 'react-router-dom'
function Error(){
    return(
        <div>
            <header>
            <Menu/> 
            </header>
            <div className="fort">
                <img className="pageE" src={Erro} alt="erro"/>
                <h1 className="txterro">ERROR 404</h1>
                <Link to="/"><button className="vl">VOLTAR</button></Link>
            </div>
            <footer>
            <Rodape/>
            </footer>
        </div>
    )
}

export default Error;