import { useDispatch } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import { fetch } from "./redux/actions/actions";
import { useEffect } from 'react';



function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch())

  }, [dispatch])
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}

export default App;
