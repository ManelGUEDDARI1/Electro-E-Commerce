import React, { useEffect,useState} from 'react'
import Rating from '../components/Rating';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import { useDispatch,useSelector } from 'react-redux';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import { productsDetails } from '../actions/productActions';
import '../style2.css';


const ProductScreen = (props) => {
   const dispatch = useDispatch();
   const params = useParams();
   const navigate = useNavigate();
   const productDetail = useSelector(state => state.productDetail);
   const { loading, error,product}= productDetail;
   const productId = params.id;
   const [quantity, setQuantity] = useState(1);
   //const userSignIn = useSelector((state) => state.userSignIn);
 // const { userInfo, loadingU, errorE } = userSignIn;
   
 

   useEffect(() => {
    dispatch(productsDetails(productId))
    //console.log('Product screen: '+ userInfo.name)
   }, [dispatch,productId]);

    const addToCartHandler = () => {
        console.log('before ' +productId );
       //navigate('/cart/' + productId +'/');
       navigate('/cart/', {state:{id :productId,quantity: `${quantity}` }});
      }
      



return (
    <div>
    {loading ? (<LoadingBox/>): error ? (<MessageBox variant="danger" {...error} /> 
    ) : (   <div>

        <h1>Product</h1>
       
           <Link to="/" >Back to result</Link> 
        <div className="row top" >
            <div className="col-2" >
              <img className="large" src={product.image} alt={product.name} ></img>
            </div> 
            <div className="col-1" >
              <ul>
                  <li>
                      <h1>{product.name}</h1>
                  </li>
                  <li>
                      <Rating rating={product.rating} numRevies={product.numReviews} />
                  </li>
                  <li>
                      Price : {product.price}
                  </li>
                  <li>
                      Descriptions: <p>{product.description}</p>
                  </li>
              </ul>
            </div>
            <div className="col-1" >
              <div className="card card-body" >
                  <ul>
                      <li>
                          <div className="row">
                             <div>Price</div>
                             <div className="price">{product.price} TND</div>
                          </div>
                      </li>
                      <li>
                          <div className="row">
                              <div>Status</div>
                              <div>
                                  {product.countInStock > 0 ? (
                                      <span className="succes"> In Stock </span>
                                  ) : (
                                      <span className="danger"> Unavailable </span>
                                  )}
                              </div>
                          </div>
                      </li>
                     
                  {product.countInStock > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div>Quantity</div>
                          <div>
                            <select
                              value={quantity}
                              onChange={(e) => setQuantity(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button
                          onClick={addToCartHandler}
                          className="primary block"
                        >
                          Add to Cart
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
            </div>
        </div>
      )}
    </div>
  );
}



                     

export default ProductScreen