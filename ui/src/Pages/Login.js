import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Login(){
  let[Username,setUsername] = useState("");
  let[Password,setPassword]=useState("");
  let[Id,setId]=useState();
  function input1(event){
    console.log(event.target.value);
    setUsername(event.target.value);
  }
  function input2(event){
    console.log(event.target.value);
    setPassword(event.target.value);
  }
  useEffect(() => {

      
    const fetchData = async () => {
      try {
        
        let response = await fetch(`http://localhost:8050/student/GetProfile/${Username}/${Password}`);
      
      
        if(!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        
        console.log(data);
        setId(data);
      } catch (error) {
        console.error('Error fetching data: ', error.message);
      }
    };
  

     if(Username || Password)
        {  console.log(Username +" " + Password )
          fetchData();}

  }, [Username, Password]);



 
    return(
      <div>
        <h1>Login Page</h1>
        <input value ={Username} onChange={input1} placeholder="Username "></input><br></br><br></br>
        <input value={Password} onChange={input2} placeholder="Password "></input><br></br><br></br>
        <button ><Link to={`StudentProfile/${Id}`}>Login</Link></button><br></br><br></br>
        Create an account <button><Link to="/SignUp">SignUp</Link></button><br></br>
      </div>
      
      
    );
}
export default Login;