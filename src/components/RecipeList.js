import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import RecipeCard from './RecipeCard'; // Create a RecipeCard component to display individual recipes.
import { Link } from 'react-router-dom';

function RecipeList() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:4000/recipeRoute/')
            .then((res) => {
                if (res.status === 200) {
                    setRecipes(res.data);
                } else {
                    return Promise.reject();
                }
            })
            .catch((err) => alert(err));
    }, []);

    const renderRecipes = () => {
        return recipes.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
        ));
    };

    return (
        <div className="container mt-4">
            <div className="row">
                {renderRecipes()}
            </div>
        </div>
    );
}

export default RecipeList;
