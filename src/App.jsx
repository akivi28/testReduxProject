
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AlbumsPage from './AlbumsPage';
import './App.css';
import RootLayout from './router/RootLayout';
import PostsPage from './PostsPage';
import PhotosPage from './PhotosPage';

const router = createBrowserRouter([
  {
    path: "/",
    element:<RootLayout/>,
    children:[
      {path: "/posts", element:<PostsPage/>},
      {path: "/albums", element:<AlbumsPage/>},
      {path: "/photos/:albumId", element: <PhotosPage/>}
    ]
  }
])

function App() {

  return (
    <div className='app'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
