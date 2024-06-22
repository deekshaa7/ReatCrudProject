import { useState } from "react";
import axios from 'axios';


const Insert = () => {
    const [input, setInput] = useState([]);
    
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput(values => ({...values, [name]: value}));
    }
    
    const handleSubmit = () => {
        let url = "http://localhost:3000/students";

        axios.post(url, input).then((res) => {
            alert("Data added successfully");
        });
    }
    
    return (
        <div className="form-container">
            <h2>Insert Student Data</h2>
            <div className="form-group">
                <label>Enter Id:</label>
                <input type="text" name="id" onChange={handleInput} />
            </div>
            <div className="form-group">
                <label>Enter Roll No:</label>
                <input type="text" name="rollno" onChange={handleInput} />
            </div>
            <div className="form-group">
                <label>Enter Name:</label>
                <input type="text" name="name" onChange={handleInput} />
            </div>
            <div className="form-group">
                <label>Enter City:</label>
                <input type="text" name="city" onChange={handleInput} />
            </div>
            <div className="form-group">
                <label>Enter Fees:</label>
                <input type="text" name="fees" onChange={handleInput} />
            </div>
            <button onClick={handleSubmit} className="submit-button">Submit</button>
        </div>
    );
}

export default Insert;
