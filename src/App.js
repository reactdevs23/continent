import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import EditProfile from "./components/EditProfile/EditProfile";
import Header from "./components/Header/Header";
import MyProfile from "./components/MyProfile/MyProfile";
import Sidebar from "./components/Sidebar/Sidebar";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <div className="rightSide">
          <Banner />

          <Routes>
            <Route path="/" element={<MyProfile />}></Route>{" "}
            <Route path="/editprofile" element={<EditProfile />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
