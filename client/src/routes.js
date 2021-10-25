import Main from "./pages/Main";
import UsersList from "./pages/UsersList";
import User from "./pages/User";
import PostsList from "./pages/PostsList";
import Post from "./pages/Post";
import About from "./pages/About";
import Auth from "./pages/Auth";

export const  allRoutes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/users',
        component: UsersList
    },
    {
        path: '/users/:id',
        component: User
    },
    {
        path: '/posts',
        component: PostsList
    },
    {
        path: '/posts/:id',
        component: Post
    },
    {
        path: '/auth',
        component: Auth
    },
    {
        path: '/registration',
        component: Auth
    },
    {
        path: '/login',
        component: Auth
    },
]

export const privateRoutes = [
    {
        path: '/about',
        component: About
    }
]