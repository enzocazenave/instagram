import { Footer, Navbar, UserBio, UserDiscovers, UserFeaturedStories, UserInfo, UserPublications } from "../components"

export const UserPage = () => {
    return (
        <div className="main-container">
            <Navbar page={"user"} />
            <UserInfo />
            <UserBio />
            <UserDiscovers />
            <UserFeaturedStories />
            <UserPublications />
            <Footer />
        </div>
    )
}
