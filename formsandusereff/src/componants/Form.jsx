import { type } from "@testing-library/user-event/dist/type";
import { useRef, useState } from "react";
import "../componants/form.css";
export const Form = ({ getData }) => {
  const [form, setForm] = useState(null);
  const fileRef = useRef(null);
  const handleChange = (e) => {
    let { name, value, type, checked } = e.target;
    value = type === "checkbox" ? checked : value;
    value =
      type === "file" ? URL.createObjectURL(fileRef.current.files[0]) : value;
    setForm({ ...form, [name]: value });
  };
  const submittedData = (e) => {
    e.preventDefault();
    getData(form);
  };
  return (
    <>
      <form onSubmit={submittedData}>
        <table className="Form">
          <tr>
            <td>
              <label>
                Name :
                <input
                  onChange={handleChange}
                  type="text"
                  name="Name"
                  placeholder="Enter name"
                />
              </label>
            </td>
            <td>
              <label>
                Age :
                <input
                  onChange={handleChange}
                  type="number"
                  name="Age"
                  placeholder="Enter Age"
                />
              </label>
            </td>
            <td>
              <label>
                Address :
                <input
                  onChange={handleChange}
                  type="text"
                  name="Adress"
                  placeholder="Enter Adress"
                />
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <label>
                Department :
                <select onChange={handleChange} name="Department">
                  <option value="Mechanical">Mechanical</option>
                  <option value="Computer">Computer</option>
                  <option value="Auto mobile">Auto Mobile</option>
                  <option value="Information T">Information T</option>
                </select>
              </label>
            </td>
            <td>
              <label>
                Salary :
                <input
                  onChange={handleChange}
                  type="number"
                  name="Salary"
                  placeholder="Enter Salary"
                />
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <label>
                Marital State :
                <input type="checkbox" name="Married" onChange={handleChange} />
              </label>
            </td>
            <td>
              <label>
                Profile Pic :
                <input
                  onChange={handleChange}
                  type="file"
                  name="Profile"
                  ref={fileRef}
                />
              </label>
            </td>
          </tr>
        </table>
        <input className="delete" type="submit" name="Submit" />
      </form>
    </>
  );
};
