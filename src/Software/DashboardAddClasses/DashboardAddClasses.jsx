import React from 'react';
import '/src/Software/DashboardAddClasses/DashboardAddClasses.css'
import { useState } from 'react';
import { useEffect } from 'react';
import DashboardTableAdd from './DashboardTableAdd';

function DashboardAddClassesPage() {

  const [classes, setClasses] = useState([{
    term: '',
    course: '',
    sect: '',
    crn: '',
    className: '',
    cr: '',
    schedule: '',
    dates: '',
    instructor: '',
    seats: ''
  }])

  const addNewClass = () => {
    const newClass = { term: '', course: '', crn: '', className: '', cr: '', schedule: '', dates: '', instructor: '', seats: '' };
    setClasses([...classes, newClass]);
    console.log(classes);
  };

  const handleInputChange = (el, index) => {
    const { name, value } = el.target;
    const updatedClasses = classes.map((classItem, idx) => 
      idx === index ? { ...classItem, [name]: value } : classItem
    );
    setClasses(updatedClasses);
  };


    useEffect(() => {

        document.body.style.backgroundColor = '#B9DCE1';
        
        return () => {
          document.body.style.backgroundColor = 'black'; 
        };
      }, []);

    return (
        <div className=''>
            <h1 className="dashboardAddClassesPage-title">Academic planning</h1>

            

            <DashboardTableAdd classes={classes} addClass={addNewClass} onInputChange={handleInputChange}/>
        </div>
    )
}

export default DashboardAddClassesPage;