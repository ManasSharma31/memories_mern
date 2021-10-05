import { useDispatch, useSelector } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import { fetch } from "./redux/actions/actions";
import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from "./components/Register";




function App() {
  const dispatch = useDispatch();


  // useEffect(() => {
  //   dispatch(fetch())

  // }, [dispatch])
  return (
    <Router>
      <div>
        <Header />
        <Switch>

          <Route path='/auth'>
            <Register />
          </Route>
          <Route exact path='/' component={Body}>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
