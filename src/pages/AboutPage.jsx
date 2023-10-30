import React from "react";
import { Footer, Navbar } from "../components";

const AboutPage = () => {
    return(
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">About Us</h1>
                <hr />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum incidunt corporis natus explicabo 
                    atque delectus aspernatur dolorem. Recusandae nihil laboriosam ab delectus incidunt, debitis deleniti 
                    laudantium. Perferendis odit aliquam eum.
                </p>

                <h2 className="text-center py-4">Our Products</h2>
                <div className="row">
                    <div className="col-md-3 col-sm-6 mb-3 px-3">
                        <div className="card h-100">
                            <img className="card-img-top img-fluid" src="" alt="" height={160}/>
                            <div className="card-body">
                                <h5 className="card-title text-center">Men's Clothing</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 mb-3 px-3">
                        <div className="card h-100">
                            <img className="card-img-top img-fluid" src="" alt="" height={160}/>
                            <div className="card-body">
                                <h5 className="card-title text-center">Women's Clothing</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 mb-3 px-3">
                        <div className="card h-100">
                            <img className="card-img-top img-fluid" src="" alt="" height={160}/>
                            <div className="card-body">
                                <h5 className="card-title text-center">Jewelery</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 mb-3 px-3">
                        <div className="card h-100">
                            <img className="card-img-top img-fluid" src="" alt="" height={160}/>
                            <div className="card-body">
                                <h5 className="card-title text-center">Electronics</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AboutPage;