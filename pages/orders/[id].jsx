import axios from "axios";
import Image from "next/image"
import styles from "../../styles/Order.module.css"

const Order = ({ order }) => {

    const status = order.status;    

    const statusClass = (index) => {
        if (index - status < 1) return styles.done
        if (index - status === 1) return styles.inProgress
        if (index - status > 1) return styles.undone
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.row}>
                    <table className={styles.table}>
                    <tr className={styles.trTitle}>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Address</th>
                        <th>Total</th>
                    </tr>
                    <tr className={styles.tr}>
                        <td>
                            <span className={styles.id}>{order._id}</span>
                        </td>
                        <td>
                            <span className={styles.name}>
                                {order.customer}
                            </span>
                        </td>
                        <td>
                            <span className={styles.address}>{order.address}</span>
                        </td>
                        <td>
                            <span className={styles.total}>${order.total}€</span>
                        </td>
                    </tr>
                </table>
                </div>
                <div className={styles.row}>
                    <div className={statusClass(0)}>
                        <Image className={styles.checkedIcon} src="/img/paid.png" width={30} height={30} alt="" />
                        <span>Payment</span>
                        <div className={styles.checkedIcon}>
                            <Image src="/img/checked.png" width={20} height={20} alt="" /> 
                        </div>
                    </div>
                    <div className={statusClass(1)}>
                        <Image className={styles.checkedIcon} src="/img/bake.png" width={30} height={30} alt="" />
                        <span>Preparing</span>
                        <div className={styles.checkedIcon}>
                            <Image src="/img/checked.png" width={20} height={20} alt="" /> 
                        </div>
                    </div>
                    <div className={statusClass(2)}>
                        <Image className={styles.checkedIcon} src="/img/bike.png" width={30} height={30} alt="" />
                        <span>On the way</span>
                        <div className={styles.checkedIcon}>
                            <Image src="/img/checked.png" width={20} height={20} alt="" /> 
                        </div>
                    </div>
                    <div className={statusClass(3)}>
                        <Image className={styles.checkedIcon} src="/img/delivered.png" width={30} height={30} alt="" />
                        <span>Delivered</span>
                        <div className={styles.checkedIcon}>
                            <Image src="/img/checked.png" width={20} height={20} alt="" /> 
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>CART TOTAL</h2>
                    <div className={styles.totalText}>
                        <strong className={styles.totalTextTitle}>Subtotal: </strong>${order.total}€
                    </div>
                    <div className={styles.totalText}>
                        <strong className={styles.totalTextTitle}>Discount: </strong>0.00€
                    </div>
                    <div className={styles.totalText}>
                        <strong className={styles.totalTextTitle}>Total: </strong>${order.total}€
                    </div>
                    <button disabled className={styles.button}>PAID!</button>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`https://pizzawebsite-main.vercel.app/api/orders/${params.id}`);
  return {
    props: { order: res.data },
  };
};

export default Order
