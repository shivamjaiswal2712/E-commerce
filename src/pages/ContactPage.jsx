import { Footer, Navbar } from "../components";

const ContactPage = () => {
    return(
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Contact Us</h1>
                <hr />
                <div className="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form>
                            <div className="form my-3">
                                <label for="Name">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                            </div>

                            <div className="form my-3">
                                <label for="Email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                            </div>

                            <div className="form my-3">
                                <label for="text">Message</label>
                                <textarea rows={5} className="form-control" id="message" placeholder="Enter your message" />
                            </div>

                            <div className="text-center">
                                <button className="my-12 px-4 mx-auto btn btn-dark" type="submit" disabled>
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactPage;