import {CDN_URL} from "../utils/constant";

     
    const RestaurantCard = (props) =>
    {
       const {resData} = props;
       const {cloudinaryImageId,name,cuisines,costForTwo,avgRating } = resData?.info;
       return(
         <div className="m-4 p-4 w-[400px] rounded-lg  bg-gray-200" >

          <img className="h-auto  rounded-lg "   src ={CDN_URL+cloudinaryImageId}></img>
          
          <h3 className="font-bold
          py-6 text-lg">{name}</h3>
          <h4>{cuisines}</h4>
          <h4>{costForTwo}</h4>
          <h4>{avgRating}</h4>
          
    
        </div>
    
    
       );
    };

//high order component


export default RestaurantCard;        