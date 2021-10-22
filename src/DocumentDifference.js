import './DocumentDifference.css';
import React, { Component } from 'react';
import tdiff from './tdiff';

class DocumentDifference extends Component {

    constructor(props){
      super(props);
      this.state = {text: ""};
    }

    componentDidMount() {
      this.setState({
        text : tdiff(this.props.oldDocument, this.props.newDocument)
      })
    }
  
    render () {
      return (
        <main dir="rtl" dangerouslySetInnerHTML={{ __html: this.state.text }}></main>
      );
    }
  }
  
  export default DocumentDifference;