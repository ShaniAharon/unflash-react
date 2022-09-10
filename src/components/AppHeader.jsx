import React from 'react'
import {TodoFilter} from './TodoFilter'

export const AppHeader = () => {
  return (
    <header className="header container-layout flex">
      <div className="flex">
        <i className="logo-cam fa-solid fa-camera"></i>
        {/* <TodoFilter onChangeFilter={onChangeFilter} /> */}
        {/* <span v-if="user">
        <img
      @click="userPage"
      className="avatar"
      src="@/assets/portrait.png"
      alt=""
    />
      </span> */}
      </div>
      <ul className="links clean-list flex">
        <li>Explore</li>
        <li>Advertise</li>
        <li>Blog</li>
        <div className="line-container">
          <span className="vl"></span>
        </div>
      </ul>
      <button className="btn-submit">Submit a photo</button>
    </header>
  )
}
