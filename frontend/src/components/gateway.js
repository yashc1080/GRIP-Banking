import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import transfer from '../images/transfer.svg';
import Form from 'react-bootstrap/Form';
import './gateway.css';
class Gateway extends Component {
    state = {users:JSON.parse(window.sessionStorage["users"]),sender:window.sessionStorage["sender"],receiver:window.sessionStorage["receiver"],amount:undefined};
  async handleSubmit(){
        let response = await fetch('https://asia-northeast3-grip-banking-b9264.cloudfunctions.net/api/transfer',{
            method:"POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body:JSON.stringify({"sendername":this.state.users[this.state.sender].name,"receivername":this.state.users[this.state.receiver].name,"sender":this.state.users[this.state.sender].UID,"receiver":this.state.users[this.state.receiver].UID,"amount":this.state.amount}),
          });
            response = await response.json();
            console.log(response);
            if(response.status==200){
                window.sessionStorage.removeItem("sender");
                window.sessionStorage.removeItem("receiver");
                window.location.href="/success";
            }
    }
    
    initiate(){
        if(this.state.amount<this.state.users[this.state.sender].balance){
            this.handleSubmit();
        }
        else{
            alert("Insufficient Balance");
        }
    }
    render() { 
        return ( 
            <div>
            <Row>
              <Col xs={0} sm={2}/>
              <Col xs={5} sm={3}  id="senderParent" >
                  <Image id="sender" src={this.state.users[this.state.sender].imageurl} alt="sender"/>
              </Col> 
              <Col xs={2} id="transferParent" >
                  <Image id="transfers" src={transfer} alt="transfer"/>
              </Col>  
              <Col xs={5} sm={3} id="receiverParent" >
                  <Image id="receiver" src={this.state.users[this.state.receiver].imageurl} alt="receiver"/>
              </Col>
              <Col xs={0} sm={2}/>
            </Row>
            <br/>
            <Row>
                <Col xs={1} sm={4}/>
                <Col xs={10} sm={4} id="form" >
                <Form.Group >
            <Form.Label for="fname">Enter Amount </Form.Label>
          
             <Form.Control
             required
             id="fname"
              type="number"
              value={this.state.amount}
              min="1"
              onChange={e => this.setState({ amount: e.target.value })}
              style={{'border-radius':'40px'}}
              
            />
            </Form.Group>
            <Button variant="warning" onClick={this.initiate.bind(this)} >Send</Button>
                </Col>
                <Col xs={1} sm={4}/>
            </Row>
            </div>
         );
    }
}
 
export default Gateway;
