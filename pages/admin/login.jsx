import styles from "../../styles/Login.module.css"
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";


const Login = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(false);
    const router = useRouter();

    const handleClick = async () => {
        try {
            await axios.post("https://pizzawebsite-main.vercel.app/api/login", {
                username, 
                password,
            });
            router.push("/admin");
        } catch (error) {
            console.log(error);
            setError(true)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1>Admin dashboard</h1>
                <input type="text" 
                placeholder="username" 
                className={styles.input} 
                onChange={(e) => setUsername(e.target.value)} 
                />
                <input 
                type="password"
                placeholder="password"
                className={styles.input}
                onChange={(e) => setPassword(e.target.value)} />
                <button className={styles.button} onClick={(handleClick)}>Sign In</button>
                {error && <span className={styles.error}>Wrong Credentials!</span>}
            </div>
        </div>
    )
}

export default Login
