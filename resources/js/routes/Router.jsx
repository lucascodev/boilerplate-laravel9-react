import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from '../pages/';

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<p>default</p>} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<p>not found page</p>} />
        </Routes>
    )
}
