import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Profile from "../../pages/Profile/Profile";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    connected: state.user.connected,
  };
};

export default connect(mapStateToProps)(App);
