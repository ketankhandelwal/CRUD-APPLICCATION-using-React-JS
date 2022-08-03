import React, { useState, useContext, useEffect } from 'react';
import {context} from '../context/globalState';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';



import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

const EditUser = (props) => {
  const params  = useParams();
  const navigate = useNavigate();
 
  const { editUser, users } = useContext(context);
  const [selectedUser, setSelectedUser] = useState({
    id: '',
    name: ''
  })
  
  const currentUserId = params.id;



  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find(user => user.id === userId);
    console.log( userId)
    
    setSelectedUser(selectedUser);
  }, [currentUserId, users])

  const onChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    editUser(selectedUser);
    navigate('/')
    
   
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" value = {selectedUser.name} onChange={onChange} name = "name" placeholder="Enter user" required></Input>
      </FormGroup>
      <Button type="submit">Edit Name</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}

export  default EditUser;