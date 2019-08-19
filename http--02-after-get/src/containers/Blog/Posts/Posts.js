import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    state = {
        posts: [],
    }

    componentDidMount() {
        //console.log(this.props);
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({ posts: updatedPosts });
                // console.log( response );
            })
            .catch((error) => {
                console.log(error);
                //this.setState({error: true});
            })
    }

    postSelectedHandler = (id) => {
        //console.log('clicked11');
        this.props.history.push({ pathname: '/posts/' + id });

    }
    render() {
        let posts = <p>Something went wrong!</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    //<NavLink className="NavLink" to={'/posts/' + post.id} key={post.id}>
                    <Post
                        key={post.id}
                        className="Post"
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)} />
                    //</NavLink>

                )

            });
        }

        return (
            <>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </>
        )
    }
}

export default Posts;
