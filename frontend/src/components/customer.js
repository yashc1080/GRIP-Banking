import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import './customer.css';
import money from '../images/money-transfer.svg';
class Customer extends Component {
    state = { data: this.props.location.state.data,index:this.props.location.state.index};
    componentDidMount(){
        console.log(this.props.location.state.data);
        console.log(this.state.index);
    }
    onPayment(){
        window.sessionStorage.setItem("sender",this.state.index);
        window.location.href = '/customers';
    }
    render() { 
        return ( 
           <div>
               <Row>
                   <Col  xs={{span:10,offset:1}} sm={{span:4,offset:1}}>
                        <Image id="userImage" src={this.state.data.imageurl}  />
                   </Col>
                   <Col id="info" xs={{span:10,offset:1}} sm={{span:4,offset:1}}>
                       <Row >
                           Name : {`${this.state.data.name}`}
                       </Row>
                       <Row >
                           Address : {`${this.state.data.address}`}
                       </Row>
                       <Row >
                           E-mail : {`${this.state.data.email}`}
                       </Row>
                       <Row >
                           Social Security Number : {`${this.state.data.socialn}`}
                       </Row>
                       <Row >
                           Balance : {`₹${this.state.data.balance}`}
                       </Row>
                       <br/>
                       <Row>
                           <Button id="exchangeButton" onClick={this.onPayment.bind(this)} >
                               <Row>
                                   <Col xs={4} >
                                   <Image id="transfer" src={money} alt="moneyTransfer"/>
                                   </Col>
                                   <Col id="label" xs={8} >
                                       Transfer Money
                                   </Col>
                               </Row>
                               
                           </Button>
                       </Row>
                       
                   </Col>
               </Row>
           </div>
         );
    }
}
 
export default Customer;