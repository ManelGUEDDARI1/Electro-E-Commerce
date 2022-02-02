import React from 'react'
import { Link} from 'react-router-dom';
import Rating from './Rating';


const Product =(props)=> {
  const { product } = props;


   
  return (

            // <div className="new-arrivals-content">
              // <div className="row">
                <div key={product._id} className="col-md-3 col-sm-4">
                  <div className="single-new-arrival">
                    <div className="single-new-arrival-bg">
                    <Link to={`/product/${product._id}`}>
        <img src={product.image} alt={product.name} />
      </Link>
                      <div className="single-new-arrival-bg-overlay"></div>
                      <div className="sale bg-1">
                        <p>New</p>
                      </div>
                      <div className="new-arrival-cart">
                        <div>
                          <span className="lnr lnr-cart"></span>
                        <span> <Link to={`/cart/${product._id}`}> Add <span> To </span> Cart </Link> </span>
                        </div>
                        <p className="arrival-review pull-right">
                          <span className="lnr lnr-heart"></span>
                          <span className="lnr lnr-frame-expand"></span>
                        </p>
                      </div>
                    </div>
                   <span> <h4>  <Link to={`/product/${product._id}`}>
                {product.name}
        </Link></h4></span>
       <p className="arrival-product-price"> <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating> </p>
        <p className="arrival-product-price">${product.price}</p>
      </div>
    </div>


    );
}
    

export default Product


