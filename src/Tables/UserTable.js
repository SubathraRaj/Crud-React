const UserTable = (props) => (
  <table>
    <thead>
      <tr>
        <th> ID </th>
        <th>EmpId</th>
        <th> EmpName </th>
        <th>Email Address</th>
        <th> Department </th>
        <th> Actions </th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user, index) => (
          <tr key={index}>
            <td> {index + 1}</td>
            <td> {user.empid}</td>
            <td> {user.empname} </td>
            <td> {user.emailid}</td>
            <td> {user.department} </td>
            <td> </td>
            <td>
              <button
                onClick={() => props.editRow(user)}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={4}> No Users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
