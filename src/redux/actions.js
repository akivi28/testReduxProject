import {
    FETCH_ALBUMS_FAILURE,
    FETCH_ALBUMS_REQUEST,
    FETCH_ALBUMS_SUCCESS,
    FETCH_COMMENTS_FAILURE,
    FETCH_COMMENTS_REQUEST,
    FETCH_COMMENTS_SUCCESS,
    FETCH_PHOTOS_FAILURE,
    FETCH_PHOTOS_REQUEST,
    FETCH_PHOTOS_SUCCESS,
    FETCH_POSTS_FAILURE,
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
} from "./types";


import axios from "axios";

const fetchPostsRequest = () => ({
    type: FETCH_POSTS_REQUEST,
});

const fetchPostsSuccess = (posts) => ({
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
});

const fetchPostsFailure = (error) => ({
    type: FETCH_POSTS_FAILURE,
    payload: error,
});

export const fetchPosts = () => {
    return (dispatch) => {
        dispatch(fetchPostsRequest());
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                const posts = response.data;
                dispatch(fetchPostsSuccess(posts));
            })
            .catch((error) => {
                dispatch(fetchPostsFailure(error.message));
            });
    };
};

const fetchCommentsRequest = ()=>({
    type: FETCH_COMMENTS_REQUEST
})

const fetchCommentsSucces = (commenst)=>({
    type: FETCH_COMMENTS_SUCCESS,
    payload: commenst
})

const fetchCommentsFailure = (error)=>({
    type: FETCH_COMMENTS_FAILURE,
    payload: commenst
})


export const fetchComments = () => {
    return (dispatch) => {
        dispatch(fetchCommentsRequest());
        axios
            .get(`https://jsonplaceholder.typicode.com/comments`)
            .then((response) => {
                const comments = response.data;
                dispatch(fetchCommentsSucces(comments));
            })
            .catch((error) => {
                dispatch(fetchCommentsFailure(error.message));
            });
    };
};

const fetchAlbumsRequest = () =>({
    type: FETCH_ALBUMS_REQUEST
})

const fetchAlbumsSucces=(albums)=>({
    type: FETCH_ALBUMS_SUCCESS,
    payload: albums
})

const fetchAlbumsFailure=(error)=>({
    type: FETCH_ALBUMS_FAILURE,
    payload: error
})

export const fetchAlbums = ()=>{
    return(dispatch)=>{
        dispatch(fetchAlbumsRequest());
        axios.get('https://jsonplaceholder.typicode.com/albums')
        .then((response)=>{
            const commenst = response.data;
            dispatch(fetchAlbumsSucces(commenst))
        })
        .catch((error)=>{
            dispatch(fetchAlbumsFailure(error.message))
        })
    }
}

const fetchPhotosRequest = () =>({
    type: FETCH_PHOTOS_REQUEST
}) 

const fetchPhotosSuccess = (photos) =>({
    type: FETCH_PHOTOS_SUCCESS,
    payload: photos
})

const fetchPhotosFailure = (error)=>({
    type: FETCH_PHOTOS_FAILURE,
    payload: error
})

export const fetchPhotos=(albumId)=>{
    return(dispatch)=>{
        dispatch(fetchPhotosRequest());
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        .then((response)=>{
            const photos = response.data;
            dispatch(fetchPhotosSuccess(photos));
        })
        .catch((error)=>{
            dispatch(fetchPhotosFailure(error));
        })
    }
}