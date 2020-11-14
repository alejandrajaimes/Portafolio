import Fondo from './componente/Fondo'
import Header from './componente/Header'
import Home from './vistas/Home'
import Informacion from './vistas/Informacion'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
  
    <Router>
      
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/Fondo" component={Fondo}></Route>
      <Route path="/Informacion" component={Informacion}></Route>
    </Switch>

</Router>
  );
}

export default App;
