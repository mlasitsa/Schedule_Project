import React from 'react';
import '/src/Software/DashboardPlanningPage/DashboardPlanningPage.css'
import { useState } from 'react';
import slimeLogo from '/slimeLogo.png'
import { useEffect } from 'react';

function DashboardPlanningPage() {

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
                    <th>Column 1</th>
                    <th>Column 2</th>
                    <th>Column 3</th>
                    <th>Column 4</th>
                    <th>Column 5</th>
                    <th>Column 6</th>
                </tr>
                <tr>
                    <td>Data 1</td>
                    <td>Data 2</td>
                    <td>Data 3</td>
                    <td>Data 4</td>
                    <td>Data 5</td>
                    <td>Data 6</td>
                </tr>
            </table>
        </div>
    )
}

export default DashboardPlanningPage;