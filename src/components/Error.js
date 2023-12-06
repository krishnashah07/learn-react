import { useRouteError } from "react-router-dom";
const Error = () =>  {
    const err = useRouteError();
    console.log(err);
return(
  <div className="error-block">

    <h1>OOps!It something went wrong!!</h1>
  </div>


);

};
export default Error;