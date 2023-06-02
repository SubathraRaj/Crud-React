import { useState } from "react";
import AddUser from "./AddUser";
import UserTable from "./UserTable";
import EditUser from "./EditUser";

function App() {
  const usersData = [
    { id: 1, empid: "001", empname: "Aathi", emailid: "aathi@gmail.com", department: "Accounts" },
    { id: 2, empid: "002", empname: "Bharth", emailid: "bharath@gmail.com" ,department: "Admin" },
    { id: 3, empid: "003", empname: "Cibi", emailid: "cibi@gmail.com", department: "It" },
  ];

  const initialFormState = { id: null, empid: "", emailid: " ", empname: "", department: "" };
  const [users, setUser] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, SetCurrentUser] = useState(initialFormState);

  //Add User
  const addUser = (user) => {
    // checking duplicates
    const duplicateUser = users.find (
      (existingUser) =>
        existingUser.empid === user.empid ||
        existingUser.empname === user.empname ||
        existingUser.emailid === user.emailid
    );
    // if duplicate found display error msg and return early
    if (duplicateUser){
      alert('User Already Exist');
      return;
    }
    setUser([...users, user])
  };

  //Delete User

  const deleteUser = (id) => {
    setUser(users.filter((user) => user.id !== id));
    setEditing(false);
  };

  // Edit User

  const editRow = (user) => {
    setEditing(true);
    SetCurrentUser({
      id: user.id,
      empid: user.empid,
      empname: user.empname,
      emailid:user.emailid,
      department: user.department,
    });
  };
  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUser(users.map((user) => (user.id === id ? updateUser : user)));
  };

  return (
    <div className="container">      <h1 className="text-center gray "> Employee Management System</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit User </h2>
              <EditUser
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2> Add User </h2>
              <AddUser addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2> View Users </h2>
          <UserTable editRow={editRow} deleteUser={deleteUser} users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
