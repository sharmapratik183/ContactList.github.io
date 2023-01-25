import React, { Component } from 'react';
import './App.css';
import ContactList from './ContactList';


class ContactCreate extends Component {
    constructor()
    {
        super();
        this.state={
            name:null,
            email:null,
            phone:null
            
        };
    }
    create()
    {
        if(this.state.name===null && this.state.email===null && this.state.phone===null )
        {
            return;
        }
        
        fetch('http://localhost:3000/contacts',{
            method:"Post",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{

                alert("Contact has been added")
                
                console.log(resp);
                
            
                

                

            })
        })

    }
    
    render() {
        return (
            <div className='create'>
                <h1 className='heading'>Create Contact</h1>
                <div>
                    <input onChange={(event)=>{this.setState({name:event.target.value})}} placeholder="Enter Contact Name"/><br/><br/>

                    <input onChange={(event)=>{this.setState({email:event.target.value})}} placeholder="Enter Contact Email"/><br/><br/>

                    <input onChange={(event)=>{this.setState({phone:event.target.value})}} placeholder="Enter Contact Phone"/><br/><br/>

                    <button className='bot' onClick={()=>{this.create()}}>Add Contact</button>
                    
                    
                                        
                </div>
            </div>
        );
    }
}

export default ContactCreate;