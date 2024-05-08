import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clear } from '../../store/slice/usersSlice';

export default function UsersCalculation() {
    const users = useSelector((state) => state.users.list)

    const male = users.filter(el => el.gender === "m").length;
    const female = users.filter(({gender}) => gender === "f").length;

   const fAvgAge = users.reduce((acc, {age, gender}) => acc + (gender ==="f" ? age: 0), 0) / female 
   const mAvgAge = users.reduce((acc, {age, gender}) => acc + (gender ==="m" ? age: 0), 0) / male || 0

   const dispatch = useDispatch()
  return (
    <div>
        <p>Insgesamt Frauen: {female} </p>
        <p>Insgesamt Männer: {male}</p>
        <p>Durchschnittsalter Frauen: {fAvgAge}</p>
        <p>Durchschnittsalter Männer: {mAvgAge}</p>
        <button onClick={()=> dispatch(clear())}>Alle Benutzer löschen</button>
    </div>
  )
}
