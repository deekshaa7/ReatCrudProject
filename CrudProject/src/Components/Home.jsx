import { useEffect, useState } from "react";
import axios from "axios";

const Home=()=>{


    const [mydata, setMydata]=useState([]);
    const loadData = () => {
        let url="http://localhost:3000/students";
         axios.get(url)
        .then((response) => {
        setMydata(response.data);
        console.log(response);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }
  useEffect(() => {
    loadData();
  }, []);

  const ans=mydata.map((key)=>{
    return(
        <>
    <tr>
        <td>{key.rollno}</td>
        <td>{key.name}</td>
        <td>{key.city}</td>
        <td>{key.fees}</td>
    </tr>
    </>
    )
  })
    return(
        <>
            <div className="container">
            <h1 className="heading">Student Data</h1>
           
            <table align="center" border="4" color="white" className="table1" >
            <tr border="4">
                <th border="4">Roll No</th>
                <th border="4">Name</th>
                <th border="4">City</th>
                <th border="4">Fees</th>
            </tr>
            {ans}
        </table>
            
            </div>
        </>
    )
}
export default Home;