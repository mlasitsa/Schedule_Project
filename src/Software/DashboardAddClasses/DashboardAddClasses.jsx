import React from 'react';
import '/src/Software/DashboardAddClasses/DashboardAddClasses.css'
import { useState } from 'react';
import { useEffect } from 'react';
import DashboardTableAdd from './DashboardTableAdd';
import axios from 'axios';

function DashboardAddClassesPage() {

  const [classes, setClasses] = useState([{
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

  const initialState = [{
    course: '',
    sect: '',
    crn: '',
    className: '',
    cr: '',
    schedule: '',
    dates: '',
    instructor: '',
    seats: ''
  }];

  const [term, setTerm] = useState();

  const addNewClass = () => {
    const newClass = {course: '', crn: '', className: '', cr: '', schedule: '', dates: '', instructor: '', seats: '' };
    setClasses([...classes, newClass]);
    console.log(classes);
  };

  const handleInputChange = (el, index) => {
    const { name, value } = el.target;
    const updatedClasses = classes.map((classItem, idx) => 
      idx === index ? { ...classItem, [name]: value } : classItem
    );
    setClasses(updatedClasses);
    console.log(classes)
  };

  const handleSubmit = (el) => {
    el.preventDefault();
    
    const classesWithTerm = classes.map((classItem) => ({
      ...classItem,
      term: term
  }));

  setClasses(classesWithTerm);
    axios.post('http://localhost:3001/classesdb', { classes: classesWithTerm})
    .then(response => {
        console.log(response)
        setClasses(initialState);
    })
    .catch(err => console.log(err)) 
  }

    useEffect(() => {

        document.body.style.backgroundColor = '#B9DCE1';
        
        return () => {
          document.body.style.backgroundColor = 'black'; 
        };
      }, []);

    return (
        <div className='dashboardAddClassesPage-add-classes'>
            <h1 className="dashboardAddClassesPage-title">Academic planning</h1>


            <DashboardTableAdd classes={classes} addData={handleSubmit} addClass={addNewClass} onInputChange={handleInputChange} setTerm={setTerm}/>
        </div>
    )
}

export default DashboardAddClassesPage;