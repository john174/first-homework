// Import necessary components and hooks
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography } from '@mui/material';
import './App.css';
import GalleryHw from './Components/GalleryHw';
import ApiHw from './Components/ApiHw';
import Layout from './Components/Layout';
import Page404 from './Pages/Page404';
import Shop from './Pages/Shop';
import Query from './Pages/Query';
import Games from './Components/Games';

function App() {
  return (
    <Router>
      <AppBar position="static" className="bg-warning">
        <Toolbar className="toolbar">
          {/* Navigation Links */}
          <Typography variant="h6"><Link to="/" className="nav-link">Home</Link></Typography>
          <Typography variant="h6"><Link to="/gallery" className="nav-link">Gallery</Link></Typography>
          <Typography variant="h6"><Link to="/vip" className="nav-link">VIP</Link></Typography>
          <Typography variant="h6"><Link to="/shop/food" className="nav-link">Shop</Link></Typography>
          <Typography variant="h6"><Link to="/games" className="nav-link">Games</Link></Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/gallery" element={<GalleryHw />} />
          <Route path="/vip" element={<ApiHw />} />
          <Route path="/shop/:catname" element={<Shop />} />
          <Route path="/query" element={<Query />} />
          <Route path="/games" element={<Games />} /> 
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
