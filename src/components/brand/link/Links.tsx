import Link from "next/link"
import styles from"../carShow.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Links(){
    const brands = [
        {
            name: "Ford",
            path: ""
        },
        {
            name: "Mercedes",
            path: ""
        },
        {
            name: "Aston Martin",
            path: ""
        },
        {
            name: "Nissan",
            path: ""
        },
        {
            name: "Porshe",
            path: ""
        },
        {
            name: "Mazda",
            path: ""
        }

    ]
    return (
        <div>
            <div className={styles.container}>
                {brands.map((link=>(
                    <Link href={link.path} key={link.name}>{link.name}</Link>
                )))}
            </div>
        </div>
    )
}