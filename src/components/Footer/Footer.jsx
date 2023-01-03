import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    const totalSize = this.props.toDoList.size
    return (
        <div className="todo-footer">
        <label>
          <input onClick={this.markAllItems} type="checkbox"/>
        </label>
        <span>
          <span>已完成 / 全部  </span> {`[ ${this.getCompleteStatus()} / ${totalSize} ]`}
        </span>
        <button onClick={this.deleteCompletedItems} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }

  getCompleteStatus = ()=>{
    const {toDoList} = this.props
    return Array.from(toDoList.values()).filter(result=>result).length
  }

  deleteCompletedItems = ()=>{
    const {toDoList, deleteItem} = this.props
    Array.from(toDoList.keys()).filter(element=>toDoList.get(element)).forEach(item=>{
        deleteItem(item)
    })
  }

  markAllItems = (event)=>{
    const {toDoList, modifyItemStatus} = this.props
    const checked = event.target.checked
    console.log(checked)
    Array.from(document.getElementsByTagName("li")).forEach(element=>{
        element.getElementsByTagName("input")[0].checked = checked
    })

    Array.from(toDoList.keys()).forEach(item=>{
        modifyItemStatus(item,checked)
    })


  }
}
