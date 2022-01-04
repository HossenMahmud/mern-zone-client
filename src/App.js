import { Route, Routes } from 'react-router-dom';
import AdminRoute from './AdminRoute/AdminRoute';
import './App.css';
import AuthProvider from './context/AuthProvider';
import BlogDetails from './Pages/BlogDetails/BlogDetails';
import CreatePost from './Pages/CreatePost/CreatePost';
import AllPosts from './Pages/Dashboard/AllPosts/AllPosts';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import MyPosts from './Pages/Dashboard/MyPosts/MyPosts';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NotFound />} />

          <Route path="blog/:id" element={<BlogDetails />} />

          <Route path="create-post" element={< PrivateRoute >
            <CreatePost />
          </PrivateRoute>} >
          </Route>

          <Route path="blog/:id/create-post" element={< PrivateRoute >
            <CreatePost />
          </PrivateRoute>} >
          </Route>


          <Route path='dashboard' element={<PrivateRoute>
            <Dashboard />
          </PrivateRoute>}>

            <Route path='make-admin' element={<AdminRoute>
              <MakeAdmin />
            </AdminRoute>}> </Route>
            <Route path='all-post' element={<AdminRoute>
              <AllPosts />
            </AdminRoute>}> </Route>
            <Route path='my-posts' element={<MyPosts />}> </Route>

          </Route>



        </Routes>
      </AuthProvider >

    </div >
  );
}

export default App;
