import Link from "next/link";
import styles from "../navbar.module.css";
import { FaUser, FaSignOutAlt, FaCar } from "react-icons/fa";

export default function Links() {
    const links = [
        {
            title: "Homes",
            path: "/"
        },
        {
            title: "Cars",
            path: "/cars"
        },
        {
            title: "Appointments",
            path: "/appointments"
        },
        {
            title: "Login",
            path: "/login"
        },
        {
            title: "Search car",
            path: "/carSearch"
        },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Link href="/">
                    <FaCar className={styles.icon} />
                </Link>
                <div className={styles.h1}>
                     <h1>Rasseta</h1>
                </div>
                
            </div>
            <div className={styles.center}>
                {links.map((link) => (
                    <Link href={link.path} key={link.title} className={styles.title}>
                        {link.title}
                    </Link>
                ))}
            </div>
            <div className={styles.right}>
                <Link href="/login">
                    <FaSignOutAlt className={styles.icon} />
                </Link>
            </div>
        </div>
    );
}
