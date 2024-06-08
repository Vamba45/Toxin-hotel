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
import 'dayjs/locale/ru';
import HostelsPage from './pages/WebsitePages/HotelsPage/HotelsPage';
import RoomPage from './pages/WebsitePages/RoomPage/RoomPage';

import img1 from './assets/img/room/a.png';
import img2 from './assets/img/room/b.png';
import img3 from './assets/img/room/c.png';

import adv1 from './assets/img/icons/smile.svg';
import adv2 from './assets/img/icons/city.svg';
import adv3 from './assets/img/icons/fire.svg';

import ava1 from './assets/img/avatar/man.png';
import ava2 from './assets/img/avatar/woman.jpg';

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
                <Route path='colorstypes' element={<ColorsTypes />} />
                <Route path="formElements" element={<FormElements />} />
                <Route path="headfoot" element={<HeadersFooters />} />
                <Route path="cards" element={<Cards />} />
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Landing />} />
                    <Route path='/registration' element={<Regpage />} />
                    <Route path='/login' element={<Loginpage />} />
                    <Route path='/hotels' element={<HostelsPage />} />
                    <Route path='/room'  element={<RoomPage images={[img2, img1, img3]} 
                                                    diagram={{reviewCount: 260, categoryPercentage: [25, 25, 50]}}
                                                    checkBoxList={{type: "bullet", options: [{name: "Нельзя с питомцами"}, {name: "Без вечеринок и мероприятий"}, {name: "Время прибытия - после 13:00, а выезд до 12:00"}], title: "Правила"}}
                                                    comments={[{avatar: ava1, lastvisit: "5 дней назад", likes: 12, text: "Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.", username: "Мурад Сарафанов"},
                                                        {avatar: ava2, lastvisit: "Неделю назад", likes: 2, text: "Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент", username: "Патрисия Стёклышкова"}
                                                    ]}
                                                    advantages={[{img: adv1, text: "Шумопоглощающие стены", title: "Комфорт"}, {img: adv2, text: "Окно в каждой из спален", title: "Удобство"}, {img: adv3, text: "Номер оснащён камином", title: "Уют"}]}
                                                                    bookRoom={{number: 888, 
                                                                    dayEnd: new Date(), 
                                                                    dayStart: new Date(), 
                                                                    isLuxe: true,
                                                                    price: 5000,
                                                                    serviceMoney: 150,
                                                                    advancedServiceMoney: 250,
                                                                    dropdownValue: [{name: "Взросыле", count: 15}, {name: "Дети"}, {name: "Младенцы"}]}}/>} />
                </Route>
            </Routes>
        </Router>
    </Provider>
);