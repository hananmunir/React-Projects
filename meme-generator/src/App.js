
import React from 'react';
import './App.css';
import MemeComponent from './MemeComponent';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      topLine : "",
      bottomLine : "",
      rndMemeUrl: "https://images.theconversation.com/files/38926/original/5cwx89t4-1389586191.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
      memes: []
    }
  }

  componentDidMount(){
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(response =>{
      const {meme} = response.data
      
      this.setState ({memes : meme})
    })
  }
  handleChange = (event) =>{
    const {name,value} = event.target
    this.setState({
      [name] : value
    })
  }

  render(){
    return(
      <div>
        
        <h1 className = "header">Meme Generator</h1>
        <form className = "form">
          <input 
            className = "input"
            type="text" 
            name = "topLine" 
            placeholder = "Enter Top Line"
            value = {this.state.topLine}
            onChange = {this.handleChange}
          />
          <input 
            className="input"
            type="text" 
            name= "bottomLine"
            placeholder="Enter Bottom Line" 
            value={this.state.bottomLine}
            onChange={this.handleChange}
          />
        <button>Generate</button>
        </form>
        <MemeComponent data = {this.state}/>
      </div>
      
    )
  }
}
export default App;
