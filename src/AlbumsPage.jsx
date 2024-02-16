import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums } from "./redux/actions";
import { Link } from "react-router-dom";

const AlbumsPage = ()=>{
    const dispatch = useDispatch();
    const {loading, albums, error} = useSelector((state)=>state.albums);
    
    useEffect(()=>{
        dispatch(fetchAlbums());
    },[])

    return(<div className="albumsContainer">
        {loading && <h1>Loading...</h1>}
        {error && <p>error: {error}</p>}
        {!loading && !error && albums.map((album)=>(
            <div className="albumContainer" key={album.id}>
                <h2>{album.title}</h2>
                <Link to={`/photos/${album.id}`}>
                    <button>Watch the album</button>
                </Link>
            </div>
        ))}
    </div>)
}

export default AlbumsPage;