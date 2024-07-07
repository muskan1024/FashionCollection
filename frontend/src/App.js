import { Toaster } from "react-hot-toast";
import Landing from "./Components/Landing";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false}/>
      <Landing />
    </>
  );
}

export default App;
