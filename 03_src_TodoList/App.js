import {Component} from 'react'
import Display from './components/Display/Display'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css'

//创建并默认暴露APP 类式组建
export default class App extends Component{

  //constructor to initialize the state value
  constructor(props){
    super(props)
    this.state = {toDoList:new Map()}
  }

  //define the function to update the status
  updateList = (s)=>{
    // create a map with key and value
    const {toDoList} = this.state
    this.setState({toDoList:toDoList.set(s,false)})
  }

  //define the function to delete item
  deleteItem = (s)=>{
    const {toDoList} = this.state
    //find the index first and reset
    toDoList.delete(s)
    this.setState({toDoList:new Map(toDoList)})
  }

  //define the function to switch status
  modifyItemStatus= (itemName,isComplete)=>{
    const {toDoList} = this.state
    this.setState({toDoList:toDoList.set(itemName,isComplete)})
  }

  render(){
    const {toDoList} = this.state
    return (
      <div className="todo-container">
      <div className="todo-wrap">
        <Header updateList={this.updateList}/>
        <Display toDoList={toDoList} deleteItem={this.deleteItem} modifyItemStatus={this.modifyItemStatus}/>
        <Footer toDoList={toDoList} deleteItem={this.deleteItem} modifyItemStatus={this.modifyItemStatus}/>
      </div>
    </div>
    )
  }
}
