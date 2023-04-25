import Navbar from "./Component/Navbar";
import Usertable from "./Component/Usertable";
import { Routes, Route } from "react-router-dom";
import UserTable2 from "./Component/Usertable2";
import UserTable3 from "./Component/Usertable3";
import UserTable4 from "./Component/Usertable4";
import UserTable5 from "./Component/Usertable5";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Usertable />} />
        <Route path="/2" element={<UserTable2 />} />
        <Route path="/3" element={<UserTable3 />} />
        <Route path="/4" element={<UserTable4 />} />
        <Route path="/5" element={<UserTable5 />} />
      </Routes>
    </div>
  );
}

export default App;
