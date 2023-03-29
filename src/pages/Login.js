import { useState } from 'react';
import { toast } from 'react-toastify';
import styles from '../styles/login.module.css';
import { login } from '../api';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggingIn, setLoggingIn] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoggingIn(true);

        if (!email || !password) {
            toast.warning('Please enter both email and password', {
                position: toast.POSITION.TOP_RIGHT,
            });
            setLoggingIn(false);
            return;
        }

        const response = await login(email, password);

        if (response.success) {
            toast.success('Successfully logged in', {
                position: toast.POSITION.TOP_RIGHT,
            });
        } else {
            toast.error(response.message, {
                position: toast.POSITION.TOP_RIGHT,
            })
        }
        setLoggingIn(false);
    }
    return (
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            <span className={styles.loginSignupHeader}>Log In</span>

            <div className={styles.field}>
                <input
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className={styles.field}>
                <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className={styles.field}>
                <button disabled={loggingIn}>
                    {loggingIn ? 'Logging in...' : 'Log in'}</button>
            </div>
        </form>
    )
}

export default Login;