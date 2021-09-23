import NavBar from "./component/Navbar/Navbar";
import Main from './component/Main/Main';
import About from './component/About/About';
import Footer from "./component/Footer/Footer";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/about" exact component={About}/>
      </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
