const photo = "https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg";

export const UserInfo = () => {
    return (
        <div className="userinfo-container">
            <img className="userinfo-container_img" src={ photo } />

            <div className="userinfo-container_stats">
                <div className="userinfo-container_stats--stat">
                    <b>73</b>
                    <p>Publicaciones</p>    
                </div>   
                <div className="userinfo-container_stats--stat">
                    <b>1.152</b>
                    <p>Seguidores</p>    
                </div>    
                <div className="userinfo-container_stats--stat">
                    <b>901</b>
                    <p>Seguidos</p>    
                </div>   
            </div>
        </div>
    )
}
