import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";

export const Navbar = () => {
  const [openMenu, setopenMenu] = useState(false);
  return (
    <nav>    
      <div onClick={()=>{
        setopenMenu(!openMenu);
      }}>
        <CiMenuFries className="lg:hidden sm:flex fixed top-0 right-0 z-10 mr-2 mt-2 text-2xl "/>
      </div>
      <ul className={openMenu ? "flex-col fixed top-0 bg-primary text-white w-full text-lg" : "hidden gap-4  md:flex md:fixed md:bg-primary text-white top-0 md:w-full text-lg"}>
       
        <li className="ml-2 mt-2">
          <NavLink to="/inicio">Início</NavLink>
        </li>
        <li className="ml-2 mt-2">
          <NavLink to="/comprar">Comprar</NavLink>
        </li>
        <li className="ml-2 mt-2">
          <NavLink to="/receita">Enviar Receita</NavLink>
        </li>
        <li className="ml-2 mt-2">
          <NavLink to="/fidelidade">Fidelidade</NavLink>
        </li>
        <li className="ml-2 mt-2 mb-2">
          <NavLink to="/sobre">Sobre Nós</NavLink>
        </li>
       
      </ul>
    </nav>
  );
};

export default Navbar;
