import React,{useState} from 'react'
import './index.css'

function Cadastro(){
    const [emal, setEmal]=useState("");
    const [nom, setNom]=useState("");
    const [snom, setSnom]=useState("");
    const [call, setCall]=useState("");
    const [dat, setDat]=useState("");
    const [check, setCheck]=useState(false);

    function cadastrarSubmit(event){
        event.preventDefault();
        console.log(emal);
        console.log(nom);
        console.log(snom);
        console.log(call);
        console.log(dat);
        console.log(check);
    }

    const cadastrarEmail = (e) => {
        setEmal(e.target.value);
    }
    const cadastrarNome = (e) => {
        setNom(e.target.value);
    }
    const cadastrarSobrenome = (e) => {
        setSnom(e.target.value);
    }
    const cadastrarTelefone = (e) => {
        setCall(e.target.value);
    }
    const cadastrarData = (e) => {
        setDat(e.target.value);
    }
    const cadastrarCheck = (e) => {
        setCheck(e.target.value);
    }
    return(
        <div className="cadastro-all">
            <h1>Cadastre-se</h1>
        <form onSubmit={cadastrarSubmit} className="cadastro-registro">
            <div className="cadastro-caixa">
                <label for="email"> E-mail </label>
                <input className="cadastro-email" type="email" name="email" placeholder="digite seu e-mail" value={emal} onChange={cadastrarEmail}/>
            </div>
            <div className="cadastro-meiacaixa spacing">
                <label for="nome"> Nome </label>
                <input className="cadastro-nome" type="text" name="nome" placeholder="digite seu nome" value={nom} onChange={cadastrarNome}/>
            </div>
            <div className="cadastro-meiacaixa">
                <label for="sobrenome"> Sobrenome </label>
                <input className="cadastro-sobrenome" type="text" name="sobrenome" placeholder="digite seu sobrenome" value={snom} onChange={cadastrarSobrenome}/>
            </div>
            <div className="cadastro-meiacaixa spacing">
                <label for="senha"> Telefone </label>
                <input className="cadastro-senha" type="tel" name="senha" placeholder="número de telefone" value={call} onChange={cadastrarTelefone}/>
            </div>
            <div className="cadastro-meiacaixa">
                <label for="senhaconf"> Data de nascimento </label>
                <input className="cadastro-senhaconf" type="date" name="senhaconf" value={dat} onChange={cadastrarData}/>
            </div>
            <div className="cadastro-meiacaixa">
                <input className="cadastro-marcar" type="checkbox" name="marcar" value={!check} onChange={cadastrarCheck}/>
                <label for="marcar" className="cadastro-marcarl">Receber novidades no meu e-mail</label>
            </div>
            <div className="cadastro-meiacaixa">
                <input className="cadastro-submit" type="submit" value="Registrar" />
            </div>
        </form>
        </div>
    )
    
}

export default Cadastro;