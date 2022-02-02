import React from 'react'
import Product from '../components/Product'
import {useEffect} from 'react';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import {useSelector, useDispatch} from 'react-redux';
import { listProducts, productsDetails} from '../actions/productActions';
import { Link, useParams} from 'react-router-dom';



const HomeScreen = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const productId = params.id;
    const productList = useSelector(state => state.productList);
    const {loading,error,products} = productList;  

    useEffect(() => {
      dispatch(listProducts({}));
    }, [dispatch])
    useEffect(() => {
    
        dispatch(productsDetails(productId));
      }, [dispatch, productId]);
      // const addToCartHandler = () => {
      //     console.log(productId);
      //   navigate(`/cart/${productId}?quantity=${quantity}`);
      // };
    return (
<>
<div className='App'>

           <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">

<ol className="carousel-indicators">
  <li data-target="#header-carousel" data-slide-to="0" className="active"><span className="small-circle"></span></li>
  <li data-target="#header-carousel" data-slide-to="1"><span className="small-circle"></span></li>
  <li data-target="#header-carousel" data-slide-to="2"><span className="small-circle"></span></li>
</ol> 
<div className="carousel-inner" role="listbox">

  <div  className="item active">
    <div className="single-slide-item slide1">
      <div className="container">
        <div className="welcome-hero-content">
          <div className="row">
            <div className="col-sm-7">
              <div className="single-welcome-hero">
                <div className="welcome-hero-txt">
                  <h4>Great Design Collection</h4>
                  <h2>Electronic Integrated Circuit</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuiana smod tempor  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. 
                  </p>
                  <div className="packages-price">
                    <p>
                      $ 54.90
                      <del>$ 99.00</del>
                    </p>
                  </div>
                  <button className="btn-cart welcome-add-cart" onclick="window.location.href='#'">
                    {/* <span className="lnr lnr-plus-circle"></span> */}
                    <span className="lnr lnr-cart"></span>
                    <span> <Link to="/cart/61cb9dffe6700a2ce339375b"> Add <span> to </span> cart </Link> </span>
                  </button>
                  <button className="btn-cart welcome-add-cart welcome-more-info" onclick="window.location.href='#'">
                      <span> <Link to="/product/61cb9dffe6700a2ce339375b">More info</Link> </span>
                    
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="single-welcome-hero">
                <div className="welcome-hero-img">
                  <img src="images/p6.jpg" alt="sliderimage" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div className="item">
    <div className="single-slide-item slide2">
      <div className="container">
        <div className="welcome-hero-content">
          <div className="row">
            <div className="col-sm-7">
              <div className="single-welcome-hero">
                <div className="welcome-hero-txt">
                  <h4>Great Design Collection</h4>
                  <h2>Electronic Integrated Circuit</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuiana smod tempor  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. 
                  </p>
                  <div className="packages-price">
                    <p>
                      $ 218.90
                      <del>$ 299.00</del>
                    </p>
                  </div>
                  
                  <button className="btn-cart welcome-add-cart" onclick="window.location.href='#'">
                  <span className="lnr lnr-cart"></span>
                    <span> <Link to="/cart/61cb9dffe6700a2ce339375e"> Add <span> to </span> cart </Link> </span>
                  </button>
                  <button className="btn-cart welcome-add-cart welcome-more-info" onclick="window.location.href='#'">
                      <span> <Link to="/product/61cb9dffe6700a2ce339375e">More info</Link> </span>
                    
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="single-welcome-hero">
                <div className="welcome-hero-img">
                  <img src="images/p9.jpg" alt="slider_image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div className="item">
    <div className="single-slide-item slide3">
      <div className="container">
        <div className="welcome-hero-content">
          <div className="row">
            <div className="col-sm-7">
              <div className="single-welcome-hero">
                <div className="welcome-hero-txt">
                  <h4>Great Design Collection</h4>
                  <h2>Electronic Integrated Circuit</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuiana smod tempor  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. 
                  </p>
                  <div className="packages-price">
                    <p>
                      $ 52.90
                      <del>$ 80.00</del>
                    </p>
                  </div>
                  <button className="btn-cart welcome-add-cart" onclick="window.location.href='#'">
                  <span className="lnr lnr-cart"></span>
                    <span> <Link to="/cart/61cb9dffe6700a2ce3393764"> Add <span> to </span> cart </Link> </span>
                  </button>
                  <button className="btn-cart welcome-add-cart welcome-more-info" onclick="window.location.href='#'">
                      <span> <Link to="/product/61cb9dffe6700a2ce3393764">More info</Link> </span>
                    
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="single-welcome-hero">
                <div className="welcome-hero-img">
                  <img src="images/p15.png" alt="sliderimage" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</div>

</div>

</div>
            <section id="new-arrivals" className="new-arrivals">

                <div className="container">
                    <div className="section-header">

                        <h2>PRODUCTS</h2>

                    </div>

                    <div> {
                        loading ? (
                            <LoadingBox/>) : error ? (
                            <MessageBox variant="danger" {...error}/>
                        ) : (
                            <div className="row center">
                                {
                                products.map((product) => (
                                    <Product key={
                                            product._id
                                        }
                                        product={product}/>
                                ))
                            } </div>
                        )
                    } </div>


                </div>
            </section>

            <section id="sofa-collection">
                <div className="owl-carousel owl-theme" id="collection-carousel">
                    <div className="sofa-collection collectionbg1">
                        <div className="container">
                            <div className="sofa-collection-txt">
                                <h2>Electronic Components</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    <br/>
                                    sed do eiusmod tempor incididunt ut labore
                                    <br/>
                                    Ut enim ad minim veniam, quis nostrud exerc
                                    <br/>
                                    ullamco laboris nisi ut aliquip .
                                </p>

                                <div className="sofa-collection-price">
                                    <h4>strting from
                                        <span>$ 199</span>
                                    </h4>
                                </div>
                                <button className="btn-cart welcome-add-cart sofa-collection-btn" onClick="window.location.href='#'">
                               <span>  <Link to="https://www.instructables.com/Basic-Electronic-components">view more</Link> </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="sofa-collection collectionbg2">
                        <div className="container">
                            <div className="sofa-collection-txt">
                                <h2>System On Chip</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    <br/>
                                    sed do eiusmod tempor incididunt ut labore
                                    <br/>
                                    Ut enim ad minim veniam, quis nostrud exerc
                                    <br/>
                                    ullamco laboris nisi ut aliquip .
                                </p>
                                <div className="sofa-collection-price">
                                    <h4>strting from
                                        <span>$ 299</span>
                                    </h4>
                                </div>
                                {/* <div>
                                <button className="btn-cart welcome-add-cart sofa-collection-btn" onClick="window.location.href='#'">
                                 <span>  <Link to="https://www.instructables.com/Basic-Electronic-components">view more</Link> </span>
                                </button> </div> */}
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            </>
      
    )
}
export default HomeScreen







