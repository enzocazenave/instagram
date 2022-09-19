import { UserDiscover } from "./UserDiscover"

export const UserDiscovers = () => {
    return (
        <div className="userdiscovers-container">  
            <div className="userdiscovers-container_title">
                <p>Descubrir personas</p>
                <a href="#">Ver todo</a>
            </div>
            <div className="userdiscovers-container_discovers">
                <UserDiscover />
                <UserDiscover />
                <UserDiscover />
                <UserDiscover />
                <UserDiscover />
                <UserDiscover />
            </div>
        </div>
    )
}
