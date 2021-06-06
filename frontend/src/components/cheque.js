import React, { Component } from 'react';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import {NeuButton} from 'neumorphism-react';
import arrow from '../images/right-arrow.svg';
import './cheque.css';
class Cheque extends Component {
    state = { records:JSON.parse(window.sessionStorage["records"]), color:["primary","warning","danger","info","dark","success"] }
    displayTransactions(){
        let count = 0;
        return(
         
            <Row >

               {this.state.records.map((record)=>{
                   count+=1;
                   if(count>=6){
                       count = count%6;
                   }
                   return (
                       
                       <Col id="record" xs={{span:12,offset:0}}>
                         <NeuButton color="#ffffff" >
                            <Row>
                                <Col id="date" xs={2}>
                                    {`${record.date}`}
                                </Col>
                                <Col id="name" xs={2}>
                                    {`${record.sender}`}
                                </Col>
                                <Col xs={2}>
                                  <Image id="right-arrow" src={arrow} />
                                </Col>
                                <Col id="name" xs={2}>
                                {`${record.receiver}`}
                                </Col>
                                <Col id="cash" xs={2}>
                                    <Badge pill variant={`${this.state.color[count]}`}>
                                {`₹${record.amount}`}
                                </Badge>
                                </Col>
                            </Row>
                        </NeuButton>
                       <br/>
                       </Col>
                   );
                   
               })}
             
            </Row>
           
        );

    }
    render() { 
        return ( 
            <div>
                <h1 id="transhead" >All Transactions</h1>
                <br/>
                 {(this.state.records)?this.displayTransactions():"loading...."}
            </div>
         );
    }
}
 
export default Cheque;