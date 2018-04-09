import React from 'react';
import PropTypes from 'prop-types';

class TypicPost extends React.Component {
    render() {
        const { post } = this.props;
        return(
            <div className={'user_post_container'}>
                { post.map((obj, idx) => {
                    return <article key={obj.id} className={'user_post'}>
                        <h3 className={'post_title'}><p className={'post_number'}>#{obj.id}</p>{obj.title}</h3>
                        <p className={'post_body'}>{obj.body}</p>
                    </article>
                })
                }
            </div>
        )
    }
}

export default TypicPost