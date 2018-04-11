import React from 'react';
import PropTypes from 'prop-types';

const TypicPostComment = (props) =>
     {props.userComments.map((com, comId) => {
        if ( props.post['id'] === com['postId'] ) {
            return <div className={'post_comment_container'} key={comId}><p className={'comment_name'}>{com.name}</p>
                <p className={'comment_from_email'}>{com.email}</p><p className={'comment_body'}>{com.body}</p></div>}
    })}

export default TypicPostComment