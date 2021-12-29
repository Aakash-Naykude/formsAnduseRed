import { useState } from "react";
import { Form } from "../componants/Form.jsx";
import { ShowForm } from "../componants/Showform.jsx";
import "../componants/print.css";
import { nanoid } from "nanoid";
export const PrintForm = () => {
  const [list, setList] = useState([]);
  let newList = async () => {
    let resp = await fetch("http://localhost:5000/api/form");
    let data = await resp.json();
    return data;
  };
  newList().then((e) => {
    console.log(e)
  });
  const handleData = async (form) => {
    const payload = {
      id: nanoid(8),
      Name: form.Name,
      Age: form.Age,
      Adress: form.Adress,
      Department: form.Department,
      Salary: form.Salary,
      MaritalS: form.MaritalS,
      Profile: form.Profile,
    };
    setList([...list, payload]);

    try {
      let resp = await fetch("http://localhost:5000/api/form", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await resp.json();
    } catch (e) {
      console.log(e);
    }
  };
  const handleDelete = async (id) => {
    setList(list.filter((list) => list.id !== id));

    let resp = await fetch(`http://localhost:5000/api/form/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const handleSort = ()=>{
    
  }
  return (
    <>
      <Form getData={handleData} />
      <button onClick={handleSort}>Sort</button>
      <table>
        <tr>
          <td className="listhead">Name</td>
          <td className="listhead">Age</td>
          <td className="listhead">Adress</td>
          <td className="listhead">Department</td>
          <td className="listhead">Salary</td>
          <td className="listhead">Profile</td>
          <td className="listhead">MaritalS</td>
          <td className="listhead">Delete details</td>
        </tr>
      </table>
      {list.map((e) => (
        <ShowForm key={e.id} {...e} handleDelete={handleDelete} />
      ))}
    </>
  );
};
