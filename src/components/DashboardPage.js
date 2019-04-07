import React from 'react';
import SearchBar from './Searchbar';
import Chart from './Chart'
 
const DashboardPage = () => (
        <div className="dashboard">
            <div>
                <SearchBar/>
            </div>

            <div className="chart">
                <Chart />
            </div>

           
        </div>
    )
    

export default DashboardPage;