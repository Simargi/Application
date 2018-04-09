import React from 'react';
import PropTypes from 'prop-types';

class TypicPost extends React.Component {
    render() {
        const { postByUser, allPost, showPostByUser } = this.props;
        return(
            <div className={'user_post_container'}>
                { showPostByUser && postByUser.map((post, idx) => {
                    return <article key={post.id} className={'user_post'}>
                        <h3 className={'post_title'}><p className={'post_number'}>#{post.id}</p>{post.title}</h3>
                        <p className={'post_body'}>{post.body}</p>
                    </article>
                })
                }
                { !showPostByUser && allPost.map((post, id) => {
                    return <article key={id} className={'user_post'}>
                        <h3 className={'post_title'}><p className={'post_number'}>#{post.id}</p>{post.title}</h3>
                        <p className={'post_body'}>{post.body}</p>
                    </article>
                })
                }
            </div>
        )
    }
}

export default TypicPost