
import React from 'react'
import './App.css';
import Components from './todo-components';
import list from './list';
class App extends React.Component {

  constructor(){
    super()
    this.state = {
      todos: list
    }

    this.check = this.check.bind(this)
  }

  check(id){
    this.setState(prevState => { 
      const newList = prevState.todos.map(todo =>{
        if( todo.id === id){
          todo.status = !todo.status
        }
       
        return todo
      })
      // console.log(newList)
      return {
        todos: newList
      }
    })

  }
  render(){
    const todo = this.state.todos.map(item => <Components key = {item.id} item={item} 
      check = {this.check}/>)
    
    return (
      <div className="todo-items">
        {todo}
      </div>
    )


  }
  
}

export default App;
