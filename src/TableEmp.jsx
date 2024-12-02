import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import EditEmp from './EditEmp'
import { deleteUser, getuser } from './AllApi'

function TableEmp() {

  const [users, setUser] = useState([])

  const getduserdata = async () =>{
      const respones = await getuser()
      setUser(respones.data)
  }
  const handledelete = async (id)=>{
    const deleteuser = await deleteUser(id)
    console.log(deleteuser);
    getduserdata()
  }
  useEffect(()=>{
    getduserdata()
  },[])
  console.log(users);

  return (
    <>
        <Table responsive="sm" className='mt-4 text-center'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Emp Name</th>
            <th>Emp designation</th>
            <th>E Mail</th>
            <th>Salary</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
         { users.map((data)=>(
                    <tr>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.designation}</td>
                    <td>{data.email}</td>
                    <td>{data.salary}</td>
                    <td><button className='rounded btn btn-outline-dark' onClick={()=>handledelete(data.id)}><i class="fa-solid fa-trash-can"></i></button></td>
                    <td><EditEmp user={data}/></td>
                  </tr>
         ))}
        </tbody>
      </Table>
      <div className='d-flex justify-content-center mt-5'>
            <button className='btn btn-outline-warning'><Link to={'/formEmp'} style={{textDecoration:'none', color:'black'}}>Add Emp</Link></button>
    </div>
    </>
  )
}

export default TableEmp