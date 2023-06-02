import React, { useState } from "react";

const AddUser = (props) => {
  const initialFormState = {
    id: null,
    empid: "",
    empname: "",
    emailid: "",
    department: "",
  };
  const [user, setUser] = useState(initialFormState)
  const [errors, setErrors] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()

    const errors = validateUser(user)
    if (Object.keys(errors).length > 0) {
      setErrors(errors)
    } else {
      props.addUser(user)
      setUser(initialFormState)
      setErrors({})
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
    setErrors(validateUser({...user, [name]: value}))

  }

  const validateUser = (user) => {
    const errors = {}

 // Validate empid field
 if (!/^[0-9]+$/.test(user.empid)) {
  errors.empid = "Please enter a valid empid";
}

// Validate empname field
if ( !/^\S*$/.test(user.empname)) {
  errors.empname = "Please enter a valid empname";
}

/*Validate emailid field
if (!/\S+@\S+\.\S+/.test(user.emailid)) {
  errors.emailid = "Please enter a valid email address";
}
*/
return errors;
};

 return (
    <form onSubmit={handleSubmit}>
      <label>EmpId</label>
      <input
        type="text"
        name="empid"
        value={user.empid}
        onChange={handleInputChange} required
      />
      {errors.empid && <p>{errors.empid}</p>}

      <label>EmpName</label>
      <input
        type="text"
        name="empname"
        value={user.empname}
        onChange={handleInputChange} required
      />
      {errors.empname && <p>{errors.empname}</p>}

      <label>Email</label>
      <input
        type="email"
        name="emailid"
        value={user.emailid}
        onChange={handleInputChange} required
      />
      {errors.emailid && <p>{errors.emailid}</p>}

      <label>Department</label>
      <input
        type="text"
        name="department"
        value={user.department}
        onChange={handleInputChange} required
      />

      <button>Add New User</button>
    </form>
  );
};

export default AddUser;