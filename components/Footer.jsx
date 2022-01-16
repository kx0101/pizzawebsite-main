import styles from "../styles/Footer.module.css"
import Image from "next/image"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" alt="footer" layout="fill" objectFit="cover" />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR RESTAURANT</h1>
                    <p className={styles.text}>
                        1500 R. Test Road, #304.
                        <br /> Giannitsa, 58100
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}>
                        MONDAY - FRIDAY
                        <br /> 9:00 - 21:00
                    </p>
                    <p className={styles.text}>
                        SATURDAY - SUNDAY
                        <br /> 12:00 - 24:00
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
