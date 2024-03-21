import React from 'react';
import '/src/Software/DashboardAddClasses/DashboardAddClasses.css'
import { useState } from 'react';
import slimeLogo from '/slimeLogo.png'
import { useEffect } from 'react';

function DashboardAddClassesPage() {

    useEffect(() => {

        document.body.style.backgroundColor = '#B9DCE1';
        
        return () => {
          document.body.style.backgroundColor = 'black'; 
        };
      }, []);

    return (
        <div className=''>
            <h1 className="dashboardAddClassesPage-title">Academic planning</h1>

            
        </div>
    )
}

export default DashboardAddClassesPage;