import { useState } from "react";
import Landing from "./Components/Landing";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";

function App() {
  const [showLogin,setShowLogin]=useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin} setIsLoggedIn={setIsLoggedIn} />:<></>}
      <Navbar setShowLogin={setShowLogin} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      {/* <Navbar /> */}
      <Landing />
    </>
  );
}

export default App;
