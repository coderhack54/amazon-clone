import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/main/Home";
import Checkout from "./Components/Checkout";
import Login from "./Components/auth/Login";
import { useEffect } from "react";
import Auth from "./Components/auth";
import Main from "./Components/main";
import { auth } from "./Components/firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will run only once the page loads
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is >>>", authUser);

      if (authUser) {
        // the user just logged in /the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user was logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    }); 
  }, []);

  return (
    // BEM Naming Convention
    <div className="App">
      {/* header */}
      <BrowserRouter>
        <Routes>
          <Route element={<Checkout />} path="/checkout" />
          <Route element={<Auth />} path="auth">
            <Route element={<Login />} path="login" />
          </Route>

          <Route element={<Main />} path="/">
            <Route element={<Home />} path="" />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
