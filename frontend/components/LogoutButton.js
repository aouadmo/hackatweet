import { useDispatch } from 'react-redux';
import { logout } from '../reducers/users'; 

function LogoutButton(){
  const dispatch = useDispatch();
  

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div> 
      <button onClick={handleLogout} > Logout</button>
    </div>
  );
};

export default LogoutButton;
