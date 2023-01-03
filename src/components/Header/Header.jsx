import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
  addItems = (event)=>{
    if(event.keyCode === 13){
        const {updateList} = this.props
        const currNode = event.target
        const extractedValue = currNode.value
        updateList(extractedValue)
        currNode.value = ""
    }
  }  

  render() {
    return (
        <div className="todo-header">
          <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyDown={this.addItems}/>
        </div>
    )
  }
}
