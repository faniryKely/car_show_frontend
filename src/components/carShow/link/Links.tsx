import Link from "next/link"
import styles from"../carShow.module.css"
import Image from "next/image"
import taunus from "../../../../public/ford-taunus.png"

export default function Links(){
    const brands = [
        {
            name: "Ford taunus",
            image: taunus,
            path: "/CAR_SHOW_FRONTEND/public/ford-taunus.png"
        },
        {
            name: "Mercedes",
            image: taunus,
            path: "/CAR_SHOW_FRONTEND/public/ford-taunus.png"

        },
        {
            name: "Aston Martin",
            image: taunus,
            path: "/CAR_SHOW_FRONTEND/public/ford-taunus.png"
        },
        {
            name: "Nissan",
            image: taunus,
            path: "/CAR_SHOW_FRONTEND/public/ford-taunus.png"
        },
        {
            name: "Porshe",
            image: taunus,
            path: "/CAR_SHOW_FRONTEND/public/ford-taunus.png"
        },
        {
            name: "Mazda",
            image: taunus,
            path: "/CAR_SHOW_FRONTEND/public/ford-taunus.png"
        }

    ]
    return (
        <div className={styles.container}>
            {brands.map((link=>(<div>
                <Link href={link.path} key={link.name}>{link.name}</Link>
                <Image src={link.image} alt=""></Image>
            </div>
                
            )))}
            
        </div>
    )
}