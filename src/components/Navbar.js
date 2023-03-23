import styles from '../styles/navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.leftDiv}>
                <a href='/'>
                    <img src='https://cdn-icons-png.flaticon.com/512/7448/7448194.png' style={{ width: 50 }} alt='' />
                    <span className={styles.nameLogo}>odial</span>
                </a>
            </div>

            <div className={styles.rightNav}>
                <div className={styles.user}>
                    <a href='/' >
                        <img src='https://cdn-icons-png.flaticon.com/512/4140/4140037.png' alt='' className={styles.userDp} />
                    </a>
                    <span>Suraj</span>
                </div>

                <div className={styles.navLinks}>
                    <ul>
                        <li>
                            <a href='/'>Log in</a>
                        </li>
                        <li>
                            <a href='/'>Log out</a>
                        </li>
                        <li>
                            <a href='/'>Register</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;