import React, {Component} from 'react';
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
         <div className="editor-wrap">
             <div className="toolbar bg-primary">
                <i title="no-stack-dub-sack" className="fa fa-free-code-camp"></i> Editor <i className="fa fa-arrows-alt"></i>
              </div>
                <textarea className="bg-info" id = "editor" value={markdown} onChange = {(event) => this.updateMarkdown(event.target.value) }>  </textarea>
          </div>
          <div className="toolbar headd">
              <i title="no-stack-dub-sack" className="fa fa-free-code-camp"></i> Editor <i className="fa fa-arrows-alt"></i>
          </div>
           <div className = "bg-info" id = "preview" >
             <div dangerouslySetInnerHTML = {{__html: marked(markdown)}} >
             </div>
          </div> 
       </div>
    )
  }
}

export default App

