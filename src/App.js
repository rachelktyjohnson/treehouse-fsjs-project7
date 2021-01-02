import './App.css';
import {Header} from "./Components/Header";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {PhotoContainer} from "./Components/PhotoContainer";
import {PageNotFound} from "./Components/PageNotFound";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Header/>
              <Switch>
                <Route exact path="/" render={()=><h1>Search for some photos!</h1>}/>
                <Route path ="/cats" component={PhotoContainer}/>
                <Route component={PageNotFound}/>
              </Switch>

          </div>
      </BrowserRouter>
  );
}

export default App;
