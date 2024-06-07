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
    return (
        <div className={styles.container}>
            {links.map((link=>(
                <Link href={link.path} key={link.title} className={styles.title}>{link.title}</Link>
            )))}
        </div>
    )
}