// Write your code here
// import {Component} from 'react'
import './index.css'

const AppItem = props => {
  const {appObj} = props
  const {appName, imageUrl} = appObj

  return (
    <li className="app-store-container">
      <img src={imageUrl} alt={appName} className="app-logo" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
