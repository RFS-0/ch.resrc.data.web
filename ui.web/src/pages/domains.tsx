import React from 'react';
import {Button, Form, FormControl} from 'react-bootstrap';

export class Domains extends React.Component {
    render() {
        return (
            <div>
                <h1>List of all domains</h1>
                <Form noValidate inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                    <Button variant="outline-success">Search</Button>
                </Form>
            </div>
        );
    }
}