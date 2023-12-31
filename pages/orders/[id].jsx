import React from "react";
import styles from "../../styles/Order.module.css";
import Image from "next/image";

const Order = () => {
  const status = 0;
  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className="row">
          <table className={styles.table}>
            <tr className={styles.tr}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>
                <span className={styles.id}>35435354</span>
              </td>
              <td>
                <span className={styles.name}>John Doe</span>
              </td>
              <td>
                <span className={styles.address}>Elton st.212-33</span>
              </td>

              <td>
                <span className={styles.total}>$39.80 </span>
              </td>
            </tr>
            <tr>
              <td>
                <span className={styles.id}>35435354</span>
              </td>
              <td>
                <span className={styles.name}>John Doe</span>
              </td>
              <td>
                <span className={styles.address}>Elton st.212-33</span>
              </td>

              <td>
                <span className={styles.total}>$39.80 </span>
              </td>
            </tr>
            <tr>
              <td>
                <span className={styles.id}>35435354</span>
              </td>
              <td>
                <span className={styles.name}>John Doe</span>
              </td>
              <td>
                <span className={styles.address}>Elton st.212-33</span>
              </td>

              <td>
                <span className={styles.total}>$39.80 </span>
              </td>
            </tr>
            <tr>
              <td>
                <span className={styles.id}>35435354</span>
              </td>
              <td>
                <span className={styles.name}>John Doe</span>
              </td>
              <td>
                <span className={styles.address}>Elton st.212-33</span>
              </td>

              <td>
                <span className={styles.total}>$39.80 </span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="/img/paid.png" alt="paid" width={30} height={30} />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                alt="checked"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/img/bake.png" alt="bake" width={30} height={30} />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                alt="checked"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/img/bike.png" alt="bike" width={30} height={30} />
            <span>On The Way</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                alt="checked"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image
              src="/img/delivered.png"
              alt="delivered"
              width={30}
              height={30}
            />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                alt="checked"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Cart Total</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.60
          </div>
          <button disabled className={styles.btn}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
