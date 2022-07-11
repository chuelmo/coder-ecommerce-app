import React, { useState } from 'react';
import CartContext from "./CartContext";

const CustomCartContext = ({ children }) => {
    const [items, setItems] = useState([]);
    const [totalItems, setTotalItems] = useState(0);

    const addItem = (item, quantity) => {
        const findItem = items.find(i => i.item.id === item.id);
        setTotalItems(prevState => findItem
            ? prevState + (quantity - findItem.quantity)
            : prevState + quantity
        );
        setItems(prevState => {
            if (findItem) {
                return prevState.map((i) => {
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
                return [...prevState, {item, quantity}];
            }
        });
    };

    const subtractItem = (itemId) => {
        const item = getItem(itemId);
        if (item) {
            setTotalItems(prevState => prevState - 1);
            setItems(prevState => {
                return prevState.map((i) => {
                    if (i.item.id === itemId) {
                        return {
                            ...i,
                            quantity: i.quantity - 1
                        };
                    } else {
                        return i;
                    }
                });
            });
        }
    };

    const removeItem = (itemId) => {
        const item = getItem(itemId);
        if (item) {
            setTotalItems(prevState => prevState - item.quantity);
            setItems(prevState => prevState.filter((i) => i.item.id !== itemId));
        }
    };

    const clear = () => {
        setTotalItems(0);
        setItems([]);
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