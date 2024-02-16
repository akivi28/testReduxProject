import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    FETCH_COMMENTS_REQUEST,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_FAILURE,
    FETCH_ALBUMS_REQUEST,
    FETCH_ALBUMS_SUCCESS,
    FETCH_ALBUMS_FAILURE,
    FETCH_PHOTOS_REQUEST,
    FETCH_PHOTOS_SUCCESS,
    FETCH_PHOTOS_FAILURE,
} from "./types";

import { combineReducers } from "redux";

const initialPostsState = {
    loading: false,
    posts: [],
    error: "",
};

const initialCommentsState = {
    loading: false,
    comments: [],
    error: ""
};

const initialAlbumsState = {
    loading: false,
    albums:[],
    error:''
};

const initialPhotosState = {
    loading: false,
    photos: [],
    error: ""
}

const postsReducer = (state = initialPostsState, action) => {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_POSTS_SUCCESS:
            return {
                loading: false,
                posts: action.payload,
                error: "",
            };
        case FETCH_POSTS_FAILURE:
            return {
                loading: false,
                posts: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

const commentsReducer = (state = initialCommentsState, action) => {
    switch (action.type) {
        case FETCH_COMMENTS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_COMMENTS_SUCCESS:
            return {
                loading: false,
                comments: action.payload,
                error: '',
            };
        case FETCH_COMMENTS_FAILURE:
            return {
                loading: false,
                comments: [],
                error: action.error,
            };
        default:
            return state;
    }
};

const albumsReducer = (state = initialAlbumsState, action) =>{
    switch(action.type){
        case FETCH_ALBUMS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_ALBUMS_SUCCESS:
            return{
                loading: false,
                albums: action.payload,
                error: ''
            }
        case FETCH_ALBUMS_FAILURE:
            return{
                loading:false,
                albums:[],
                error: action.payload
            }
        default: 
            return state;
    }
};

const photosReducer = (state = initialPhotosState, action)=>{
    switch(action.type){
        case FETCH_PHOTOS_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FETCH_PHOTOS_SUCCESS:
            return{
                loading: false,
                photos: action.payload,
                error: ''
            }
        case FETCH_PHOTOS_FAILURE:
            return{
                loading: false,
                photos: [],
                error: action.payload
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    posts: postsReducer,
    comments: commentsReducer,
    albums: albumsReducer,
    photos: photosReducer
});

export default rootReducer;
