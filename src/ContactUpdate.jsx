import React, { Component } from 'react';
import './App.css';

class ContactUpdate extends Component {
    constructor()
    {
        super();
        this.state={
            name:null,
            email:null,
            phone:null,
            id:null
            
        };
    }

    componentDidMount()
    {
        fetch('http://localhost:3000/contacts/'+this.props.match.params.id).then((response) => {
            response.json().then((result) => {
              
              this.setState({ 
                name:result.name, 
                email:result.email,
                id:result.id,
                phone:result.phone
               });
              
            });
          });
    }

    update()
    {
        fetch('http://localhost:3000/contacts/' + this.state.id,{
            method:"PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{

                alert("Contact has been updated")
                
                console.log(resp);
                
                })
        })
    }
    render() {
        
        return (
            <div>
                <h1 className='update'>Update Contact</h1>


                <div className='update-box'>
                    <input onChange={(event)=>{this.setState({name:event.target.value})}} placeholder="Enter Contact Name" value={this.state.name}/><br/><br/>

                    <input onChange={(event)=>{this.setState({email:event.target.value})}} placeholder="Enter Contact Email" value={this.state.email}/><br/><br/>

                    <input onChange={(event)=>{this.setState({phone:event.target.value})}} placeholder="Enter Contact Phone" value={this.state.phone}/><br/><br/>

                    <button className='bot' onClick={()=>{this.update()}}>Update Contact</button>
                    
                    
                                        
                </div>
            </div>
        );
    }
}

export default ContactUpdate;