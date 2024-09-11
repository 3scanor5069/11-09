import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cartItems = [], onRemoveItem }) => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
    const discount = cartItems.reduce((acc, item) => acc + (item.discount || 0), 0);
    const total = subtotal - discount;

    // Hook para navegar
    const navigate = useNavigate();

    // Hook para obtener la ubicación actual
    const location = useLocation();

    const handleCheckout = () => {
        if (location.pathname === '/store') {
            // Si estás en la página de la tienda, redirige a CartPage
            navigate('/cart');
        } else if (location.pathname === '/cart') {
            // Si estás en la página del carrito, redirige a Checkout
            navigate('/Login');
        }
    };

    return (
        <div className="cart-page">
            <div className="cart-header">
                <h1>Mi carrito</h1>
            </div>
            <div className="cart-container">
                <div className="cart-items-container">
                    {cartItems.length === 0 ? (
                        <p>Tu carrito está vacío</p>
                    ) : (
                        cartItems.map((item, index) => (
                            <div key={index} className="cart-item">
                                <img src={item.image} alt={item.title} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h2>{item.title}</h2>
                                    <p className="cart-item-price">
                                        <span className="discounted-price">{item.price} COP</span>
                                        {item.discount && (
                                            <>
                                                <span className="original-price">{item.originalPrice} COP</span>
                                                <span className="discount-percentage">-{item.discountPercentage}%</span>
                                            </>
                                        )}
                                    </p>
                                    <p className="cart-item-description">{item.description}</p>
                                    <div className="cart-item-footer">
                                        <button onClick={() => onRemoveItem(index)} className="remove-button">Eliminar</button>
                                        <button className="wishlist-button">Mover a la lista de deseos</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className="cart-summary">
                    <h2>Resumen de juegos y aplicaciones</h2>
                    <div className="summary-details">
                        <p><span>Precio</span><span>{subtotal.toFixed(2)} COP</span></p>
                        <p><span>Descuento de la oferta</span><span>-{discount.toFixed(2)} COP</span></p>
                        <p><span>Impuestos</span><span>Calculados al finalizar la compra</span></p>
                        <hr />
                        <p className="summary-total"><span>Subtotal</span><span>{total.toFixed(2)} COP</span></p>
                    </div>
                    <button onClick={handleCheckout} className="checkout-button">Finalizar compra</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
