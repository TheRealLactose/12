import React from 'react'
import Cadastro from '../../components/Cadastro'
import Menu from '../../components/Menu'
import Rodape from '../../components/Rodape'
import './index.css'

function Lcadastro(){
    return (
        <body>
            <header>
                <Menu />
            </header>
            <section>
                    <Cadastro/>
            </section>
            <footer>
                <Rodape />
            </footer>
        </body>
    )
}
export default Lcadastro;