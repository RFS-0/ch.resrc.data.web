import React from 'react';
import {Button} from 'react-bootstrap';

export class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome home</h1>
                <Button variant="outline-primary"
                        onClick={this.connect}>
                    Connect to Neo4j
                </Button>{' '}
            </div>
        );
    }

    private connect() {
        console.log('conecting to neo4j...');
        let neo4j = require('neo4j-driver')
        var driver = neo4j.driver(
            'neo4j://localhost',
            neo4j.auth.basic('neo4j', 'ch.resrc.data.domains')
        )
        var session = driver.session();
        session
            .run('match (person:Person {}) return person.name', {})
            .subscribe({
                onKeys: (keys: string[]) => {
                    console.log(keys)
                },
                onNext: (record) => {
                    console.log(record.get('person.name'))
                },
                onCompleted: () => {
                    session.close() // returns a Promise
                },
                onError: (error: Error) => {
                    console.log(error)
                }
            })
    }
}