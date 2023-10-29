import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch,Routes } from 'react-router-dom';
import Nav from './components/Nav';
import UploadRecipe from './components/UploadRecipe'; // Change component import
import RecipeList from './components/RecipeList'; // Change component import
import RateComment from './components/RateComment'; // Add RateComment import

function App() {
    return (
        <div className='container'>
            <Router>
                <Nav />
                <Routes>
                    <Route path='/' exact component={UploadRecipe} />
                    <Route path='/upload-recipe' element={<UploadRecipe />} />
                    <Route path='/recipe-list' element={<RecipeList />} />
                    <Route path='/rate-comment/:id' element={<RateComment />} />{/* Add Route for RateComment */}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
