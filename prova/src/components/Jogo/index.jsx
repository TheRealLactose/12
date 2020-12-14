import React, { useState } from 'react'
import Tabela from '../../json/tabela.json'
import './index.css'

function Jogo() {
    const[sim, setSim]=useState(false);
    return (
        <div className="jogo-all">
            <div className="jogo-title">
                <h1>ZENITSU THE FLASH SWORD</h1>
            </div>
            <div className="jogo-subtitle">
                <h3>Data e Hora de Lançamento do jogo</h3>
            </div>
            <div className="jogo-tabela">
                <table border="1">
                    <tr>
                        <td>País</td>
                        <td>Data</td>
                        <td>Hora</td>
                    </tr>
                        {Tabela.map(item => <tr key={item.id}>
                            <td>{item.Pais}</td>
                            <td>{item.Data}</td>
                            <td>{item.Hora}</td>
                            </tr>)}
                </table>
            </div>
            <h4 className="pergunta">Se essa informação foi útil para você clique no botão :)</h4>
            <div className="butoes">
                <div className="butao1">
                    <button className="sim" onClick={()=> setSim(true)} >Gostei da Informação</button>
                </div>
            </div>
            {sim &&
            <h1 className="s">obrigado por acessar o site !</h1>
            }
        </div>
    )
}

export default Jogo;