import { type } from "@testing-library/user-event/dist/type";
import { useRef, useState } from "react";
import "../componants/form.css";
export const Form = ({ getData }) => {
  let IsMarried;
  const [form, setFrom] = useState(null);
  const fileRef = useRef();
  const handleChange = (e) => {
    let { name, value, checked, type } = e.target;
    value = type === "checkbox" ? checked : value;

    if (checked === true) {
      setFrom({
        ...form,
        ["MaritalS"]: "Married",
      });
    } else {
      setFrom({
        ...form,
        [name]: value,
        ["MaritalS"]: "Not Married",
      });
    }
    //console.log(form);
  };
  const submittedData = (e) => {
    e.preventDefault();
    getData(form);
    //console.log(form, fileRef.current.files[0]);
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
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="MaritalS"
                  checked={IsMarried}
                />
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
            <td>
              <label>
                Profile Pic Link :
                <input
                  onChange={handleChange}
                  type="text"
                  name="ProfileLink"
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
