"use client"
import Link from "next/link"
import styles from "../navbar.module.css"

export default function Links(){
    const links = [
        {
            title:"Homes",
            path:"/"
        },
        {
            title:"Cars",
            path:"/cars"
        },
        {
            title:"Appointments",
            path:"/appointments"
        },
        {
            title:"Login",
            path:"/login"
        },
        {
            title:"Search car",
            path:"/carSearch"
        }
    ]

    const redirection = (path: string) => {
        window.location.href = path;
    }
    return (
        <div className={styles.container}>
            {links.map((link) => (
                <a key={link.title} className={styles.title} onClick={() => redirection(link.path)}>{link.title}</a>
            ))}
        </div>
    )
}