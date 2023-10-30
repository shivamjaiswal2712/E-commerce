import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Navbar } from "../components";

const Checkout = () => {
    const state = useSelector((state) => state.handleCart);

    const EmptyCart = () => {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12 py-5 bg-light text-center">
                        <h4 className="p-3 display-5">No item in Cart</h4>
                        <Link to="/" className="btn btn-outline-dark mx-4">
                            <i className="fa fa-arrow-left" />Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        );
    };

    const ShowCheckout = () => {
        let subtotal = 0;
        let shipping = 30.0;
        let totalItems = 0;
        state.map((item) => {
            return(subtotal += item.price * item.qty);
        });

        state.map((item) => {
            return(totalItems += item.qty);
        });

        return(
            <>
                <div className="container py-5">
                    <div className="row my-4">
                        <div className="col-md-5 col-lg-4 order-md-last">
                            <div className="card mb-4">
                                <div className="card-header py-3 bg-light">
                                    <h5 className="mb-0">Order Summary</h5>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </>
        );

    }
    return(
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Checkout</h1>
                <hr />
                {state.length ? <ShowCheckout /> : <EmptyCart /> }
            </div>
        </>
    );
};

export default Checkout;