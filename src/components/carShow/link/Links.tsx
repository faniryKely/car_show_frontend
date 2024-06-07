import Link from "next/link";
import styles from "../carShow.module.css";
import Image from "next/image";
import taunus from "../../../../public/ford-taunus.png";

export default function Links() {
    const brands = [
        {
            name: "Ford taunus",
            image: taunus,
            path: "/cars"
        },
        {
            name: "Mercedes",
            image: taunus,
            path: "/cars"

        },
        {
            name: "Aston Martin",
            image: taunus,
            path: "/cars"
        },
        {
            name: "Nissan",
            image: taunus,
            path: "/cars"
        },
        {
            name: "Porshe",
            image: taunus,
            path: "/cars"
        },
        {
            name: "Mazda",
            image: taunus,
            path: "/cars"
        }

    ]
    return (
        <div className={styles.container}>
            {brands.map((link)=>(
                <div key={link.name}>
                    <Link href={link.path} key={link.name}>{link.name}</Link>
                    <Image src={link.image} alt=""></Image>
                </div>
            ))}
        </div>
    );
}
