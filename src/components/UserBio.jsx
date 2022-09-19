export const UserBio = () => {
    return (
        <div className="userbio-container">
            <h1 className="userbio-container_name">ENZO CAZENAVE</h1>

            <p>
                <span className="userbio-container_tag">@guemeshockeycaballeros</span>
                <br/>
                📍 Quilmes, Buenos Aires.
            </p>

            <div className="userbio-container_buttons">
                <button className="userbio-container_buttons--edit">Editar perfil</button>
                <button className="userbio-container_buttons--add"><i className="fas fa-user-plus"></i></button>
            </div>
        </div>
    )
}
