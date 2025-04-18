import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/users'; 
import styles from '../styles/Signup.module.css'; 
import { Modal } from 'antd'

function Signup (){
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value);

    const [signUpUsername, setSignUpUsername] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    const [signupFirstname, setSignupFirstname] = useState('');

    const handleRegister = () => {
            fetch('http://localhost:3000/users/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: signUpUsername, password: signUpPassword }),
            }).then(response => response.json())
                .then(data => {
                    if (data.result) {
                        dispatch(login({ username: signUpUsername, token: data.token }));
                        setSignUpUsername('');
                        setSignUpPassword('');
                        setIsModalVisible(false);
                    }
                });
        };

        let modalContent;
	if (!user.isConnected) {
		modalContent = (
			<div className={styles.signupContainer}>
				<div className={styles.signupSection}>
                    <img className={styles.logo} src = '../public/HackatweetLogo.png' alt='logo'/>
					<p>Create Your Hackatweet Account</p>
                    <input className={styles.firstName} type ="text" placeholder="Firstname" onChange={(e)=> setSignupFirstname(e.target.value)} value ={signupFirstname}/>
					<input className = {styles.userName} type="text" placeholder="Username" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
					<input className = {styles.password}type="password" placeholder="Password" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
					<button className={styles.signupButton} onClick={handleRegister}>Sign Up</button>
				</div>
            </div>
        )};

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

export default Signup;