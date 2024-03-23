import React from 'react';
import '/src/Software/DashboardAddClasses/DashboardTableAdd.css'
import { useState } from 'react';
import { useEffect } from 'react';

function DashboardTableAdd(props) {

    useEffect(() => {

        document.body.style.backgroundColor = '#B9DCE1';
        
        return () => {
          document.body.style.backgroundColor = 'black'; 
        };
      }, []);

    return (
        <div className=''>

            <h4>SELECT TERM</h4>
            <input
            type="text"
            placeholder='Enter Term'
            name="term"
            required
            value={props.classes.term}
            onChange={props.onInputChange}
            
            ></input>

            <table className='dashboardPlanningPage-table'>
                <thead>
                    <tr>
                        <th>COURSE</th>
                        <th>SECT</th>
                        <th>CRN</th>
                        <th>NAME</th>
                        <th>CR</th>
                        <th>SCHEDULE</th>
                        <th>DATES</th>
                        <th>INSTRUCTOR</th>
                        <th>SEATS</th>
                    </tr>
                </thead>
                <tbody>
                {props.classes.map((index) => (
                    <tr key={index}>
                    
                        <td>
                            <input
                                type="text"
                                placeholder=''
                                name="course"
                                required
                                value={props.classes.course}
                                onChange={props.onInputChange}>
                            </input>
                        </td>

                        <td>
                            <input
                                type="text"
                                placeholder=''
                                name="sect"
                                required
                                value={props.classes.sect}
                                onChange={props.onInputChange}>
                            </input>
                        </td>

                        <td>
                            <input
                                type="text"
                                placeholder=''
                                name="crn"
                                required
                                value={props.classes.crn}
                                onChange={props.onInputChange}>
                            </input>
                        </td>

                        <td>
                            <input
                                type="text"
                                placeholder=''
                                name="className"
                                required
                                value={props.classes.className}
                                onChange={props.onInputChange}>
                            </input>
                        </td>

                        <td>
                            <input
                                type="text"
                                placeholder=''
                                name="cr"
                                required
                                value={props.classes.cr}
                                onChange={props.onInputChange}>
                            </input>
                        </td>

                        <td>
                            <input
                                type="text"
                                placeholder=''
                                name="schedule"
                                required
                                value={props.classes.schedule}
                                onChange={props.onInputChange}>
                            </input>
                        </td>

                        <td>
                            <input
                                type="text"
                                placeholder=''
                                name="dates"
                                required
                                value={props.classes.dates}
                                onChange={props.onInputChange}>
                            </input>
                        </td>

                        <td>
                            <input
                                type="text"
                                placeholder=''
                                name="instructor"
                                required
                                value={props.classes.instructor}
                                onChange={props.onInputChange}>
                            </input>
                        </td>

                        <td>
                            <input
                                type="text"
                                placeholder=''
                                name="seats"
                                required
                                value={props.classes.seats}
                                onChange={props.onInputChange}>
                            </input>
                        </td>
                    </tr>
                      ))}
                </tbody>
            </table>

            <button onClick={props.addData}>SUBMIT</button>
            <button onClick={props.addClass}>ADD ROW</button>
            <button>DROP</button>
        </div>
    )
}

export default DashboardTableAdd;