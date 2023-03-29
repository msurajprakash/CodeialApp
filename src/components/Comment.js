import PropTypes from 'prop-types';

import styles from '../styles/home.module.css';

const Comment = ({ comment }) => {
    return (
        <div className={styles.postCommentItem}>
            <div className={styles.postCommentHeader}>
                <span className={styles.postCommentAuthor}>{comment.user.name}</span>
                <span className={styles.postCommentTime}>a minute ago</span>
                <span className={styles.postCommentLikes}>22</span>
            </div>

            <div className="post-comment-content">{comment.content}</div>
        </div>
    );
};

Comment.propTypo = {
    comment: PropTypes.object.isRequired
}

export default Comment;