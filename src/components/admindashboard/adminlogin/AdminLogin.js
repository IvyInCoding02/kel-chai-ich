import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap';
import locker from '../../../assets/img/lock.svg';
import { auth } from '../../../api/firebase';
import { signInWithEmailAndPassword, onAuthStateChanged,signOut} from 'firebase/auth';
import styles from './adminlogin.module.css';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';



// const validationSchema = yup.object().shape({
//   email: yup.string().required('This field is required').email('Enter valid email address'),
//   password: yup.string().required('This field is required')
// })

function AdminLogin() {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [authAdmin, setAuthAdmin] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (admin) => {
      if (admin) {
        setAuthAdmin(admin);
      } else {
        setAuthAdmin(null);
      }
    });

    return () => {
      listen();
    };
  }, []);


  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((res) => {
        localStorage.setItem("id", res.user.uid);
        navigate("/admindashboard");
      })
      .catch((err) =>
        console.log("Your email address and password do not match.Try again!")
      );
  };

    return (
      <div>
        <form>
          <div className={styles.container}>
            <Col>
              <img className={styles.lockImg} src={locker} alt="locker icon" />
              <h1 className={styles.header}>Login</h1>
            </Col>
            <Col>
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                required 
                placeholder="Enter your email"
                onChange={(e) => setLoginEmail(e.target.value)}   
              />
              <label>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                value={loginPassword}
                placeholder="Enter your password"
                onChange={(e) => setLoginPassword(e.target.value)}  
              />
            </Col>
            <Col>
              <button className={styles.adminButton} onClick={login}>
                Login
              </button>
            </Col>
          </div>
        </form>
      </div>
    );
  };


export default AdminLogin;