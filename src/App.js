import { Box } from '@mui/material';
import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignInSide, Home } from './Pages';
import { Header } from './components/Header/Header';

export default function App() {

  return (
    <Box sx={{ display: 'flex', background: "#E4F5EB" }}>

      <BrowserRouter>
        < Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignInSide />} />

        </ Routes>

      </BrowserRouter>


    </Box>
  );
}
