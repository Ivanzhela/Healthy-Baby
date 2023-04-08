import style from './RecipeDetailsVideo.module.css';

export const RecipeDetailsVideo = ({ video }) => {

    const embedId = video.split('=').pop();
    return (
        <div className={style["video-responsive"]}>
            <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    );
};