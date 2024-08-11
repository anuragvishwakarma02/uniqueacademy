import * as React from 'react';
import Home from './screens/home/homescreen';
import ManagerScreen from './screens/manager/ManagerScreen';
import VisionScreen from './screens/vision/VisionScreen';
import GalleryScreen from './screens/gallery/GalleryScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/Header';
import Footer from './component/Footer';
import AboutScreen from './screens/about/AboutScreen';
import EventScreen from './screens/events/EventScreen';
import ContactScreen from './screens/contact/ContactScreen';

export default function App() {
  return (
  <BrowserRouter>
    <Header/>
    <Routes>
        <Route exact path="" element={<Home/> }/>
        <Route path="/managers" element={<ManagerScreen/> }/>
        <Route path="/vision" element={<VisionScreen/> }/>
        <Route path="/gallery" element={<GalleryScreen/> }/>
        <Route path="/contact" element={<ContactScreen/> }/>
        <Route path="/about" element={<AboutScreen/> }/>
        <Route path="/events" element={<EventScreen/> }/>
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}