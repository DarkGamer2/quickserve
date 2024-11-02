import SideNav from "../components/SideNav";
import { useState ,useEffect} from "react";
import axios from "axios";
const Dashboard=()=>{
  const [jobs,setJobs]=useState([]);
    return(
      <div>
          <h1>Dashboard</h1>
          <SideNav/>
          <div>
            <p>No Jobs To Display</p>
          </div>
      </div>

    )
}

export default Dashboard;