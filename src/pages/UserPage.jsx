import { Footer, Navbar, UserBio, UserDiscovers, UserInfo } from "../components"

export const UserPage = () => {
    return (
        <div className="main-container">
            <Navbar page={"user"} />
            <UserInfo />
            <UserBio />
            <UserDiscovers />
            <Footer />
        </div>
    )
}
