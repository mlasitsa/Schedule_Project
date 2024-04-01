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
        <div className='dashboardPlanningPage-table-add'>

            <div className='dashboardPlanningPage-h4-input'> 
                <h4 className='dashboardPlanningPage-table-add-select-term-title'>SELECT TERM</h4>
            
                <input
                className='dashboardPlanningPage-term-input'
                type="text"
                placeholder='Enter Term'
                name="term"
                required
                value={props.classes.term}
                onChange={(el) => props.setTerm(el.target.value)}
                
                ></input>
            </div>
            

            <table className='dashboardPlanningPage-classes-table'>
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
                {props.classes.map((clasItem, index) => (
                    <tr key={index}>
                    
                        <td>
                            <input
                                type="text"
                                placeholder=''
                                name="course"
                                required
                                value={clasItem.course}
                                onChange={(el) => props.onInputChange(el, index)}>
                            </input>
                        </td>

                        <td>
                            <input
                                type="text"
                                placeholder=''
                                name="sect"
                                required
                                value={clasItem.sect}
                                onChange={(el) => props.onInputChange(el, index)}>
                            </input>
                        </td>

                        <td>
                            <input
                                type="text"
                                placeholder=''
                                name="crn"
                                required
                                value={clasItem.crn}
                                onChange={(el) => props.onInputChange(el, index)}>
                            </input>
                        </td>

                        <td>
                            <input
                                type="text"
                                placeholder=''
                                name="className"
                                required
                                value={clasItem.className}
                                onChange={(el) => props.onInputChange(el, index)}>
                            </input>
                        </td>

                        <td>
                            <input
                                type="text"
                                placeholder=''
                                name="cr"
                                required
                                value={clasItem.cr}
                                onChange={(el) => props.onInputChange(el, index)}>
                            </input>
                        </td>

                        <td>
                            <input
                                type="text"
                                placeholder=''
                                name="schedule"
                                required
                                value={clasItem.schedule}
                                onChange={(el) => props.onInputChange(el, index)}>
                            </input>
                        </td>

                        <td>
                            <input
                                type="text"
                                placeholder=''
                                name="dates"
                                required
                                value={clasItem.dates}
                                onChange={(el) => props.onInputChange(el, index)}>
                            </input>
                        </td>

                        <td>
                            <input
                                type="text"
                                placeholder=''
                                name="instructor"
                                required
                                value={clasItem.instructor}
                                onChange={(el) => props.onInputChange(el, index)}>
                            </input>
                        </td>

                        <td>
                            <input
                                type="text"
                                placeholder=''
                                name="seats"
                                required
                                value={clasItem.seats}
                                onChange={(el) => props.onInputChange(el, index)}>
                            </input>
                        </td>
                    </tr>
                      ))}
                </tbody>
            </table>
            
            <div className='dashboardPlanningPage-4btns'>
                <div className='dashboardPlanningPage-split-by-2'>
                    <button className='dashboardPlanningPage-submit-btn' onClick={props.addData}>SUBMIT</button>
                     <button className='dashboardPlanningPage-load-btn'>LOAD EXISTING SCHEDULE</button>
                </div>

                <div className='dashboardPlanningPage-split-by-2'>
                    <button className='dashboardPlanningPage-add-row-btn' onClick={props.addClass}>ADD ROW</button>
                    <button className='dashboardPlanningPage-drop-btn'>DROP</button>
                </div>
            </div>
        </div>
    )
}

export default DashboardTableAdd;