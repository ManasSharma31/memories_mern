import { useDispatch, useSelector } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import { fetch } from "./redux/actions/actions";
import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from "./components/Register";
import { auth } from './firebase'
import { setUser } from "./redux/actions/user";
import Login from "./components/Login";



function App() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.userR);

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch(setUser(authUser))
      }
      else {
        dispatch(setUser(null))
      }
    })
  }
    , [])

  useEffect(() => {
    dispatch(fetch())

  }, [dispatch])
  return (
    <Router>
      <div>
        <Header />
        <Switch>

          {!user ? <Login /> : <>
            <Route exact path='/'>
              <Body />
            </Route>
            <Route path='/auth'>
              <Register />
            </Route>
          </>
          }

        </Switch>
      </div>
    </Router>
  );
}

export default App;
