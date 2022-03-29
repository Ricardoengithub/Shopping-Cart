import React, { Fragment } from 'react';
import { useSelector } from 'react-redux'
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';
import Login from "./containers/Login"
import NavBar from './containers/NavBar';

const App = () => {
    const isLogged = useSelector((state) => state.user.logged)

    return (
        <div className="container">
            {
                !isLogged ?
                    <Login />
                    : <Fragment>
                        <NavBar />
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Virtual Shop</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <ProductList />
                            </div>
                            <div className="col-md-4">
                                <Cart />
                            </div>
                        </div>
                    </Fragment>
            }

            <footer>
                <small>
                    powered by <a href="http://www.kikoya.mx/">Kikoya</a>
                </small>
            </footer>
        </div>
    );
}

export default App;
