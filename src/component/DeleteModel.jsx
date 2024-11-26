import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './DeleteModal.css'

function DeleteModal({item,storeData}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
console.log("item",item);

function handledelete(){
  const getData = JSON.parse(localStorage.getItem("formData"));
  const updateData = getData.filter((data)=>data.id!==item.id);
  localStorage.setItem("formData", JSON.stringify(updateData))
  handleClose();
  storeData();
}


  return (
    <>
      <Button className='delete-btn' onClick={handleShow}>
       Delete
      </Button>

      <Modal  show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you Sure you want to delete this Item?</Modal.Body>
        <Modal.Footer>
          <Button className='close-btn'  variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className='delete-button' variant='danger' onClick={()=>handledelete()}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;