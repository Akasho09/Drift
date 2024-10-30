import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin  } from "./pages/Signin";
import { Dashboard} from "./pages/dashboard"
import { Sendpage } from "./pages/send";

function App() {
  return (
    <>
<BrowserRouter>
<Routes>
  <Route path="/"></Route>
  <Route path="/user/signup" element={<Signup/>}></Route>
  <Route path="/user/signin" element={<Signin/>}></Route>
  <Route path="/dashboard" element={<Dashboard/>}></Route>
  <Route path="/send" element={<Sendpage/>}></Route>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
