import React, { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import CategoryContext from "./CategoryContext";

const CustomCategoryContext = ({ children }) => {
    const [categories, setCategories] = useState([{id: 999, name: 'None'}]);

    useEffect(() => {
        const db = getFirestore();

        const items = collection(db, "categories");
        getDocs(items).then((response) => {
            setCategories(response.docs.map((category) => (
                { id: category.id, ...category.data() }
            )));
        });
    }, []);

    return (
        <CategoryContext.Provider value={{categories}}>
            {children}
        </CategoryContext.Provider>
    );
};

export default CustomCategoryContext;