import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Table from 'react-bootstrap/Table'
import '../Assets/images/img/avataaars.svg'




const Main = () => {
    return (
        <div>
            <Header />
            <header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
                {/* <!-- Masthead Avatar Image--> */}
                {/* <img class="masthead-avatar mb-5" src="Assets/images/img/avataaars.svg" alt="..." /> */}
                {/* <!-- Masthead Heading--> */}
                <h1 class="masthead-heading text-uppercase mb-0">All Jobs</h1>
                {/* <!-- Icon Divider--> */}
                <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Job Type</th>
      <th>Contractor</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Lawncare</td>
      <td>Javier's LawnCare</td>
      <td>We cut your grass 'n' stuff</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td> Cook dinner</td>
      <td> Philip</td>
      <td>hungry</td>
    </tr>
  </tbody>
    <br />
  {/* <p>
    <Button variant="primary">Create a Job</Button>
  </p> */}
</Table>

    <br />
 
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-tools"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                {/* <!-- Masthead Subheading--> */}
                <p class="masthead-subheading font-weight-light mb-0"></p>
            </div>
        </header>
        {/* <!-- Portfolio Section--> */}
       
            <Footer />
        </div>
    )
}

export default Main
