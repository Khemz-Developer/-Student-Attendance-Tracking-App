"use client";
import React, { useEffect } from 'react'
import AddNewStudent from './_components/AddNewStudent'
import GlobalApi from '@/app/_services/GlobalApi'
import { useState } from 'react'
import StudentListTable from './_components/StudentListTable';

function Student() {

  const [studentList, setStudentList] = useState([]);
  useEffect(() => {
    GetAllStudents();
  }, []);

  const GetAllStudents = () => {
    // API Call
    GlobalApi.GetAllStudents().then((res) => {
      console.log(res.data);
      setStudentList(res.data);
    });
  }
  
  return (
    <div>
    <div className='flex items-center justify-between p-3'>
        <h2 className='text-2xl font-bold '>Students </h2>
        <AddNewStudent />
         
    </div>

    <StudentListTable studentList={studentList} />  
    </div>
  )
}

export default Student