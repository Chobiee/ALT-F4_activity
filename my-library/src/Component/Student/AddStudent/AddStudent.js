import React, {useEffect, useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {setSelectedStudent, setStudent} from '../../../redux/actions/LibraryActions';

export default function AddStudent() {
const [ firstname, setFirstname] = useState ('');
const [ lastname, setLastname] = useState ('');
const dispatch = useDispatch();
const students = useSelector((state)  => state.allStudents.students); 
const onetudent = useSelector((state)  => state.singleStudent); 




console.log(onetudent)

const addStudent=()=>{
  const newstudent={
    id: Math.floor (Math.random()*10000),
    firstname :firstname,
    lastname :lastname,
    state:'ACTIVE'
  }

  const oldStudent = [...students];
  oldStudent.push(newstudent);
  dispatch(setStudent(oldStudent));

}

const updateStudent=()=>{
  const newstudent={
    id:onetudent.id,
    firstname :firstname,
    lastname :lastname,
    state:'ACTIVE'
  }
  const oldStudent = [...students];
  const studentIndex = oldStudent.findIndex((student)=>student.id===onetudent.id)
  console.log(studentIndex);
  oldStudent.splice(studentIndex, 1, newstudent);
  dispatch(setStudent(oldStudent));

  onetudent.firstname='';
  onetudent.lastname='';
  onetudent.state='ACTIVE';
  dispatch(setSelectedStudent(onetudent))

  setFirstname('');
  setLastname('');

}



useEffect(()=>{
  if(onetudent.firstname===''){

  }else{
    setFirstname(onetudent.firstname);
    setLastname(onetudent.lastname);
  }
},[onetudent])

  return (
    <>
    <div className="student-form">
      <input type="text" 
                placeholder="Enter first name"
                onChange={(e)=> setFirstname (e.target.value)}/>
      <input type="text" 
                placeholder="Enter last name"
                onChange={(e)=> setLastname (e.target.value)}/>
      <button onClick={()=>addStudent()} className="add-student">Add</button>
      {
        onetudent.state==='UPDATING' ?
          <button onClick={()=>updatedStudent()} className="update-student">UPDATE</button>:
          <button onClick={()=>addStudent()} className="add-student">Add</button>
      }
      
   </div>
   </>
  )
}
