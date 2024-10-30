import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";


function App() {
  return (
    <>
<BrowserRouter>
<Routes>
  <Route path="/"></Route>
  <Route path="/user/signup" element={<Signup/>}></Route>
  <Route path="/user/signin" element={<Signin/>}></Route>
  <Route></Route>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
