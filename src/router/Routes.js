import About from "../pages/About";
import CounterPage from "../pages/CounterPage";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const routes = [
{path: '/about', component: About, exact: true},
{path: '/posts', component: Posts, exact: true},
{path: '/posts/:id', component: PostIdPage, exact: true},
{path: '/counter', component: CounterPage, exact:true},
]