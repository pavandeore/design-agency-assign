import React from 'react'
import './footer.css'
import logo from '../../assets/d-logo.jpg';

function footer() {
    return (
        
        
    <footer className="page-footer font-small mdb-color lighten-3 pt-4">

  
        <div className="container text-center text-md-left">

    
        <div className="row">

      
            <div className="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">

                <img height="50px" width="50px" className="mb-3" src={logo} />
                <p className="custom-color-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit amet numquam iure provident voluptate
                esseLorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

            </div>
            

            <hr className="clearfix w-100 d-md-none" />

      
            <div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
            
                <h5 className="font-weight-bold mb-4">Company</h5>

                <ul className="list-unstyled custom-color-gray">
                <li>
                    <a href="#!">About Us</a>
                </li>
                <li>
                    <a href="#!">Partners</a>
                </li>
                <li>
                    <a href="#!">Careers</a>
                </li>
                <li>
                    <a href="#!">Faqs</a>
                </li>
                <li>
                    <a href="#!">Terms of Service</a>
                </li>
                <li>
                    <a href="#!">Contact Us</a>
                </li>
                </ul>

            </div>

            <div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
            
                <h5 className="font-weight-bold mb-4">Quick Links</h5>

                <ul className="list-unstyled custom-color-gray">
                <li>
                    <a href="#!">Home</a>
                </li>
                <li>
                    <a href="#!">Business</a>
                </li>
                <li>
                    <a href="#!">Funder</a>
                </li>
                <li>
                    <a href="#!">Partner</a>
                </li>
                <li>
                    <a href="#!">Knowledge Center</a>
                </li>
                <li>
                    <a href="#!">Events</a>
                </li>
                </ul>

            </div>
      

            <hr className="clearfix w-100 d-md-none" />

      
            <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1 custom-">

            
                <h5 className="font-weight-bold mb-4 ml-3">Contact</h5>

                <ul className="list-unstyled custom-color-gray">
                <li>
                    <p>
                        <i className="fa fa-phone ml-3 mr-1 custom-color-blue"></i> Telephone<br/>
                        <i className="mr-3"></i>+91 9975470482
                    </p>
                </li>
                <li>
                    <p>
                        <i className="fa fa-envelope ml-3 mr-1 custom-color-blue"></i> Email<br/>
                        <i className="mr-3"></i>hello@gmail.com
                    </p>
                </li>
                </ul>

            </div>
      

            <hr className="clearfix w-100 d-md-none" />

      
            <div className="col-md-2 col-lg-2 text-center mx-auto my-4">

            
                <h5 className="font-weight-bold mb-4">Follow Us</h5>

            
                <a type="button" className="btn-floating bg-primary rounded-circle text-white px-2 py-1 mx-2 btn-fb">
                    <i className="fa fa-facebook-f "></i>
                </a>
                
                <a type="button" className="btn-floating bg-primary rounded-circle text-white px-2 py-1 mx-2 btn-fb">
                    <i className="fa fa-linkedin"></i>
                </a>
                
                <a type="button" className="btn-floating bg-primary rounded-circle text-white px-2 py-1 mx-2 btn-fb">
                    <i className="fa fa-twitter"></i>
                </a>

            </div>
            <div className="col-12 text-center my-2">
                <p className="custom-color-gray">&copy;2020 Copyright. All Rights Reserved. </p>
            </div>
        </div>
        </div>

    </footer>


    )
}

export default footer
