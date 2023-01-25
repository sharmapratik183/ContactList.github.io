import React, { Component } from "react";
import "./App.css";
import {Table,Form,Container} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare,faTrash } from '@fortawesome/free-solid-svg-icons';

class ContactSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchData: "",
      noData: false,
      lastSearch:""
    };
  }


  delete(id)
  {
    fetch('http://localhost:3000/contacts/'+id,{
            method:"DELETE"
            
            
        }).then((result)=>{
            result.json().then((resp)=>{
              this.search(this.state.lastSearch);

                alert("Contact has been Deleted")
                
                
                console.log(resp);
                
                })
        })

  }

  search(key) {
    if (key === "") {
      this.setState({
        searchData: "",
        noData: true,
      });
      return;
    }
    this.setState({lastSearch:key});
    console.warn(key);
    fetch("http://localhost:3000/contacts?q=" + key).then((data) => {
      data.json().then((resp) => {
        console.warn("resp", resp);
        if (resp.length > 0) {
          this.setState({
            searchData: resp,
            noData: false,
          });
        } else {
          this.setState({
            noData: true,
            searchData: "",
          });
        }
      });
    });
  }
  render() {
    return (
      <Container>
        <div>
          <h1 className="search">Contact Search</h1>
          
          <Form.Control type="text" onChange={(event) => this.search(event.target.value)} placeholder="Search Contact" />
        </div>
        <div>
          {this.state.searchData ? (
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
                  {this.state.searchData.map((item) => (
                    <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                    <Link to={"/update/"+item.id}><FontAwesomeIcon icon={faPenToSquare} color="orange" /></Link> &nbsp;
                    <span onClick={()=>this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red" /></span>
                    </td>
                  </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          ) : (
            ""
          )}
          {this.state.noData ? <h3 className="data">No Data To Be Displayed</h3> : null}
        </div>
      </Container>
    );
  }
}

export default ContactSearch;
