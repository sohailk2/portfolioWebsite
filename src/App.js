import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // Redirect,
  // useLocation
} from "react-router-dom";


import { Card, Button, Tab, Tabs, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import logo from './logo.svg';
import './App.css';


function page2() {
  return ("page 2")
}

function Welcome() {
  return (<div style={{padding: '15px', height: '1000px', backgroundColor: '#6DD3CE'}}>Welcome Page</div>)
}

function NoMatch() {
  return ("I can't seem to find this page!")
}

class App extends React.Component {


  

  constructor() {
    super()
    this.state = {
      // test: "Yes",
      // currentTab: "Home",
      internalPage: {height: '85vh'}
    }
  }

  render() {
    return (

      <Router>

        {/* <Route path="/" component={Game}>
          <Route path="page1" component={Game} />
          <Route path="page2" component={page2} />
        </Route> */}

        {/* 
          So pass the state down and edit the currenttab from down there? so that the current page is displayed right? 
          Ill set up the proper page routing later?
        */}
        {/* <Tabs>
          <Tab style={{ backgroundColor: 'white' }} eventKey="game" title="Play Game">
            <div>

              <Game />
            </div>
          </Tab>
          <Tab eventKey="data" title="View EEG Data">

          </Tab>
        </Tabs> */}
        <Navbar style={{backgroundColor: 'white', fontSize : '120%'}}>
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">About</Nav.Link>
              <Nav.Link href="experience">Experience</Nav.Link>
              <Nav.Link href="projects">Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Card className="internalPadding" style={{margin: '15px', height: this.state.internalPage.height, borderRadius: '0', borderWidth: '15px', borderColor: 'white', overflow: 'scroll'}}>

        <Switch>
          <Route exact path="/">
            <Welcome/>

            {/* so i want my name to drop in other things to pop in from left and right? */}
          </Route>
          <Route path="/experience">
           
            
          </Route>
          <Route path="/projects">
             
          </Route>

          <Route path="*">
            <NoMatch />
          </Route>

        </Switch>
        </Card>


      </Router>


    )
  }

}

export default App
// export default function App() {

//   const [key, setKey] = useState('home');


//   return (
//     <Router>

//       <h2>Key:<br></br>{key}</h2>
//       <Tabs activeKey={key} onSelect={k => {setKey(k);}}>
//         <Tab eventKey="home" title="Home">
//           <Link to="/about">profile</Link>
//         </Tab>
//         <Tab eventKey="profile" title="Profile">

//         </Tab>

//       </Tabs>


//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//     </Router>
//   );
// }

// function Home() {
//   const [currentTime, setCurrentTime] = useState(0);

//   useEffect(() => {
//     fetch('/time').then(res => res.json()).then(data => {
//       setCurrentTime(data.time);
//     });
//   }, []);

//   return (
//     <h2>The current time is {currentTime}.</h2> 
//   );
// }

// function About() {
//   return <h2>About</h2>;
// }


