import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import React from 'react';
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {Home} from './src/pages/home';
import {Domain} from './src/pages/domain';
import {Domains} from './src/pages/domains';

function App() {
    return (
        <Router>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">resrc domains</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/domains">Domains</Nav.Link>
                        <NavDropdown title="Crawler" id="crawler-dropdown">
                            <NavDropdown.Item href="/start">Start</NavDropdown.Item>
                            <NavDropdown.Item href="/stop">Stop</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form noValidate inline onSubmit={handleSearch}>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>

            <Route path="/" exact component={Home}/>
            <Route path="/domains" exact component={Domains}/>
            <Route path="/domains/:id" component={Domain}/>
        </Router>
    );
}

function handleSearch(event) {
    console.log('searching "' + event + '" ...');
}

export default App;
