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
                    laudantium. Perferendis odit aliquam eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eum in voluptates perferendis possimus. Illo vero aut alias nemo commodi fugit aspernatur quasi,
                     animi magnam at molestiae qui quia vel distinctio! Lorem ipsum dolor, sit amet consectetur adipisicing 
                     elit. Quo, saepe, optio nesciunt, aliquam porro doloribus amet pariatur odit recusandae veniam ipsam
                      quis aliquid laudantium! Ad eligendi quam aliquid vero nostrum.
                </p>

                <h2 className="text-center py-4">Our Products</h2>
                <div className="row">
                    <div className="col-md-3 col-sm-6 mb-3 px-3">
                        <div className="card h-90">
                            <img className="card-img-top img-fluid" src="https://tse3.mm.bing.net/th?id=OIP.ddWAudmfEfhNbUUoZdnm6AHaE8&pid=Api&P=0&h=180" alt="" height={60}/>
                            <div className="card-body">
                                <h5 className="card-title text-center">Men's Clothing</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 mb-3 px-3">
                        <div className="card h-100">
                            <img className="card-img-top img-fluid" src="https://tse1.mm.bing.net/th?id=OIP.bgZWxSSitOUrxP8qVORtSwHaEo&pid=Api&P=0&h=180" alt="" height={60}/>
                            <div className="card-body">
                                <h5 className="card-title text-center">Women's Clothing</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 mb-3 px-3">
                        <div className="card h-90">
                            <img className="card-img-top img-fluid" src="https://tse1.mm.bing.net/th?id=OIP.bT6r6Wdmg6HAnSXKNUXfTQHaE8&pid=Api&P=0&h=180" alt="" height={60}/>
                            <div className="card-body">
                                <h5 className="card-title text-center">Jewelery</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 mb-3 px-3">
                        <div className="card h-90">
                            <img className="card-img-top img-fluid" src="https://tse4.mm.bing.net/th?id=OIP.-f8Ymvyq379qgDvY-qzSdwHaE8&pid=Api&P=0&h=180" alt="" height={60}/>
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