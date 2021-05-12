import React, { useState, useEffect } from "react";







const ClientMain = () => {
    const [client, setClient] = useState([]);

    useEffect (()=> {
        loadClient();

    }, []);
    
    function loadClient() {
        
    }
    return (
        <div>
           
            <header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
                {/* <!-- Masthead Avatar Image--> */}
                {/* <img class="masthead-avatar mb-5" src="Assets/images/img/avataaars.svg" alt="..." /> */}
                {/* <!-- Masthead Heading--> */}
                <h1 class="masthead-heading text-uppercase mb-0">All Jobs</h1>
                {/* <!-- Icon Divider--> */}
        
           
         

              
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
       
            
        </div>
    )
}

export default ClientMain
