import { useEffect } from "react";
import Mainbody from "./components/HomePage/Mainbody/Mainbody";
import Connect from "./components/Connect/Connect";
import PostSection from "./components/ProfilePage/PostSection";
import BookmarkSection from "./components/ProfilePage/BookmarkSection";
import Login from "./components/Login/login";
import SingUp from "./components/SignUp/SingUp";
import Verification from "./components/Otp/Verification";
import { loadUser } from "./actions/User";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

import "./App.scss";

function App() {
    const { isAuthenticated } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUser());
       }, [dispatch]);
    
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={isAuthenticated? <Mainbody />: <Login />} />
            <Route exact path="/connect" element={<Connect />} />
        <Route exact path="/profile" element={<PostSection />} />
        <Route exact path="/bookmark" element={<BookmarkSection />} />
        <Route exact path="/signup" element={<SingUp />} />
        <Route exact path="/verify" element={<Verification />}/>
       
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
