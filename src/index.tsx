import React from 'react';
import ReactDOM from 'react-dom/client';


import Heading from './components/Heading.jsx'; 
import Footer from './components/Footer'; 
import { BrowserRouter as Router, Route, Routes, Link }from 'react-router-dom';

import './styles/style.scss';
import { Provider } from 'react-redux';
import  {setupStore} from './store/store';

const store = setupStore();

const rootNode: HTMLElement | any = document.getElementById("app");    // элемент для рендеринга приложения React
// получаем корневой элемент 
const root = ReactDOM.createRoot(rootNode);
// рендеринг в корневой элемент
root.render(
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path='/' element={
                    <Heading/>
                } />
                <Route path='/footer' element={<Footer/>}/>
            </Routes>
        </Router>
    </Provider>
);