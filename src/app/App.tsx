import { onAuthStateChanged, User } from "firebase/auth"
import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ColumnType } from 'widgets/Cards/Card/ui/Card.interface'
import { useSelector, useDispatch } from "react-redux"
import { auth } from "shared/api/firebase"

import './styles/index.css'

import Desktop from "pages/Desktop"
import TaskModal from "pages/TaskModal"
import UserPage from "pages/UserPage"
import SignUp from "pages/SignUp"
import Boards from "pages/Boards"
import { board } from "entitles/redux/interfaces"
import SignIn from "pages/SignIn"

const App = () => {

  const initialColumns: board[] = [
    {
      title: 'Board Title',
      id: 'board-12',
      columns: [
        {
          title: 'Column Title',
          id: 'column-12',
          tasks: [
            {
              title: 'Task Title',
              id: 'task-12',
              data: 'Task data',
              author: {
                name: 'John Doe',
                image: 'path/to/image.jpg',
              },
              comments: [
                {
                  author: {
                    name: 'John Doe',
                    image: 'path/to/image.jpg',
                  },
                  date: '2023-01-01',
                  content: 'Comment content',
                  replyes: [
                    {
                      author: {
                        name: 'John Doe',
                        image: 'path/to/image.jpg',
                      },
                      date: '2023-01-01',
                      content: 'Reply content',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          title: 'Column Title',
          id: 'column-123',
          tasks: [
            {
              title: 'Task Title',
              id: 'task-123',
              data: 'Task data',
              author: {
                name: 'John Doe',
                image: 'path/to/image.jpg',
              },
              comments:[],
            },
          ],
        },
      ],
    },
    {
      title: 'Board Title',
      id: 'board-123',
      columns: [
        {
          title: 'Column Title',
          id: 'column-123',
          tasks: [
            {
              title: 'Task Title',
              id: 'task-123',
              data: 'Task data',
              author: {
                name: 'John Doe',
                image: 'path/to/image.jpg',
              },
              comments: [
                {
                  author: {
                    name: 'John Doe',
                    image: 'path/to/image.jpg',
                  },
                  date: '2023-01-01',
                  content: 'Comment content',
                  replyes: [
                    {
                      author: {
                        name: 'John Doe',
                        image: 'path/to/image.jpg',
                      },
                      date: '2023-01-01',
                      content: 'Reply content',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }
  ]

const [userSecond, setUser] = useState<User | null>(null)
console.log(initialColumns);

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, currentUser => {
    console.log(currentUser)
    setUser(currentUser)
  })

  return unsubscribe
}, [])



return (
  <BrowserRouter>
    <Routes>
      <Route path="/desktop/taskmodal/:id" element={<TaskModal />} />
      <Route path="/desktop" element={<Desktop initialColumns={initialColumns} />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/boards" element={<Boards />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
)
}

export default App