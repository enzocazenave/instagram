import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage, UserPage } from '../pages/';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/:username" element={ <UserPage /> } />
        </Routes>
    )
}
