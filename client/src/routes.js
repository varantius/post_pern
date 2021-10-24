import Main from "./pages/Main";
import UsersList from "./pages/UsersList";
import User from "./pages/User";
import PostsList from "./pages/PostsList";
import Post from "./pages/Post";

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
]