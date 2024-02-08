import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link }from 'react-router-dom';

import './styles/style.scss';
import ColorsTypes from './pages/UI Kit/colorsTypes/colorsTypes';
import FormElements from './pages/UI Kit/formElements/formElements';
import HeadersFooters from './pages/UI Kit/headersFooters/headersFooters';
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
            <Route path="/" element={<ColorsTypes />} />
            <Route path="/formElements" element={<FormElements />} />
            <Route path="/headfoot" element={<HeadersFooters />} />
            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    </Router>
);