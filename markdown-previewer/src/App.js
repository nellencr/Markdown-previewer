import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';

import './App.css';
let marked = require('marked');

class App extends Component {
  state= {
    markdown:""
  }

  updateMarkdown = function(markdown) {
    this.setState({markdown})
  }

  render() {
  let { markdown } = this.state;
  console.log(markdown);
    return (
      <div className="container">
     <div className="well">
       <h2 className="text-center">Editor</h2>
       <textarea className="bg-light" id = "editor" value={markdown} onChange = {(event) => this.updateMarkdown(event.target.value) }>  </textarea>
     </div>
    <div className = "bg-light"id = "preview" >
      <h1></h1>
      <div dangerouslySetInnerHTML = {{__html: marked(markdown)}} >

      </div>
    </div> 

        
      </div>
    )
  }
}

export default App

