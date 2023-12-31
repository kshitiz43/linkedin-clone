import React, { useEffect } from "react";
import "./App.css";
import Header from "./header";
import Sidebar from "./sidebar";
import Feed from "./Feed";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./Firebase";
import Widgets from "./Widgets";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            usid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoUrl,
          })
        );
      } else {
        //user is logged out
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="app">
      {/*header */}
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
          <Widgets />
          {/*Widgets */}
        </div>
      )}
    </div>
  );
}

export default App;
