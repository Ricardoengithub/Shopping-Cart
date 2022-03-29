import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types';
import CartItem from './CartItem';

const Cart = ({ items, total, currency, removeFromCart }) => {
    const location = useLocation();
    const inCheckout = location.pathname === "/checkout"
    return (
        <div>
            <h3>Shopping Cart</h3>

            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {items.length > 0 && (
                            <div className="cart__body">
                                {items.map(item => (
                                    <CartItem key={item.id} {...item} onClick={() => removeFromCart(item.id)}  checkout={inCheckout} />
                                ))}
                            </div>
                        )}
                        {items.length === 0 && (
                            <div className="alert alert-info">Cart is empty</div>
                        )}
                        <div className="cart__total">Total: {total} {currency}</div>
                        <div className="cart__total">Total con IVA: {total * 1.16} {currency}</div>
                            <div className="buy-button">
                                <Link to={inCheckout ? "/" : "/checkout"}>
                                    <button className={'btn ' + (inCheckout ? "btn-primary" : 'btn-success')}>
                                        {inCheckout ? "Regresar" : "Comprar"}
                                    </button>
                                </Link>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string,
    removeFromCart: PropTypes.func.isRequired
}

export default Cart;
