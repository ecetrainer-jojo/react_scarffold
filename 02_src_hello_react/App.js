import {Component} from 'react'
import Hello from './Components/Hello/Hello'
import Welcome from './Components/Welcome/Welcome'

//创建并默认暴露APP 类式组建
export default class App extends Component{
  render(){
    return (
      <div>
        <Hello/>
        <Welcome/>
      </div>
    )
  }
}
