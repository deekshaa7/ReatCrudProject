import axios from "axios";
import { useState } from "react";


const Search = () => {
    const [rollno, setRollno] = useState("");
    const [mydata, setMydata] = useState([]);

    const handleSubmit = () => {
        let url = `http://localhost:3000/students/?rollno=${rollno}`;
        axios.get(url).then((response) => {
            setMydata(response.data);
        }).catch((error) => {
            console.error("There was an error fetching the data!", error);
        });
    }

    const ans = mydata.map((key) => {
        return (
            <tr key={key.rollno}>
                <td>{key.name}</td>
                <td>{key.rollno}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
            </tr>
        );
    });

    return (
        <div className="container1">
            <h1>Search Employee Record</h1>
            <div className="form-group1">
                <label>Enter Roll No:</label>
                <input 
                    type="text" 
                    value={rollno} 
                    onChange={(e) => setRollno(e.target.value)} 
                />
                <button onClick={handleSubmit}>Search Record</button>
            </div>
            {mydata.length > 0 && (
                <table className="results-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Roll No</th>
                            <th>City</th>
                            <th>Fees</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ans}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Search;
