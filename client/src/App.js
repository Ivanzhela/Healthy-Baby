import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { PublicGuard } from './guards/PublicGuard';
import { PrivateGuard } from './guards/PrivateGuard';

import { Home } from "./components/Home/Home";
import { Login } from './components/AuthAction/Login';
import { Register } from './components/AuthAction/Register';
import { Edit } from './components/AuthAction/Edit';
import { Logout } from './components/AuthAction/logout/Logout';
import { RecipeList } from './components/RecipeList/RecipeList';
import { RecipeAction } from './components/RecipeAction/RecipeAction';
import { RecipeDetails } from './components/RecipeDetails/RecipeDetails';
import { Background } from "./components/shared/Background/Background";
import { Header } from "./components/shared/Header/Header";
import { Footer } from "./components/shared/Footer/Footer";
import { NotFound } from './components/NotFound/NotFound';
import './App.css';

function App() {
    return (
        <AuthProvider>
            <Header />
            <main>
                <Background />
                <Routes>
                    <Route element={<PublicGuard />}>
                        <Route path='/register' element={<Register />} />
                        <Route path='/login' element={<Login />} />
                    </Route>

                    <Route element={<PrivateGuard />} >
                        <Route path='/create' element={<RecipeAction />} />
                        <Route path='/profile/:userId/edit' element={<Edit/>} />
                        <Route path='/edit/:recipeId' element={<RecipeAction isEdit={true} />} />
                        <Route path='/logout' element={<Logout />} />
                    </Route>
                    
                    <Route path='/' element={<Home />} />
                    <Route path='/catalog' element={<RecipeList />} />
                    <Route path='/details/:recipeId' element={<RecipeDetails />} />
                    <Route path='/profile/:userId' element={<RecipeList isProfile={true} />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </AuthProvider>
    );
};

export default App;
