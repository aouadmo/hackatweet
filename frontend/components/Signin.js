import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/users';
import styles from '../styles/Signin.module.css'; // Adjust to match your file
import { Modal } from 'antd';


function Signin() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value);

    const [signInUsername, setSignInUsername] = useState('');
    const [signInPassword, setSignInPassword] = useState('');
    const handleConnection = () => {
        fetch('http://localhost:3000/users/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: signInUsername, password: signInPassword }),
        }).then(response => response.json())
            .then(data => {
                if (data.result) {
                    dispatch(login({ username: signInUsername, token: data.token }));
                    setSignInUsername('');
                    setSignInPassword('');
                    setIsModalVisible(false);
                }
            });
    };
    let modalContent;
    if (!user.isConnected) {
        modalContent = (
            <div className={styles.signinContainer}>
                <div className={styles.signinSection}>
                    <img className={styles.logo} src='../public/HackatweetLogo.png' alt='logo' />
                    <p>Connect to Hackatweet</p>
                    <input className={styles.userName} type="text" placeholder="Username" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
                    <input className={styles.password} type="password" placeholder="Password" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
                    <button className={styles.signinButton} onClick={handleConnection}>Sign Up</button>
                </div>
            </div>
        )
    };

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <h1 className={styles.title}>Sign Up</h1>
            </div>

            {isModalVisible && (
                <div id="react-modals">
                    <Modal getContainer="#react-modals" className={styles.modal} visible={isModalVisible} closable={false} footer={null}>
                        {modalContent}
                    </Modal>
                </div>
            )}
        </header>
    );
}

export default Signin;