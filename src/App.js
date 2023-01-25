// MY API :   "http://localhost:3000/contacts"


import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import ContactList from './ContactList';
import ContactCreate from './ContactCreate';
import ContactUpdate from './ContactUpdate'
import ContactSearch from './ContactSearch';
import Home from './Home';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, faPenToSquare,faPlus,faSearch,faTrash } from '@fortawesome/free-solid-svg-icons';

class App extends Component {
  constructor()
  {
    super();
    this.state={
      // defaultContacts:[]

    }
  }

  // addToContacts=(resp)=>
  // {
  //   this.setState({defaultContacts:[...this.state.defaultContacts,resp]})
    
  // }

  
  
  render() {
    
  
    
    
    return (
      <div>
        <Router>



        


    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Contact-List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-list">
            {/* <Nav.Link href="#home" className="text"><Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link></Nav.Link> */}
            <Nav.Link href="#link"><Link to="/list"><FontAwesomeIcon text-decoration="none" icon={faList} /> List</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/create"><FontAwesomeIcon icon={faPlus} /> Create</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/search"><FontAwesomeIcon icon={faSearch} /> Search</Link></Nav.Link>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  

          

          
        <Switch>
        <Route path="/list">
        <ContactList />

        </Route>

        <Route path="/create">
        <ContactCreate />

        </Route>

        <Route path="/update/:id" render={props=>(<ContactUpdate  {...props}/>)}>
        

        </Route>

        

        <Route path="/search">
        <ContactSearch/>

        </Route>

        <Route exact path="/">
        <Home/>

        </Route>

        </Switch>
        

        
         

        </Router>
      </div>
    );
  }
}

export default App;