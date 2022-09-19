const url = "https://media.cdn.eldestapeweb.com/eldestape/092022/1663255043093/federer-boca-riquelme-jpg..webp?cw=1280&ch=720&extw=jpg";


export const UserFeaturedStory = () => {
    return (
        <div className="userfeaturedstory-container">
            <img className="userfeaturedstory-container_img" src={ url } />
            <p className="userfeaturedstory-container_name">V. Gesell 2022</p>
        </div>
    )
}
