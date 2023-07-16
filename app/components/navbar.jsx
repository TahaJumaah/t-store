import styles from "./navbar.module.css";
import Link from "next/link";
export default function NavBar() {
  return (
    <div className={styles.navcontainer}>
      <div className={styles.navleft}>
        <p className={styles.home}>
          <Link href="/">Home</Link>
        </p>
        <p className={styles.store}>
          <Link href="./Store/">Store</Link>
        </p>
        <p className={styles.aboutus}>
          <Link href="./AboutUs">About Us</Link>
        </p>
      </div>
      <div className={styles.navright}>
        <p className={styles.profile}>
          <Link href="./Profile/">Profile</Link>
        </p>
      </div>
    </div>
  );
}
