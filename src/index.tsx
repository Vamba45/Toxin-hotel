import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link}from 'react-router-dom';

import './styles/style.scss';
import ColorsTypes from './pages/UI Kit/colorsTypes/colorsTypes';
import FormElements from './pages/UI Kit/formElements/formElements';
import HeadersFooters from './pages/UI Kit/headersFooters/headersFooters';
import Cards from './pages/UI Kit/cards/cards';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Layout from './components/layout/layout';
import Landing from './pages/WebsitePages/Landing/Landing';
import Registration from './pages/WebsitePages/Regpage/Regpage';
import Regpage from './pages/WebsitePages/Regpage/Regpage';
import Loginpage from './pages/WebsitePages/Loginage/Loginpage';
//import { Provider } from 'react-redux';
//import  {setupStore} from './store/store';

//const store = setupStore();

const rootNode: HTMLElement | any = document.getElementById("app");    // элемент для рендеринга приложения React
// получаем корневой элемент 
const root = ReactDOM.createRoot(rootNode);
// рендеринг в корневой элемент
root.render(
    <Router>
        <Routes>
            <Route path='/components'>
                <Route path='colorstypes' element={<ColorsTypes />} />
                <Route path="formElements" element={<FormElements />} />
                <Route path="headfoot" element={<HeadersFooters />} />
                <Route path="cards" element={<Cards />} />
            </Route>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Landing />} />
                <Route path='/registration' element={<Regpage />} />
                <Route path='/login' element={<Loginpage />} />
            </Route>
        </Routes>
    </Router>
);