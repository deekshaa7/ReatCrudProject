import { useEffect, useState } from "react";
import axios from "axios";
import editimg from '../assets/images/editt.jpg';
import deleteimg from '../assets/images/edit.jpg';
import { useNavigate } from 'react-router-dom';


const Update = () => {
    const [mydata, setMydata] = useState([]);
    const navigate = useNavigate();

    const loadData = () => {
        let url = "http://localhost:3000/students";
        axios.get(url).then((response) => {
            setMydata(response.data);
        });
    }

    useEffect(() => {
        loadData();
    }, []);

    const delrec = (id) => {
        let url = `http://localhost:3000/students/${id}`;

        axios.delete(url).then((response) => {
            alert("Record Deleted");
            loadData();
        });
    }

    const editRec = (id) => {
        navigate("/myedit/" + id);
    }

    const ans = mydata.map((key) => {
        return (
            <tr key={key.id}>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
                <td>
                    <a href="#" onClick={() => { editRec(key.id) }}>
                        <img src={editimg} width="20" alt="Edit" />
                    </a>
                </td>
                <td>
                    <a href="#" onClick={() => { delrec(key.id) }}>
                        <img src={deleteimg} width="20" alt="Delete" />
                    </a>
                </td>
            </tr>
        )
    });

    return (
        <div className="container">
            <h1 className="heading">Update Data</h1>
            <table className="table1">
                <thead>
                    <tr>
                        <th>Roll No</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Fees</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>{ans}</tbody>
            </table>
        </div>
    )
}

export default Update;
