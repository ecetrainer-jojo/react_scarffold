import React, { Component } from 'react'
import Item from '../Item/Item'
import './Display.css'

export default class Display extends Component {
  render() {
    const {toDoList, deleteItem, modifyItemStatus}=this.props
    return (
        <ul className="todo-main">
            {Array.from(toDoList.keys()).map(todo=> 
                (<Item key={todo} checked={toDoList.get(todo)} toDo={todo} deleteItem={deleteItem} modifyItemStatus={modifyItemStatus}/>))}
        </ul>
    )
  }
}
