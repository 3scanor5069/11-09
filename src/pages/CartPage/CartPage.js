import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Cart from '../../components/Cart/Cart';
import './CartPage.css';

const CartPage = () => {
    // Ejemplo de inicialización del estado del carrito
    const [cartItems, setCartItems] = useState([]);

    const handleRemoveItem = (index) => {
        setCartItems(cartItems.filter((_, i) => i !== index));
    };

    return (
        <div>
            <Header />
        <div className="cart-page-container">
            <Cart cartItems={cartItems} onRemoveItem={handleRemoveItem} />
        </div>
        <Footer />
        </div>
    );
};

export default CartPage;
