import React, { Component } from "react";
import "./App.css";
import {Table,Container} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare,faTrash } from '@fortawesome/free-solid-svg-icons';




class ContactList extends Component {
  constructor() {
    super();
    this.state = {
      list: null
    };
  }

  getData()
  {
    fetch("http://localhost:3000/contacts").then((response) => {
        response.json().then((result) => {
          
          this.setState({ list: [...result] });
          
        });
      });
  }

  

  componentDidMount(props) {
    
      this.getData();
    
  }

  delete(id)
  {
    fetch('http://localhost:3000/contacts/'+id,{
            method:"DELETE"
            
            
        }).then((result)=>{
            result.json().then((resp)=>{
              this.getData();

                alert("Contact has been Deleted")
                
                
                console.log(resp);
                
                })
        })

  }

  render() {
    console.log(this.props);
    return (
      <Container>
        <h1 className="list">Contact List</h1>
        {this.state.list ? (
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Operation</th>
                </tr>
              </thead>

              <tbody>
                {this.state.list.map((item, i) => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td className="edit">
                    <Link to={"/update/"+item.id}><FontAwesomeIcon icon={faPenToSquare} color="orange" fontSize="1.5rem"/></Link> &nbsp;
                    <span onClick={()=>this.delete(item.id)}><FontAwesomeIcon  icon={faTrash} color="red" /></span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <p className="please">Please Wait....</p>
        )}
        </Container>
    );
  }
}

export default ContactList;
