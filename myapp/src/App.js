import { Routes, Route, Link } from "react-router-dom";
import Dust from './Dust';
import Cctv from './Cctv';
import Traffic from './Traffic';

function App() {
  return (
    <>
      <ul className="w-[500px] p-4 flex justify-between m-auto">
        <li><Link to='/dust'>Dust Page</Link></li>
        <li><Link to='/Cctv'>CCTV Page</Link></li>
        <li><Link to='/Traffic'>Traffic Page</Link></li>
      </ul>
      <hr />
      <Routes>
        <Route path='/dust' element={<Dust />} />
        <Route path='/Cctv' element={<Cctv />} />
        <Route path='/Traffic' element={<Traffic />} />
      </Routes>
    </>
  );
}

export default App;