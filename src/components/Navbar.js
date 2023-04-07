import { useAuth } from '../hooks';
import styles from '../styles/navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const auth = useAuth();
    return (
        <div className={styles.nav}>
            <div className={styles.leftDiv}>
                <a href='/'>
                    <img src='https://cdn-icons-png.flaticon.com/512/7448/7448194.png' style={{ width: 50 }} alt='' />
                    <span className={styles.nameLogo}>odial</span>
                </a>
            </div>

            <div className={styles.rightNav}>
                {auth.user && <div className={styles.user}>
                    <a href='/' >
                        <img src='https://cdn-icons-png.flaticon.com/512/4140/4140037.png' alt='' className={styles.userDp} />
                    </a>
                    <span>{auth.user.name}</span>
                </div>}

                <div className={styles.navLinks}>
                    <ul>
                        {auth.user ? (
                            <>
                                <li>
                                     onClick={auth.logout}Log out
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <NavLink to='/Login'>Log in</NavLink>
                                </li>

                                <li>
                                    <NavLink to='/register'>Register</NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;