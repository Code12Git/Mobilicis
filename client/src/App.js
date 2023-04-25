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
        <Route path="/users1" element={<Usertable />} />
        <Route path="/users2" element={<UserTable2 />} />
        <Route path="/users3" element={<UserTable3 />} />
        <Route path="/users4" element={<UserTable4 />} />
        <Route path="/users5" element={<UserTable5 />} />
      </Routes>
    </div>
  );
}

export default App;
