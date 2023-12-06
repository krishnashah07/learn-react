import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory= ({info,showItems,setShowIndex}) =>
     {
        const handleClick = () =>  {
            setShowIndex();
        
        };
    
return( 
      <div className="category">
        <div className="bg-gray shadow-lg mx-auto w-6/12 p-4 my-4 ">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            
            <span className="font-bold text-lg">{info.title}({info.itemCards.length})</span>
            <span>⬇️</span>
           </div>
          {showItems && <ItemList items={info.itemCards}/>}
        </div>

      </div>

);    
  



};
export default RestaurantCategory;
