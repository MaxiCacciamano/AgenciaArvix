import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import { Proyectos } from "./components/pages/Proyectos.jsx";
import { Seo } from "./components/pages/Seo.jsx";
import { Mercado } from "./components/pages/Mercado.jsx";
import { Nosotros } from "./components/pages/Nosotros.jsx";
import { Contacto } from "./components/pages/Contacto.jsx";
import { Sem } from "./components/pages/Sem.jsx";
import { Ecommerce } from "./components/pages/Ecommerce.jsx";

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
          <Route path="/Seo" element={<Seo/>}/>
          <Route path="Marketing-Investigación" element={<Mercado/>}/>
          <Route path="/Nosotros" element={<Nosotros/>}/>
          <Route path="/Contacto" element={<Contacto/>}/>
          <Route path="/SEM" element={<Sem/>}/>
          <Route path="/Ecommerce" element={<Ecommerce/>}/>
        </Routes>
      {/* </Layout> */}
    </Router>
  );
}

export default App;
