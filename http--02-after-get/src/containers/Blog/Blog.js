import React, { Component, Suspense } from 'react';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';

//import axios from 'axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './Blog.css';
import asyncComponent from '../../hoc/asyncComponent';

// const AsyncNewPost = asyncComponent(() => {
//     return import('./NewPost/NewPost');
// }) 

const NewPost = React.lazy(() => import('./NewPost/NewPost'));

class Blog extends Component {

    render() {
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/" exact>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home2</h1>} /> */}
                <Switch>
                    {/* <Route path="/new-post" component={AsyncNewPost} /> */}
                    <Route path="/new-post" render={
                        ()=><Suspense fallback={<div>Loading</div>}><NewPost/></Suspense>}/>
                    <Route path="/posts" component={Posts} />
                    <Route render={() => <h1>Not Found</h1>} />
                    {/* <Redirect from="/" to="/posts"/> */}

                    {/* <Route path="/" component={Posts} /> */}
                </Switch>


            </div>
        );
    }
}

export default Blog;