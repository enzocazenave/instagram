const photo = "https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg";
const publication_img = "https://media.cdn.eldestapeweb.com/eldestape/092022/1663255043093/federer-boca-riquelme-jpg..webp?cw=1280&ch=720&extw=jpg";

export const Publication = () => {
    return (
        <div className="publication-container">
            <div className="publication-container_profile">
                <img className="publication-container_profile__img" src={ photo } />
                <p className="publication-container_profile__username">chikicazenave_</p>
            </div>

            <img className="publication-container_image" src={ publication_img } />

            <div className="publication-container_controls">
                <div>
                    <button className="publication-container_controls__button"><i className="far fa-heart"></i></button>
                    <button className="publication-container_controls__button"><i className="far fa-comment"></i></button>
                    <button className="publication-container_controls__button"><i className="fa fa-paper-plane"></i></button>
                </div>
                <button className="publication-container_controls__button"><i className="far fa-bookmark"></i></button>
            </div>

            <div className="publication-container_interactions">
                <p className="publication-container_interactions__likes">Les gusta a <b>boriscazenave</b> y <b>215 más</b></p>
                <p className="publication-container_interactions__title"><b>chikicazenave_</b>&nbsp;&nbsp;Grandes personas.</p>
                <p className="publication-container_interactions__date">Hace 2 días</p>
            </div>
        </div>
    )
}
