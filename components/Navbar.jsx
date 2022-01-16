import styles from "../styles/Navbar.module.css"
import Image from "next/image"
import Link from "next/link"
import { useSelector } from "react-redux"

const Navbar = () => {

    const quantity = useSelector((state) => state.cart.quantity);
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/telephone.png" alt="" width="32" height="32" />
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>ORDER NOW!</div>
                    <div className={styles.text}>+012 345 6789</div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <Link href="/">
                            <a className={styles.anchor}>Homepage</a>
                        </Link>
                    </li>
                    <li className={styles.listItem}>Products</li>
                    <h2 className={styles.logoStyle}>Pizza Place</h2>
                    <li className={styles.listItem}>Offers</li>
                    <li className={styles.listItem}>Contacts</li>
                </ul>
            </div>
            <Link href="/cart" passHref>   
                <div className={styles.item}>
                    <div className={styles.cart}>
                        <Image src="/img/cart.png" alt="logo" width="30px" height="30px" />
                        <div className={styles.counter}>{quantity}</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Navbar
