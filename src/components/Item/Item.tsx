import React, { Component } from 'react'
import './Item.css'


type MyProps = { key: string, toDo: string, modifyItemStatus:(string,boolean)=>void, deleteItem:(string)=>void, a:number};
type MyState = { toDo: string, isHover: boolean };

export default class Item extends Component<MyProps,MyState> {  
  render() {
    const {toDo,isHover} = this.state
    return (
        <li onMouseEnter={this.handleMouseEvent(true)} onMouseLeave={this.handleMouseEvent(false)}
        style={{backgroundColor:isHover? "#ccc8c8":"white"}}> 
          <label>
            <input onClick={this.modifyToDo} type="checkbox"/>
            <span >{toDo}</span>
          </label>
          <button onClick={this.deleteToDo} id="ItemBtn" className="btn btn-danger" style={isHover?{display:"initial"}:{display:"none"}}>删除</button>
        </li>
    )
  }

  modifyToDo = (event:React.MouseEvent)=>{
    const {modifyItemStatus} = this.props
    const target = event.target as HTMLInputElement
    const itemValue = target.nextSibling?.textContent
    modifyItemStatus(itemValue,target.checked)
  }

  deleteToDo=(event:React.MouseEvent)=>{
   // ask user's confirmation 
   if(window.confirm("确定删除吗")){
    const {deleteItem} = this.props
    const target = event.target as HTMLInputElement
    const labelSibling = target.previousSibling as HTMLElement
    const itemValue = labelSibling?.getElementsByTagName("span")[0].textContent
    deleteItem(itemValue)
   }
  }

  handleMouseEvent = (mouseIn:boolean)=>{
    return ()=>{
        this.setState({isHover: mouseIn})
    }
  }

  constructor(props:MyProps){
    const {toDo} = props
    super(props)
    this.state = {toDo:toDo, isHover:false}
  }
}
