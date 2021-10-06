import { useDispatch, useSelector } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import { fetch } from "./redux/actions/actions";
import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from "./components/Register";




function App() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);



  useEffect(() => {
    dispatch(fetch())

  }, [dispatch])
  return (
    <Router>
      <div>
        <Header />
        <Switch>

          {!user ? (<Register />) : <Route exact path='/' component={Body} />}

        </Switch>
      </div>
    </Router>
  );
}

export default App;
