import { Navbar, Stories, Publications, Footer } from "./components/"

export const App = () => {
    return (
        <div className="main-container">
            <Navbar />
            <Stories />
            <Publications />
            <Footer />
        </div>
    )
}

