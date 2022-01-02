import "../componants/show.css";
export const ShowForm = ({
  id,
  Name,
  Age,
  Adress,
  Department,
  Salary,
  MaritalS,
  Profile,
  handleDelete,
}) => {
  return (
    <>
      <table className="listb">
        <tr>
          <td>{Name}</td>
          <td>{Age}</td>
          <td>{Adress}</td>
          <td>{Department}</td>
          <td>{Salary}</td>
          <td><img className="imgs" src={Profile} alt="image"/></td>
          <td>{MaritalS}</td>
          <td>
            <button onClick={() => handleDelete(id)}>Delete Details?</button>
          </td>
        </tr>
      </table>
    </>
  );
};
