import { useState } from "react";

function SignUp(){
  let[Roll,setRoll]=useState();
  let[Name,setName]=useState();
  let[DOB,setDOB]=useState();
  let[Mobile,setMobile]=useState();
  let[Gender,setGender]=useState();
  let[Email,setEmail]=useState();
  let[Linkedin,setLinkedin]=useState();
  let[Github,setGithub]=useState();
  let[CGPA,setCGPA]=useState();
  let[Skills,setSkills]=useState();
  let[Interest,setInterest]=useState();
  let[Portfolio,setPortfolio]=useState();
  let[Experience,setExperience]=useState();
  let[file,setFile]=useState(null);
  let[Password,setPassword]=useState();

  function input1(event){
    console.log(event.target.value)
    setRoll(event.target.value)
  }
  function input2(event){
    console.log(event.target.value)
    setName(event.target.value)
  }
  function input3(event){
    console.log(event.target.value)
    setDOB(event.target.value)
  }
  function input4(event){
    console.log(event.target.value)
    setMobile(event.target.value)
  }
  function input5(event){
    console.log(event.target.value)
    setGender(event.target.value)
  }
  function input6(event){
    console.log(event.target.value)
    setEmail(event.target.value)
  }
  function input7(event){
    console.log(event.target.value)
    setLinkedin(event.target.value)
  }
  function input8(event){
    console.log(event.target.value)
    setGithub(event.target.value)
  }
  function input9(event){
    console.log(event.target.value)
    setCGPA(event.target.value)
  }
  function input10(event){
    console.log(event.target.value)
    setSkills(event.target.value)
  }
  function input11(event){
    console.log(event.target.value)
    setInterest(event.target.value)
  }
  function input12(event){
    console.log(event.target.value)
    setPortfolio(event.target.value)
  }
  function input13(event){
    console.log(event.target.value)
    setExperience(event.target.value)
  }
  function input14(event){
    setFile(event.target.files[0])
  }
  function input15(event){
    console.log(event.target.value)
    setPassword(event.target.value)
  }
  function submit(event){
    event.preventDefault();
    const formdata = new FormData();
    formdata.append('roll',Roll)
    formdata.append('name',Name)
    formdata.append('dob',DOB)
    formdata.append('mobile',Mobile)
    formdata.append('gender',Gender)
    formdata.append('email',Email)
    formdata.append('linkedin',Linkedin)
    formdata.append('github',Github)
    formdata.append('cgpa',CGPA)
    formdata.append('skills',Skills)
    formdata.append('interest',Interest)
    formdata.append('portfolio',Portfolio)
    formdata.append('experience',Experience)
    formdata.append('file',file)
    formdata.append('password',Password);

    fetch('http://localhost:8050/student/signup', {
      method:'POST',
      body: formdata,
    
    })
      .then(response => response.text())
      .then(data => {
        console.log('SignUp successful:', data);
      })
      .catch(error => {
        console.error('Error during SignUp:', error);
      });

  }
  return(
    <div>
      <h1>SignUp Page</h1>
        <input onChange={input1} value={Roll} placeholder="Roll "></input><br></br>
        <input onChange={input2} value={Name} placeholder="Name "></input><br></br>
        <input onChange={input3} value={DOB} placeholder="DOB "></input><br></br>
        <input onChange={input4} value={Mobile} placeholder="Mobile "></input><br></br>
        <input onChange={input5} value={Gender} placeholder="Gender "></input><br></br>
        <input onChange={input6} value={Email} placeholder="Email " type="email"></input><br></br>
        <input onChange={input7} value={Linkedin} placeholder="Linkedin Link "></input><br></br>
        <input onChange={input8} value={Github} placeholder="Github Link "></input><br></br>
        <input onChange={input9} value={CGPA} placeholder="CGPA(Averge) "></input><br></br>
        <input onChange={input10} value={Skills} placeholder="Skills "></input><br></br>
        <input onChange={input11} value={Interest} placeholder="Interest "></input><br></br>
        <input onChange={input12} value={Portfolio} placeholder="Portfolio Link "></input><br></br>
        <input onChange={input13} value={Experience} placeholder="Experience "></input><br></br>
        <label>Choose your Image</label><br></br>
        <input onChange={input14} type="file"></input><br></br>
        <input onChange={input15} value={Password} placeholder="Password "></input><br></br>
        <button onClick={submit}>SignUp</button>
    </div>
  );
}
export default SignUp;