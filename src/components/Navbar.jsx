import { useParams } from "react-router-dom";

export const Navbar = ({ page }) => {
    const { username } = useParams();
    return (
        <nav className="main-nav">
            <h2 className="main-nav_title">{ (page == 'user') ? username : 'Instagram' }</h2>
            <div>
                {
                    (page == 'home') &&
                        <>
                            <button className="main-nav_button"><i className="far fa-plus-square"></i></button>
                            <button className="main-nav_button"><i className="far fa-heart"></i></button>
                            <button className="main-nav_button"><i className="fab fa-facebook-messenger"></i></button>
                        </>
                }
                {
                    (page == 'user') &&
                        <>
                            <button className="main-nav_button"><i className="far fa-plus-square"></i></button>
                            <button className="main-nav_button"><i className="fas fa-bars"></i></button>
                        </>
                }
            </div>
        </nav>
    )
}
