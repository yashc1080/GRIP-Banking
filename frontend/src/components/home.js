import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {NeuButton} from 'neumorphism-react';
import {Redirect} from "react-router-dom";
import customer from '../images/customer.svg';
import switchs from '../images/switch.svg';
import './home.css';
class Home extends Component {
    state = {viewcustoms:false, viewcheque:false};
    viewChequeBook(){
      this.setState({viewcheque:true});
    }
    viewCustomers(){
      this.setState({viewcustoms:true});
    }
    async getUsers(){
      console.log("in get users");
      let data =  await fetch('https://asia-northeast3-grip-banking-b9264.cloudfunctions.net/api/users',{
          method: "GET",
        }).then((val)=>val.json());
     
     window.sessionStorage.setItem("users",JSON.stringify(data));
     console.log(JSON.parse(window.sessionStorage["users"])[0]);
  }

  async getrecords(){
    console.log("in get users");
    let data =  await fetch('https://asia-northeast3-grip-banking-b9264.cloudfunctions.net/api/cheque',{
        method: "GET",
      }).then((val)=>val.json());
   
   window.sessionStorage.setItem("records",JSON.stringify(data));
   console.log(JSON.parse(window.sessionStorage["records"])[0]);
  }
    componentWillMount(){
      this.getUsers();
      this.getrecords();
    }
    render() { 
        return ( 
            <div>
                 <Row>
        <Col xs={0} sm={2}/>
          <Col xs={12} sm={8} id="slogan" >
            The Bank for a changing world
          </Col>
          <Col xs={0} sm={2}/>
        </Row>
        <br/>
                 <Row>
          <Col xs={0} sm={2}/>
          <Col xs={{span:10,offset:1}} md={{span:3,offset:1}}style={{'margin-top':'20px'}}>
                        <NeuButton color="#ffffff" id="parent__card" >
                        <Card id="card1" >
                          <Card.Img id="card__img" variant="top" src={customer} />
                          <Card.Body>
                            <Card.Title id="card__title" >View Members</Card.Title>
                            <Card.Text id="card__text" >
                              Details About our Customers
                            </Card.Text>
                            <Button variant="warning" id="card__button" onClick={this.viewCustomers.bind(this)} >View Now</Button>
                          </Card.Body>
                        </Card>
                       </NeuButton>
                       <br/>
                       </Col>
            <Col xs={{span:10,offset:1}} md={{span:3,offset:0}}style={{'margin-top':'20px'}}>
            <NeuButton color="#ffffff" id="parent__card" >
            <Card id="card1" >
                          <Card.Img id="card__img" variant="top" src={switchs} />
                          <Card.Body>
                            <Card.Title id="card__title" >View Transfers</Card.Title>
                            <Card.Text id="card__text" >
                              ChequeBook of Cash Transfers
                            </Card.Text>
                            <Button variant="warning" id="card__button" onClick={this.viewChequeBook.bind(this)} >View Now</Button>
                          </Card.Body>
                        </Card>
                </NeuButton>
            </Col>
          <Col xs={0} sm={2}/>
        </Row>
        <div>{(this.state.viewcustoms)?( <Redirect push
                      to={{
                        pathname:  "/customers",
                      
                      }}
                    />):(console.log('not pressed'))}</div>

        <div>{(this.state.viewcheque)?( <Redirect push
                      to={{
                        pathname:  "/cheque",
                      
                      }}
                    />):(console.log('not pressed'))}</div>




            </div>
         );
    }
}
 
export default Home;