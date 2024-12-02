import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import  './mods.css'
import { edituser } from './AllApi';

function EditEmp({user}) {
  console.log(user);
  
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [upadateuser, setUpdateuser] = useState({
      id:user.id,
     name:user.name,
     designation:user.designation,
     email:user.email,
     salary:user.salary
    })

    const handleUpdate = async()=>{
      const {id,name,designation,email,salary} = upadateuser
        if(!id || !name || !designation || !email || !salary){
          alert('Edit Chey Moneee...!')
        }else{
          const res = await edituser(id,upadateuser)
          console.log(res);
          if(res.status === 200){
            handleClose()
          }else{
            console.log(res);
          }
        }
    }
    console.log(upadateuser);

  return (
    <>
    <Button variant="primary" onClick={handleShow}>
    <i class="fa-regular fa-pen-to-square"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="mb-4">
                    <label htmlFor="form1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="formV1" onChange={(e) => setUpdateuser({ ...upadateuser, name: e.target.value })} value={upadateuser.name} />
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <label htmlFor="form2" className="form-label">Designation</label>
                            <input type='text' className='form-control'onChange={(e) => setUpdateuser({ ...upadateuser, designation: e.target.value })} name="" id="des1" value={upadateuser.designation}></input>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="form1" className="form-label">E-MAil</label>
                        <input type="text" className="form-control" id="formV1" onChange={(e) => setUpdateuser({ ...upadateuser, designation: e.target.value })} value={upadateuser.email}/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="form1" className="form-label">Salary</label>
                        <input type="text" className="form-control" id="formV12" onChange={(e) => setUpdateuser({ ...upadateuser, salary: e.target.value })} value={upadateuser.salary}/>
                    </div>
                    {/* <Form.Group controlId="formFileMultiple" className="mb-3">
                        <Form.Label>Product Image</Form.Label>
                        <Form.Control type="file" multiple />
                    </Form.Group> */}

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditEmp