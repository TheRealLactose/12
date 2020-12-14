import React from 'react'
import './App.css';
import Lpage from './pages/Landingpage';
import Erro from './pages/Erro';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Lcadastro from './pages/Cadastro';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" exact component={Lpage} />
          <Route path="/Cadastro" component={Lcadastro}/>
          <Route path="*" component={Erro} />
      </Switch>
    </Router>
  )

}

export default App;
