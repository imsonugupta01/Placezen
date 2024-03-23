import React from "react";
import "./Adminresult.css"
import { Link, useParams } from "react-router-dom";
function Adminresult()
{ let{Id}=useParams();
    return(
        <div>
            <div id="bcd"> I.K. Gujral Punjab Technical University</div>
            <div id="Co">


            <div id="titud">

            <table id="titu" >
                <tr id="tri"><th id="thi">Zscalar</th></tr>
                <tr id="tri"><th id="thi">cognizant</th></tr>
                <tr id="tri"><th id="thi">Wipro</th></tr>
                <tr id="tri"><th id="thi">Zscalar</th></tr>
                <tr id="tri"><th id="thi">cognizant</th></tr>
                <tr id="tri"><th id="thi">Wipro</th></tr>
            </table>
            </div>


           
            <Link id="addu" to={`/AddResult/${Id}`}><button >Add more results</button></Link>
            {/* <Link id="addu" to={`/AddResult/${Id}`}><button style={{ width: '60%', backgroundColor: 'green', color: '#fff', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Save All</button></Link> */}
            </div>
        </div>
    )
}
export default Adminresult;