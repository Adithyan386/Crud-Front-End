import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { adduser } from './AllApi'

function FormEmp() {
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    designation: '',
    salary: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    const { id, name, designation, email, salary } = user;

    if (!id || !name || !designation || !email || !salary) {
      alert('Please fill out all fields');
    } else {
      try {
        const res = await adduser(user);
        console.log(res);
        if (res.status === 201) {
          alert('User added successfully!');
          setUser({ id: '', name: '', designation: '', email: '', salary: '' }); // Reset form
        } else {
          console.log('Error response:', res);
        }
      } catch (error) {
        console.error('Error adding user:', error);
      }
    }
  };

  return (
    <>
      <h3 className='d-flex justify-content-center'>Register Form</h3>
      <div className='container' id='for23'>
        <form onSubmit={handleSubmit} className=''>
          <div className="form-outline mb-4 mt-3 d-flex justify-content-center">
            <input
              type="text"
              placeholder="Enter Your ID"
              className="form-control w-25"
              value={user.id}
              onChange={(e) => setUser({ ...user, id: e.target.value })}
            />
          </div>
          <div className="form-outline mb-4 mt-3 d-flex justify-content-center">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="form-control w-25"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>
          <div className="form-outline mb-4 mt-3 d-flex justify-content-center">
            <input
              type="text"
              placeholder="Enter Your Designation"
              className="form-control w-25"
              value={user.designation}
              onChange={(e) => setUser({ ...user, designation: e.target.value })}
            />
          </div>
          <div className="form-outline mb-4 mt-3 d-flex justify-content-center">
            <input
              type="text"
              placeholder="Enter Your E-Mail"
              className="form-control w-25"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="form-outline mb-4 mt-3 d-flex justify-content-center">
            <input
              type="text"
              placeholder="Enter Your Salary"
              className="form-control w-25"
              value={user.salary}
              onChange={(e) => setUser({ ...user, salary: e.target.value })}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-outline-warning mx-3" onClick={handleSubmit}>
              Register
            </button>
            <Link to="/Table" style={{ textDecoration: 'none', color: 'black' }}>
              <button type="button" className="btn btn-outline-warning">Home</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormEmp;
