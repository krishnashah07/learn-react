import RestaurantCard from "./RestaurantCard";
import {useState , useEffect,useContext} from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () =>
{
   
   const [listOfRestaurants,setListOfRestaurants] = useState([]);
   const[filterRestaurant,setFilterRestaurant] = useState([]);
   const[searchText,setSearchText] = useState("");

   console.log(listOfRestaurants);
   // // let listOfRestaurants = [
   // //    {
         
   //          "info": {
   //            "id": "48581",
   //            "name": "Rotti Walla",
   //            "cloudinaryImageId": "kvlaq1ugkoozqr741zrv",
   //            "cuisines": [
   //              "North Indian",
   //              "Chinese",
   //              "Snacks",
   //              "Beverages",
   //              "Tandoor"
   //            ],
   //            "avgRating": 4.5,
   //      },
              
   //    },

   //    {
   //       "info": {
   //         "id": "709119",
   //         "name": "Irani Std. Tea",
   //         "cloudinaryImageId": "1e756ee8d230b65d570f7e8e70f7062c",
           
   //         "cuisines": [
   //           "Beverages",
   //           "Snacks",
   //           "Fast Food"
   //         ],
   //         "avgRating": 3.4,
           
         
         
   //      },
   //    }, 
   //    {
   //       "info": {
   //         "id": "577017",
   //         "name": "Crispy Studio",
   //         "cloudinaryImageId": "ioqg6ynikepkzqcq5gue",
          
   //         "cuisines": [
   //           "Burgers",
   //           "Biryani",
   //           "American",
   //           "Turkish",
   //           "Salads",
   //           "Fast Food"
   //         ],
   //         "avgRating": 4.3,
          
   //     },
   //    },    
      
   // // ];
   useEffect(() => {
      fetchData();
   },[]);

   const fetchData = async() => {

    const data =  await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
    const json = await data.json();
    console.log(json);
   setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);//handle data
   setFilterRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);//handle data

   };
   const { loggedInUser, setUserName } = useContext(UserContext);

  return(
     <div className="body">
      <div className="filter flex">
      <div  className="search m-4 p-4">
         <input type = "text" className="border border-solid border-black" value={searchText} onChange={(e)=>{
           setSearchText(e.target.value);
         }}/>
         <button className="px-4 py-2 m-4 bg-green-100 rounded-lg" onClick={() => {
         console.log(searchText);
         const filterRestaurant  = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
         setFilterRestaurant(filterRestaurant);
         }}>search</button>
      
      
      </div>
       <div className="search m-4 p-4 flex items-center">
       <button className="px-4 py-2 m-4 bg-gray-100 rounded-lg" onMouseOver={() => {
        const filterList = listOfRestaurants.filter
         ((res) => res.info.avgRating>4.5);
         setListOfRestaurants(filterList);
       }} >Top-Rateed restaurant
       </button>
          <label>UserName : </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
       </div>
       
       </div>
     
     
     <div className="flex flex-wrap
     ">
      {
         filterRestaurant
         .map(
            (restaurant) =>(
            <Link   key ={restaurant.info.id} to = {"/restaurants/"+restaurant.info.id}>
              
               <RestaurantCard resData={restaurant} /> 
              
              
               </Link>
            ))}
     </div>
   </div>

  );



};
export default Body;