import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import logo from './images/icons8-bank-building-64.png';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './components/home.js';
import Customer from './components/customer.js';
import Customers from './components/customers.js';
import Gateway from './components/gateway.js';
import Success from './components/success.js';
import Cheque from './components/cheque.js';
import facebook from './images/facebook.svg';
import twitter from './images/twitter.svg';
import ig from './images/ig.svg';
import './App.css';
class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        
         
        <Navbar id="navbar" collapseOnSelect expand="lg" fixed="top" style={{'position':'fixed','top':'0','background-color':'#ffffff','width':'100%','max-width':'100%','z-index':'100000000'}} >
          <Container id="container" >
           
            <Navbar.Brand href="/" >
                      <img id="logo" src={logo} alt="logo" />
                      <div id="title">uBank</div>
                      
                    </Navbar.Brand>
      
        </Container>
        </Navbar>
            
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Router>
        <Switch>
        <Route exact path="/" render={(props)=><Home {...props} />}/>
        <Route exact path="/customers" render={(props)=><Customers {...props} />}/>
        <Route exact path='/customer' render={(props)=><Customer {...props} />}/>
        <Route exact path='/gateway' render={(props)=><Gateway {...props} />}/>
        <Route exact path='/success' render={(props)=><Success {...props} />}/>
        <Route exact path='/cheque' render={(props)=><Cheque {...props} />}/>
          </Switch>
          </Router>
          <br/>
          <hr style={{'border-top':'1px solid black','padding-bottom':'0px'}}/>
               <footer style={{'background-color':'#ffffff','padding-top':'0px'}}>
                
            <Row >
              <Col  xs={{span:8,offset:2}} sm={{span:3,offset:1}} style={{'margin-top':'20px','text-align':'center'}}>
                <h5 style={{'color':'#000000','font-family':'Raleway'}}>Legal</h5>
                <h6 style={{'color':'#000000','font-family':'source sans pro'}}><a href="https://www.termsandconditionsgenerator.com/live.php?token=GHJvHEVJQCdeCHTPWaeXCbHCM9XVyTiZ" style={{'color':'#000000'}}>Terms And Conditions</a></h6>
                <h6 style={{'color':'#000000','font-family':'source sans pro'}}><a href="https://www.privacypolicygenerator.info/live.php?token=3WIp8cI9kxbEw4NI8QgJzmn4HYaPRgQR" style={{'color':'#000000'}}>Privacy Policy</a></h6>
              </Col>
              <Col  xs={{span:8,offset:2}} sm={{span:3,offset:1}} style={{'margin-top':'20px','text-align':'center'}}>
                <h5 style={{'color':'#000000','font-family':'Raleway'}}>Help</h5>
                <h6 style={{'color':'#000000','font-family':'source sans pro'}}><a href="https://firebasestorage.googleapis.com/v0/b/grip-banking-b9264.appspot.com/o/gripResources.txt?alt=media&token=07fb509b-af3f-4f3b-b731-fe7522d7e5f4" style={{'color':'#000000'}}>Resources</a></h6>
              </Col>
              <Col  xs={{span:8,offset:2}} sm={{span:3,offset:1}} style={{'margin-top':'20px','text-align':'center'}}>
             
              <h5 style={{'color':'#000000','font-family':'Raleway'}}>Get Social with us</h5>
              <Row style={{'justify-content':'center'}}>
               
                <Col xs={3} sm={2} >
                  <a href='https://www.facebook.com/AssalSolapuriSunderShengaChatni/' target="_blank" rel="noopener noreferrer" >
                 <img src={facebook} alt="fb"  width={40} height={40} />
                </a>
                </Col>
                <Col xs={3} sm={2}>
                  <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer">
            <img src={ig} alt="ig"  width={40} height={40} />
                </a>
                </Col>
                <Col xs={3} sm={2}>
                  <a href='https://twitter.com/?lang=en' target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="twitter"  width={40} height={40} />
                </a>
                </Col>
                </Row>
              </Col>
            </Row>
            <hr style={{'border-top':'1px solid black','padding-bottom':'0px'}}/>
            <Row  style={{'justify-content':'center','font-family':'source sans pro','color':'#000000','overflow': 'hidden'}}>
            © Copyright 2021 uBank - Ecommerce Platform
            </Row>
            <br/>
        </footer>
      </div>
     );
  }
}
 
export default App;
