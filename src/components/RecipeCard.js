import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function RecipeCard(props) {
    const { _id, image, description } = props.recipe; // Object destructuring for recipe data

    const handleDelete = () => {
        Axios.delete(`http://localhost:4000/recipeRoute/delete-recipe/${_id}`)
            .then((res) => {
                if (res.status === 200) {
                    alert('Recipe deleted successfully');
                    window.location.reload(); // Reloading the page after deletion (you can use a more efficient way, such as updating the state)
                } else {
                    return Promise.reject();
                }
            })
            .catch((err) => alert(err));
    };

    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src={`data:${image.contentType};base64,${Buffer.from(image.data).toString('base64')}`} className="card-img-top" alt="Recipe" />
                <div className="card-body">
                    <h5 className="card-title">Recipe Description</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-success mx-2">
                        <Link className="text-decoration-none text-light" to={`/rate-comment/${_id}`}>Rate and Comment</Link>
                    </button>
                    <button onClick={handleDelete} className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;
