const photo = "https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg";

export const UserDiscover = () => {
    return (
        <div className="userdiscover-container">
            <img className="userdiscover-container_img" src={ photo } />
            <p className="userdiscover-container_username">chikicazenave_</p>
            <button className="userdiscover-container_button">Seguir</button>
        </div>
    )
}
