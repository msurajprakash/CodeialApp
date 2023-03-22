import styles from '../styles/home.module.css';

const Home = () => {
    return (
        <div className={styles.postList}>
            <div className={styles.postWrapper}>
                <div className={styles.postHeader}>
                    <div className={styles.postAvatar}>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                            alt="user-pic"
                        />
                        <div>
                            <span className={styles.postAutho}>Suraj</span>
                            <span className={styles.postTime}>a minute ago</span>
                        </div>
                    </div>
                    <div className={styles.postContent}>Post Content</div>

                    <div className={styles.postActions}>
                        <div className={styles.postLike}>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/739/739231.png"
                                alt="likes-icon"
                            />
                            <span>5</span>
                        </div>

                        <div className={styles.postCommentsIcon}>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/1380/1380338.png"
                                alt="comments-icon"
                            />
                            <span>2</span>
                        </div>
                    </div>
                    <div className={styles.postCommentBox}>
                        <input placeholder="Start typing a comment" />
                    </div>

                    <div className={styles.postCommentsList}>
                        <div className={styles.postCommentItem}>
                            <div className={styles.postCommentHeader}>
                                <span className={styles.postCommentAuthor}>Bill</span>
                                <span className={styles.postCommentTime}>a minute ago</span>
                                <span className={styles.postCommentLikes}>22</span>
                            </div>

                            <div className="post-comment-content">Random comment</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;