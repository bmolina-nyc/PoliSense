import React from 'react';
import SearchBar from './Searchbar';
import Card from './Card';

const DashboardPage = () => (
        <div className="dashboard">
            <div>
                <SearchBar/>
            </div>

            <div className="flex-container">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>

           
        </div>
    )
    

export default DashboardPage;