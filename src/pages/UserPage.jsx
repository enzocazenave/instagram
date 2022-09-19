import { Footer, Navbar, UserBio, UserDiscovers, UserInfo } from "../components"

export const UserPage = () => {
    return (
        <div className="main-container">
            <Navbar />
            <UserInfo />
            <UserBio />
            <UserDiscovers />
            <Footer />
        </div>
    )
}
