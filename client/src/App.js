import Home from "./pages/home/Home";
import TopMenuBar from "./components/topMenuBar/TopMenuBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { useContext } from "react";
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import { Context } from "./Context/Context";

function App() {

  const {user} = useContext(Context);

  return (
    <BrowserRouter>

      <TopMenuBar/>

      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/signup" element={user ? <Home/> : <Signup/>}/>
        <Route path="/login" element={user ? <Home/> : <Login/>}/>
        <Route path="/write" element={user ? <Write/> : <Signup/>}/>
        <Route path="/settings" element={user ? <Settings/> : <Signup/>}/>
        <Route path="/post/:postId" element={<Single/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
