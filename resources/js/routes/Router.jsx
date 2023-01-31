import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

export const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<p>default</p>} />
                <Route path="/login" element={<p>login default</p>} />
                <Route path="/*" element={<p>not found page</p>} />
            </Routes>
        </div>
    )
}
