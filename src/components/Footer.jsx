import { Link as RouterLink } from 'react-router-dom';

export const Footer = () => {

    const username = "chikicazenave_";

    return (
        <div className="footer-container">
            <RouterLink to="/" className="footer-container_buttons"><i className="fas fa-home"></i></RouterLink>
            <button className="footer-container_buttons"><i className="fas fa-search"></i></button>
            <button className="footer-container_buttons"><i className="fab fa-youtube"></i></button>
            <button className="footer-container_buttons"><i className="fas fa-shopping-bag"></i></button>
            <RouterLink to={`/${username}`} className="footer-container_buttons"><i className="far fa-user-circle"></i></RouterLink>
        </div>
    )
}