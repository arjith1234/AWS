import React, { useEffect, useState } from 'react';
import RecipeForm from './RecipeForm'; // Create a RecipeForm component for updating recipe details.
import { useParams } from 'react-router-dom';
import Axios from 'axios';

function RateComment() {
    const { id } = useParams();
    const [recipeData, setRecipeData] = useState({
        image: null, // Assuming you want to update the image as well
        description: '',
        name: '',
        email: '',
        rating: 0,
        comments: [],
    });

    useEffect(() => {
        Axios.get(`http://localhost:4000/recipeRoute/get-recipe/${id}`)
            .then((res) => {
                if (res.status === 200) {
                    const { image, description, name, email, rating, comments } = res.data;
                    setRecipeData({
                        image,
                        description,
                        name,
                        email,
                        rating,
                        comments,
                    });
                } else {
                    Promise.reject();
                }
            })
            .catch((err) => alert(err));
    }, [id]);

    const handleFormChange = (key, value) => {
        setRecipeData((prevData) => ({
            ...prevData,
            [key]: value,
        }));
    };

    const handleRateCommentSubmit = () => {
        // Update the rating and comments for the recipe
        const data = {
            rating: recipeData.rating,
            comments: recipeData.comments,
        };

        Axios.put(`http://localhost:4000/recipeRoute/rate-comment/${id}`, data)
            .then((res) => {
                if (res.status === 200) {
                    alert('Rating and comments submitted successfully');
                } else {
                    return Promise.reject();
                }
            })
            .catch((err) => alert(err));
    };

    return (
        <form onSubmit={handleRateCommentSubmit}>
            <RecipeForm
                onFormChange={handleFormChange}
                imageValue={recipeData.image}
                descriptionValue={recipeData.description}
            />
            <div className="text-center" style={{ maxWidth: "40%", margin: "0px auto" }}>
                <input
                    value={recipeData.name}
                    onChange={(e) => handleFormChange('name', e.target.value)}
                    className="form-control my-3"
                    type="text"
                    placeholder="Your Name"
                />
                <input
                    value={recipeData.email}
                    onChange={(e) => handleFormChange('email', e.target.value)}
                    className="form-control my-3"
                    type="email"
                    placeholder="Your Email"
                />
                <input
                    value={recipeData.rating}
                    onChange={(e) => handleFormChange('rating', e.target.value)}
                    className="form-control my-3"
                    type="number"
                    placeholder="Rate (0-5)"
                />
                <textarea
                    value={recipeData.comments}
                    onChange={(e) => handleFormChange('comments', e.target.value)}
                    className="form-control my-3"
                    placeholder="Comments"
                    rows="3"
                />
                <button className="btn btn-success d-block mx-auto" type="submit">
                    Submit Rating and Comments
                </button>
            </div>
        </form>
    );
}

export default RateComment;
