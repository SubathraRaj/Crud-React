import { useState, useEffect } from "react";

const EditUser = (props) => {
  const [user, setUser] = useState(props.currentUser)

  useEffect(() => {
    setUser(props.currentUser)
  }, [props])

  const handleInputChange = (event) => {
    const {name, value} = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit= { event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label> EmpId </label>
      <input
        type="text"
        onChange={handleInputChange}
        name="empid"
        value={user.empid}
      />
      <label> EmpName </label>
      <input
        type="text"
        onChange={handleInputChange}
        name="empname"
        value={user.empname}
      />
      <label> Email </label>
      <input
        type="text"
        onChange={handleInputChange}
        name="emailid"
        value={user.emailid}
      />
      <label> Department </label>
      <input
        type="text"
        onChange={handleInputChange}
        name="department"
        value={user.department}
      />

      <button> Update User </button>
      <button
        className="button muted-button"
        onClick={() => {
          props.setEditing(false);
        }}
      >
        Cancel
      </button>
    </form>
  );
};
export default EditUser;
