import { useEffect, useState } from "react";
import { Form } from "../componants/Form.jsx";
import { ShowForm } from "../componants/Showform.jsx";
import "../componants/print.css";
import { nanoid } from "nanoid";
export const PrintForm = () => {
  let [list, setList] = useState([]);

  let [page, setPage] = useState(1);

  useEffect(() => {
    getTodo(page);
  }, [page]);
  const getTodo = (page) => {
    fetch(`http://localhost:5000/api/form?_page=${page}&_limit=3`)
      .then((d) => d.json())
      .then((res) => {
        setList(res);
      });
  };
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
      ProfileLink: form.ProfileLink,
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
    getTodo();
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

  const handleSort = () => {
    fetch(`http://localhost:5000/api/form?_sort=Salary&_order=asc`)
      .then((d) => d.json())
      .then((res) => {
        console.log(res)
        setList(res);
      });
  };
  return (
    <>
      <Form getData={handleData} />
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev Page
      </button>
      <button onClick={handleSort}>Sort By Salary from high to low</button>
      <button onClick={() => setPage(page + 1)}>Next Page</button>
      <h4>Page : {page}</h4>
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
