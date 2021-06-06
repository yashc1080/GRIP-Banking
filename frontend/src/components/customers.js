import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {NeuButton} from 'neumorphism-react';
import {Redirect} from "react-router-dom";
let number;
let btnText;
class Customers extends Component {
    state = { users:JSON.parse(window.sessionStorage["users"]),user:undefined };
    componentWillMount(){
        if(window.sessionStorage["sender"]){
            btnText = "Select";
        }
        else{
            btnText = "View User";
        }
    }
    onUserClick(e){
        number = e.currentTarget.id;
        let data = this.state.users[number];
        console.log(data);
        if(window.sessionStorage["sender"]){
            window.sessionStorage.setItem("receiver",number);
            window.location.href = "/gateway";
            
        }
        else{
            this.setState({user:data});
        }
        
        
    }
    displayUsers(){
        let count = -1;
        return(
         
            <Row class="mainrow" style={{'display':'flex','justify-content':'space-between','padding-left':'6%','padding-right':'6%'}}>

               {this.state.users.map((user)=>{
                   count+=1;
                   if(count==window.sessionStorage.sender){
                       console.log("not this one");
                   }
                   else{
                   return (
                       
                       <Col  xs={{span:10,offset:1}} md={{span:3,offset:0}}style={{'margin-top':'20px'}}>
                         <NeuButton color="#ffffff" >
                       <Card class="card" className="text-center"  style={{'background-color':'#ffffff','border-color':'#ffffff','border':'none','border-radius':'20px'}} >
                       <div style={{'height':'280px'}}>
                           <Card.Img  src={user.imageurl} style={{'height':'100%','border-radius':'20px'}} />
                         
                           </div>
                           <Card.Body>
                               <Card.Title style={{'font-family':'Raleway','font-weight':'bold'}}>{user.name}</Card.Title>
                               <Button  id={`${count}`} variant="primary" align="right" onClick={this.onUserClick.bind(this)} >{`${btnText}`}</Button>
                           </Card.Body>
                       </Card>
                        </NeuButton>
                       <br/>
                       </Col>
                   );
                   }
               })}
             
            </Row>
           
        );

    }
    render() { 
        return ( 
           <div>
               {(this.state.users)?this.displayUsers():"loading...."}
               <div>{(this.state.user)?( <Redirect push
                      to={{
                        pathname:  "/customer",
                        state: {data:this.state.user,index:number}
                      
                      }}
                    />):(console.log('not pressed'))}</div>
           </div>
         );
    }
}
 
export default Customers;