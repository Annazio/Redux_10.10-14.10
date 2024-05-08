import React from "react";
import style from "./style.module.css"
import { useDispatch } from "react-redux";
import {remove} from "../../store/slice/usersSlice"

export default function UserItem({ first_name, last_name, age, gender, id }) {
  const dispatch = useDispatch()
  
  return (
    
      <div className={[style.item, gender ==="f" ? style.female : style.male].join(' ')} >
        <p>{first_name}</p>
        <p>{last_name}</p>
        <p>{age}</p>
        <button onClick={()=>dispatch(remove(id))}>Löschen</button>
      </div>

      
  );
}
