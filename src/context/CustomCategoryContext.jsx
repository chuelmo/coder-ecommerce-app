import React, { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import CategoryContext from "./CategoryContext";

const CustomCategoryContext = ({ children }) => {
    const [categories, setCategories] = useState([{ id: 999, name: 'None' }]);
    const KEY_CODER_CATEGORIES = "KEY_CODER_CATEGORIES";

    useEffect(() => {
        const itemsLS = JSON.parse(localStorage.getItem(KEY_CODER_CATEGORIES));
        if (itemsLS) {
            setCategories(itemsLS);
        } else {
            const db = getFirestore();

            const items = collection(db, "categories");
            getDocs(items).then((response) => {
                setCategories(response.docs.map((category) => (
                    { ...category.data(), id: category.id }
                )));
                const categoryDocs = response.docs.map((category) => (
                    { ...category.data(), id: category.id }
                ));
                localStorage.setItem(KEY_CODER_CATEGORIES, JSON.stringify(categoryDocs));
            });
        }
    }, []);

    return (
        <CategoryContext.Provider value={{categories}}>
            {children}
        </CategoryContext.Provider>
    );
};

export default CustomCategoryContext;