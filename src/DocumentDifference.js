import './DocumentDifference.css';
import React, { Component } from 'react';
import tdiff from './tdiff';

class DocumentDifference extends Component {

    constructor(props){
      super(props);
    }
  
    render () {
      return (
        <main dir="rtl" dangerouslySetInnerHTML={{ __html: tdiff(this.props.oldDocument, this.props.newDocument) }}></main>
      );
    }
  }
  
  export default DocumentDifference;