import { BrowserRouter, Routes, Route } from "react-router-dom";

import EditProfile from "./components/EditProfile/EditProfile";
import Header from "./components/Header/Header";
import MyProfile from "./components/MyProfile/MyProfile";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <div className="rightSide">
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
