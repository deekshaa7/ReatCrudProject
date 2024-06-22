import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const RecEdit = () => {
    const [mydata, setMydata] = useState({});
    const { id } = useParams();

    const loadData = () => {
        let api = `http://localhost:3000/students/${id}`
        axios.get(api).then((res) => {
            setMydata(res.data);
        });
    };

    useEffect(() => {
        loadData();
    }, [id]); 

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setMydata(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = () => {
        let url = `http://localhost:3000/students/${id}`
        axios.put(url, mydata).then((res) => {
            alert("Data Successfully Updated");
        })
    }

    return (
        <div className="container2">
            <h1>Edit Data !!!</h1>
            <div className="form-group2">
                <label>Roll No:</label>
                <input type="text" name="rollno" value={mydata.rollno || ''} onChange={handleInput} /><br />
                <label>Name:</label>
                <input type="text" name="name" value={mydata.name || ''} onChange={handleInput} /><br />
                <label>City:</label>
                <input type="text" name="city" value={mydata.city || ''} onChange={handleInput} /><br />
                <label>Fees:</label>
                <input type="text" name="fees" value={mydata.fees || ''} onChange={handleInput} /><br />
                <button onClick={handleSubmit}>Update Data</button>
            </div>
        </div>
    );
};

export default RecEdit;
