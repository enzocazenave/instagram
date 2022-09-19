import { UserPublication } from "./";

export const UserPublications = () => {
    return (
        <div className="userpublications-container">
            <div className="userpublications-container_title">
                <i className="fas fa-table"></i>
            </div>
            <div>
                <UserPublication />
                <UserPublication />
                <UserPublication />
                <UserPublication />
                <UserPublication />
                <UserPublication />
                <UserPublication />
                <UserPublication />
            </div>
        </div>
    )
}
