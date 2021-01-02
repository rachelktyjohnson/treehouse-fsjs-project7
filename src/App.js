import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {PhotoContainer} from "./Components/PhotoContainer";
import {Home} from "./Components/Home";
import {Header} from "./Components/Header";
import {PageNotFound} from "./Components/PageNotFound";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Header/>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path ="/cats" component={PhotoContainer}/>
                <Route component={PageNotFound}/>
              </Switch>

          </div>
      </BrowserRouter>
  );
}

export default App;
