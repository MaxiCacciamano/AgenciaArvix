import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import { Proyectos } from "./components/pages/Proyectos.jsx";

// function Layout({ children }) {
//   return (
//     <div className="px-10">
//       <div className="max-w-[2000px] mx-auto">
//         {children}
//       </div>
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      {/* <Layout> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Proyectos />} />
        </Routes>
      {/* </Layout> */}
    </Router>
  );
}

export default App;
