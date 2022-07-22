import React, { useState, useEffect } from 'react';
import CartContext from "./CartContext";

const CustomCartContext = ({ children }) => {
    const KEY_CODER_PRODUCTS = 'KEY_CODER_PRODUCTS';
    const KEY_CODER_TOTAL_ITEMS = 'KEY_CODER_TOTAL_ITEMS';
    const [items, setItems] = useState([]);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        const products = JSON.parse(localStorage.getItem(KEY_CODER_PRODUCTS));
        if (products) {
            setItems(products);
        }
        const total = localStorage.getItem(KEY_CODER_TOTAL_ITEMS);
        if (total) {
            setTotalItems(parseInt(total));
        }
    }, []);

    const addItem = (item, quantity) => {
        const findItem = items.find(i => i.item.id === item.id);
        setTotalItems(prevState => {
            let resp;
            if (findItem) {
                resp = prevState + (quantity - findItem.quantity);
            } else {
                resp = prevState + quantity;
            }
            localStorage.setItem(KEY_CODER_TOTAL_ITEMS, resp);
            return resp;
        });
        setItems(prevState => {
            let resp;
            if (findItem) {
                resp = prevState.map((i) => {
                    if (i.item.id === item.id) {
                        return {
                            ...i,
                            quantity: quantity
                        };
                    } else {
                        return i;
                    }
                });
            } else {
                resp =  [...prevState, {item, quantity}];
            }
            localStorage.setItem(KEY_CODER_PRODUCTS, JSON.stringify(resp));
            return resp;
        });
    };

    const subtractItem = (itemId) => {
        const item = getItem(itemId);
        if (item) {
            setTotalItems(prevState => {
                let resp = prevState - 1;
                localStorage.setItem(KEY_CODER_TOTAL_ITEMS, resp);
                return resp;
            });
            setItems(prevState => {
                let resp = prevState.map((i) => {
                    if (i.item.id === itemId) {
                        return {
                            ...i,
                            quantity: i.quantity - 1
                        };
                    } else {
                        return i;
                    }
                });
                localStorage.setItem(KEY_CODER_PRODUCTS, JSON.stringify(resp));
                return resp;
            });  
        }
    };

    const removeItem = (itemId) => {
        const item = getItem(itemId);
        if (item) {
            setTotalItems(prevState => {
                let resp = prevState - item.quantity;
                localStorage.setItem(KEY_CODER_TOTAL_ITEMS, resp);
                return resp;
            });
            setItems(prevState => {
                let resp = prevState.filter((i) => i.item.id !== itemId);
                localStorage.setItem(KEY_CODER_PRODUCTS, JSON.stringify(resp));
                return resp;
            });
        }
    };

    const clear = () => {
        setTotalItems(0);
        setItems([]);
        localStorage.removeItem(KEY_CODER_PRODUCTS);
        localStorage.removeItem(KEY_CODER_TOTAL_ITEMS);
    };

    const isInCart = (itemId) => {
        return items.some(i => i.item.id === itemId);
    };

    const getItem = (itemId) => {
        return items.find(i => i.item.id === itemId);
    };

    return (
        <CartContext.Provider value={{items, totalItems, isInCart, addItem, subtractItem, removeItem, clear, getItem}}>
            {children}
        </CartContext.Provider>
    );
};

export default CustomCartContext;