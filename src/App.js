import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Spinner from './Components/Spinner/Spinner';
import MainRouter from "./MainRouter";
import checkTokenAuth from './redux/lib/Helpers/checkTokenAuth'
import { Provider } from "react-redux";
import store from "./redux/store/store";

checkTokenAuth(store);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <React.Suspense fallback={<Spinner />}>
          <MainRouter />
        </React.Suspense>
      </Router>
    </Provider>
  );
}


export default App
