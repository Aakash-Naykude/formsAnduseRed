import "../componants/show.css";
export const ShowForm = ({
  Name,
  Age,
  Adress,
  Department,
  Salary,
  MaritalS,
  Profile,
}) => {
  return (
    <>
      <table  className="listb">
        <tr>
          <td>{Name}</td>
          <td>{Age}</td>
          <td>{Adress}</td>
          <td>{Department}</td>
          <td>{Salary}</td>
          <td>{Profile}</td>
          <td>{MaritalS}</td>
          <td><button>Delete Details?</button></td>
        </tr>
      </table>
    </>
  );
};
