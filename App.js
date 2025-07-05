import { Route, Routes } from 'react-router-dom';
import Loginpage from "./Loginpage";
import SignUP from './SignUP';

function App() {
 
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Loginpage/>}/>
      <Route path="/signup" element={<SignUP/>}/>
      </Routes>
    </div>
  );
}

export default App;
