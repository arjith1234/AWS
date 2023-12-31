import React, { useState } from 'react';
import RecipeForm from './RecipeForm';
import Axios from 'axios';

function UploadRecipe() {
    const [recipeData, setRecipeData] = useState({
        description: '',
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', recipeData.image); // Upload the image as part of FormData
        formData.append('description', recipeData.description);

        Axios.post('http://localhost:4000/recipeRoute/upload-recipe', formData)
            .then((res) => {
                if (res.status === 200) {
                    alert('Recipe added successfully');
                } else {
                    return Promise.reject();
                }
            })
            .catch((err) => alert(err));
    };

    const handleFormChange = (key, value) => {
        setRecipeData((prevData) => ({
            ...prevData,
            [key]: value,
        }));
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <RecipeForm onFormChange={handleFormChange} />
        </form>
    );
}

export default UploadRecipe;

