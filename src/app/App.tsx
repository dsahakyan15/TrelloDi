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

const App = () => {

  const initialColumns: ColumnType[] = [
    {
      id: 'col-1',
      title: 'To Do',
      cards: [{ id: 'c-1', content: 'Task 1' }, { id: 'c-2', content: 'Task 2' }, { id: 'c-3', content: 'Task 3' }]
    },
    {
      id: 'col-2',
      title: 'In Progress',
      cards: [{ id: 'c-4', content: 'Task 4' }, { id: 'c-5', content: 'Task 5' }, { id: 'c-6', content: 'Task 6' }]
    },
    {
      id: 'col-3',
      title: 'Done',
      cards: [{ id: 'c-7', content: 'Task 7' }]
    }
  ]

  const [userSecond, setUser] = useState<User | null>(null)

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
        <Route path="/" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App