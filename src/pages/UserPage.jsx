import { Footer, Navbar, UserBio, UserInfo } from "../components"

export const UserPage = () => {
    return (
        <div className="main-container">
            <Navbar />
            <UserInfo />
            <UserBio />
            <Footer />
        </div>
    )
}
