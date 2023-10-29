import React, { useState } from 'react';

function RecipeForm(props) {
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState('');

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleClick = () => {
        // Pass the image and description data to the parent component (UploadRecipe)
        props.onFormChange('image', image);
        props.onFormChange('description', description);
    };

    return (
        <div className="text-center" style={{ maxWidth: "40%", margin: "0px auto" }}>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="form-control my-3"
                placeholder="Upload Image"
            />
            <textarea
                value={description}
                onChange={handleDescriptionChange}
                className="form-control my-3"
                placeholder="Enter Recipe Description"
                rows="3"
            />
            <button onClick={handleClick} className="btn btn-success d-block mx-auto" type="submit">
                Submit
            </button>
        </div>
    );
}

export default RecipeForm;
