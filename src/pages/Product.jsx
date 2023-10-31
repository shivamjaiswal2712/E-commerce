import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";

const Product = () => {
    const { id } = useParams();
    const [product, setproduct] = useState([]);
    const [similarProducts, setSimilarProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    };

    useEffect(() => {
        const getProduct = async() => {
            setLoading(true);
            setLoading2(true);
            
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            setproduct(data);
            setLoading(false);

            const response2 = await fetch(`https://fakestoreapi.com/products/category/${data.category}`);
            const data2 = await response2.json();
            setSimilarProducts(data2);
            setLoading2(false);
        };
        getProduct();
    }, [id]);

    const Loading = () => {
        return(
            <>
                <div className="container my-5 py-2">
                    <div className="row">
                        <div className="col-md-6 py-3">
                            <Skeleton height={400} width={400} />
                        </div>

                        <div className="col-md-6 py-5">
                            <Skeleton height={30} width={250} />
                            <Skeleton height={90} />
                            <Skeleton height={40} width={70} />
                            <Skeleton height={50} width={110} />
                            <Skeleton height={120} />
                            <Skeleton height={40} width={110} inline={true} />
                            <Skeleton className="mx-3" height={40} width={110} />
                        </div>
                    </div>
                </div>
            </>
        );
    };

    const ShowProduct = () => {
        return(
            <>
                <div className="container my-5 py-2">

                </div>
            </>
        );
    }
}

export default Product;