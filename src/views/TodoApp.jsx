import React, {useEffect} from 'react'
import {TodoList} from '../components/TodoList'
import {useDispatch, useSelector} from 'react-redux'
import {loadTodos, removeTodo} from '../store/actions/todoActions'

export const TodoApp = () => {
  const {todos} = useSelector((state) => state.todoModule)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadTodos())
    // eslint-disable-next-line
  }, [])

  const onDelete = async (todoId) => {
    dispatch(removeTodo(todoId))
  }

  if (!todos) return <div>Loading...</div>
  return (
    // <div classNameName="todo-app">
    //   <TodoList todos={todos} onDelete={onDelete} />
    // </div>
    <div>
      <main className="top-header">
        <header className="header container-layout flex">
          <div className="flex">
            <i className="logo-cam fa-solid fa-camera"></i>
            {/* <photo-filter @setFilter="setFilter" /> */}
            <span v-if="user">
              {/* <img
            @click="userPage"
            className="avatar"
            src="@/assets/portrait.png"
            alt=""
          /> */}
            </span>
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
        <div className="my-list-container container-layout">
          <ul className="my-list links clean-list flex">
            <li>
              <a className="a-link">
                <span>Editorial</span>
              </a>
            </li>
            <div className="line-container">
              <span className="vl"></span>
            </div>
            <li>
              <a className="a-link">
                <span>Act For Nature</span>
              </a>
            </li>
            <li>
              <a className="a-link">
                <span>Color of Water</span>{' '}
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}
