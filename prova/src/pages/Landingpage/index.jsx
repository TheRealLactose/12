import React from 'react'
import Menu from '../../components/Menu'
import Rodape from '../../components/Rodape'
import Jogo from '../../components/Jogo'
import './index.css'

function Lpage(){
    return (
        <body>
            <header>
                <Menu />
            </header>
            <section>
                <div className="jg">
                    <Jogo/>
                </div>
            </section>
            <footer>
                <Rodape />
            </footer>
        </body>
    )
}
export default Lpage;