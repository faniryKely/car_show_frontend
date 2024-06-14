import Link from "next/link"
import styles from"../carShow.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Links(){
    const brands = [
        {
            name: "Ford",
            path: "/CAR_SHOW_FRONTEND/public/ford-logo.png"
        },
        {
            name: "Mercedes",
            path: "/CAR_SHOW_FRONTEND/public/mercedes-benz-logo.png"
        },
        {
            name: "Jaguar",
            path: "/CAR_SHOW_FRONTEND/public/jaguar-logo.png"
        },
        {
            name: "Nissan",
            path: "/CAR_SHOW_FRONTEND/public/nissan-logo.png"
        },
        {
            name: "Porshe",
            path: "/CAR_SHOW_FRONTEND/public/porshe-logo.png"
        },
        {
            name: "Toyota",
            path: "/CAR_SHOW_FRONTEND/public/toyota-logo.png"
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