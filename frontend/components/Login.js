import styles from '../styles/Login.module.css';
import Signup from "./Signup";
import Signin from "./Signin";
import {Button} from 'antd';
import { useDispatch } from 'react-redux';

function Login(){
	const dispatch = useDispatch();
	const handleSignUp = () => {
		dispatch(Signup)
	}
	const handleSignIn = () => {
		dispatch(Signin)
	}

	return(
	<div className={styles.loginContainer}>
  		<div className={styles.loginBox}>
			<img className = {styles.logo} src = '../public/images/twitter.png' alt = 'logo' /> // J'ai demandé à ChatGPT de générer un logo mais on peut reprendre celui de l'exos si tu veux
   			 <h1>See what's happening !</h1>
   			 <h2>Join Hackatweet today.</h2>
    			<Button className={styles.signUpButton} onClick = {handleSignUp}>Sign Up</Button>
    		<p>Already have an account?</p>
    			<Button className={styles.signInButton} onClick = {handleSignIn}>Sign In</Button>
  		</div>
	</div>

	)
}
export default Login;