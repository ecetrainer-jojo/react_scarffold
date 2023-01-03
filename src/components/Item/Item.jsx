import React, { Component } from 'react'
import './Item.css'

export default class Item extends Component {  
  render() {
    return (
        <li onMouseEnter={this.hoverEffect} onMouseLeave={this.leaveEffect}> 
          <label>
            <input onClick={this.modifyToDo} type="checkbox"/>
            <span >{this.state.toDo}</span>
          </label>
          <button onClick={this.deleteToDo} id="ItemBtn" className="btn btn-danger" style={{display:"none"}}>删除</button>
        </li>
    )
  }

  modifyToDo = (event)=>{
    const {modifyItemStatus} = this.props
    const itemValue = event.target.nextSibling.textContent
    modifyItemStatus(itemValue,event.target.checked)
  }

  deleteToDo=(event)=>{
   const {deleteItem} = this.props
   const labelSibling = event.target.previousSibling
   const itemValue = labelSibling.getElementsByTagName("span")[0].textContent
   deleteItem(itemValue)
  }

  hoverEffect = (event)=>{
    const realTarget = (event.target.tagName === "LABEL")?event.target.parentNode:event.target
    let deleteButton = realTarget.getElementsByTagName('button')[0]
    if(deleteButton) deleteButton.style = "display: initial;"
    realTarget.style = "background-color: #ccc8c8"
  }

  leaveEffect = (event)=>{
    const realTarget = (event.target.tagName === "LABEL")?event.target.parentNode:event.target
    let deleteButton = realTarget.getElementsByTagName('button')[0]
    if(deleteButton) deleteButton.style = "display: none;"
    realTarget.style = "background-color: white"
  }

  constructor(props){
    const {toDo} = props
    super(props)
    this.state = {toDo:toDo}
  }
}
