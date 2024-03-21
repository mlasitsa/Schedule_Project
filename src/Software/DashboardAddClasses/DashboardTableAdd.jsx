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
            <h1 className="dashboardPlanningPage-title">Academic planning</h1>

            <table className='dashboardPlanningPage-table'>
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
                <tr>
                    <td>{props.course}</td>
                    <td>{props.sect}</td>
                    <td>{props.crn}</td>
                    <td>{props.name}</td>
                    <td>{props.cr}</td>
                    <td>{props.schedule}</td>
                    <td>{props.dates}</td>
                    <td>{props.instructor}</td>
                    <td>{props.seats}</td>
                </tr>
            </table>
        </div>
    )
}

export default DashboardTableAdd;