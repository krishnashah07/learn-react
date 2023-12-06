import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import UserContext from "../utils/UserContext";


const Header = () =>

  {
    const [btnName,setBtnName] = useState("login");
    const { loggedInUser } = useContext(UserContext);

   // Subscribing to the store using a Selector
   const cartItems = useSelector((store) => store.cart.items);
   return (
      <div className="flex justify-between bg-pink-200 ">
         <div className="logo-container">
              <img className = "w-56" src = {LOGO_URL} />

         </div>
        <div className="flex items-center">
           <ul className="p-4 m-4 flex"> 
              <li className="px-4"><Link to ="/">Home </Link></li>
              <li className="px-4"><Link to ="/about">AboutUs </Link></li>
              <li className="px-4"><Link to ="/contact">Contactus </Link></li>
              <li className="px-4 font-bold text-lg">
              <Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
             <button className="login" onClick={()=>{
              btnName === "login"
              ?setBtnName("logout")
              :setBtnName("login");}}>{btnName}</button>
             <li className="px-4 ">{loggedInUser}</li>

           </ul>


        </div>

      </div>
    );
    

  };
 export default Header;