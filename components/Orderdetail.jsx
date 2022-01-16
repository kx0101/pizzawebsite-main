import styles from "../styles/OrderDetail.module.css"
import { useState } from "react";

const Orderdetail = ({ total, createOrder }) => {
    const [customer, setCustomer] = useState("");
    const [address, setAddress] = useState("");

    const handleClick = () => {
        createOrder({ customer, address, total, method: 0 });
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>It will cost X €</h1>
                <div className={styles.item}>
                    <label className={styles.input}>Name Surname</label>
                    <input type="text" placeholder="John Doe" className={styles.input} onChange={(e) => setCustomer(e.target.value)} />
                </div>
                <div className={styles.item}>
                    <label className={styles.input}>Phone</label>
                    <input type="number" placeholder="6933333333" className={styles.input} />
                </div>
                <div className={styles.item}>
                    <label className={styles.input}>Address</label>
                    <input type="text" placeholder="Main Street 1." className={styles.input} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <button className={styles.button} onClick={handleClick}>
                    Order
                </button>
            </div>
        </div>
    )
}

export default Orderdetail
