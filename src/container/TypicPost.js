import React from 'react';
import PropTypes from 'prop-types';

class TypicPost extends React.Component {
    render() {
        const { postByUser, allPost, showPostByUser, userComments, filterUser, filterBlogUser } = this.props;
        let viewPost = filterBlogUser.length>0 ? filterBlogUser: allPost;
        return(
            <div className={'user_post_container'}>
                { viewPost.map((post) => {
                    return <article key={post.id} className={'user_post'}>
                        {filterUser.map(user => {
                            if ( post['userId'] === user['id'] ) {
                                return <p className={'post_author'} key={user.id}>{user.username}</p>
                            }
                        })}
                        <h3 className={'post_title'}><p className={'post_number'}>#{post.id}</p>{post.title}</h3>
                        <p className={'post_body'}>{post.body}</p>
                        <div className={'commentary_container'}>
                        {userComments.map((com, comId) => {
                            if ( post['id'] === com['postId'] ) {
                                return <div className={'post_comment_container'} key={comId}><p className={'comment_name'}>{com.name}</p>
                                    <p className={'comment_from_email'}>{com.email}</p><p className={'comment_body'}>{com.body}</p></div>}
                        })}
                        </div>
                    </article>
                })
                }
            </div>
        )
    }
}

export default TypicPost