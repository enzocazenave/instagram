const photo = "https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg";

export const Story = () => {
    return (
        <div className="story-container">
            <img className="story-container_img" src={ photo } />
            <p className="story-container_username">chikicazenave_</p>
        </div>
    )
}
