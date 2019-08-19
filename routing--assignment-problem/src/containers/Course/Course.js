import React, { Component } from 'react';

const TITLE = "title";
class Course extends Component {
    state = { title: '' };

    componentDidMount() {
        this.parseQueryParams();
    }

    componentDidUpdate() {
        this.parseQueryParams();
    }
    parseQueryParams() {
        const query = new URLSearchParams(this.props.location.search);
        if (this.state.title !== query.get(TITLE)) {
            this.setState({title: query.get(TITLE)});
        }   
    }

    render() {
        const content = this.props.location.search;
        return (
            <div>
                <h1>{this.props.match.params.id}</h1>
                <p>{this.state.title}</p>
            </div>
        );
    }
}

export default Course;