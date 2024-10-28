import { Route, Routes } from "react-router-dom";
import Navbar from "./commom/Navbar";
import Body from "./components/Body";

function App() {

  return (
  
   <div className="overflow-hidden max-w-[2000px] m-auto">
    <Navbar/>
    <Routes>
    <Route path="/" element={<Body />} />
    </Routes>
   </div>


  );
}

export default App;
