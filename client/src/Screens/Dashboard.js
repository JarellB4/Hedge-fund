import React from 'react'
import Jumbotron2 from '../components/DJumbotron/DJumbotron'
import Nav2 from '../components/Nav/Nav'
import Table2 from '../components/DTable/Dtable'
import Footer2 from '../components/DFooter/Footer'


const Dashboard = () => {
    return (
        <div>
       <Nav2 />
       <br />
       <Jumbotron2/>
       
       
       <br />
       <Table2 />
           
     <Footer2 />
        </div>
    )
}

export default Dashboard
