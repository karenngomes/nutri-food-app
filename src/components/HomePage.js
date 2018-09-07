import React, { Component } from 'react';
import Search from './Search';
import SearchBox from './SearchBox';
import { Row, Col } from 'react-bootstrap';

export default class HomePage extends Component {
    
    state = {
        disabled: false,
        search: ''
    }

    handleSearchName = (e) => {
        e.preventDefault();
        
        const search = e.target.elements.search.value.trim();

        //const error = this.props.handleAddOption(option);
        
        this.setState(() => ( {
            search,
            disabled: true
        } ));

    }

    render() {
        return ( 
            <div className="intro">
                <Row>

                    <Col lg={6} sm={12} className="split right">
                        <div className="centered">
                            <SearchBox handleSearchName={this.handleSearchName} />
                        </div>
                    </Col>
        
                    <Col lg={6} sm={12} className="split left">
                        {this.state.disabled && <Search input={this.state.search} />}
                    </Col>

                </Row>
            </div>
        );
    }
}
