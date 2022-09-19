import { Navbar, Stories, Publications, Footer } from "../components/"

export const HomePage = () => {
    return (
        <div className="main-container">
            <Navbar page={"home"} />
            <Stories />
            <Publications />
            <Footer />
        </div>
    )
}
