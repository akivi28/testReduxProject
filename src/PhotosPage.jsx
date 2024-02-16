import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPhotos } from "./redux/actions";


const PhotosPage = ()=>{
    const {albumId} = useParams();
    const dispatch = useDispatch();
    const { loading, photos, error } = useSelector((state) => state.photos);

    useEffect(()=>{
        dispatch(fetchPhotos(albumId))
    },[albumId])

    return(<div className="photosContainer">
        {loading && <h1>Loading...</h1>}
        {error && <p>error: {error}</p>}
        {!loading && !error && photos.map((photo)=>(
            <div className="photoContainer" key={photo.id}>
                <img src={photo.url}/>
                <p>{photo.title}</p>
            </div>
        ))}
    </div>)

}
export default PhotosPage;