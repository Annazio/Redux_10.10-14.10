import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserItem from '../UserItem'
import style from "./style.module.css"
import { fetchUsers } from '../../store/slice/usersSlice'

export default function UsersList() {
  const users = useSelector((state) => state.users.list )

const dispatch = useDispatch()
useEffect(()=> {
  dispatch(fetchUsers())
},[])

  return (
    <div className={style.container} >
       
      {
        users.map(el => <UserItem key={el.id} {...el}/>)
      }
   
    </div>
  )
}
