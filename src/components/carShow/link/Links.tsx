import Link from "next/link";
import styles from "../carShow.module.css";
import Image from "next/image";
import taunus from "../../../../public/ford-taunus.png";
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Links() {
  const brands = [
    {
      name: "Ford Taunus",
      image: taunus,
      path: "/CAR_SHOW_FRONTEND/public/ford-taunus.png",
    },
    {
      name: "Mercedes",
      image: taunus,
      path: "/CAR_SHOW_FRONTEND/public/ford-taunus.png",
    },
    {
      name: "Aston Martin",
      image: taunus,
      path: "/CAR_SHOW_FRONTEND/public/ford-taunus.png",
    },
    {
      name: "Nissan",
      image: taunus,
      path: "/CAR_SHOW_FRONTEND/public/ford-taunus.png",
    },
    {
      name: "Porsche",
      image: taunus,
      path: "/CAR_SHOW_FRONTEND/public/ford-taunus.png",
    },
    {
      name: "Mazda",
      image: taunus,
      path: "/CAR_SHOW_FRONTEND/public/ford-taunus.png",
    },
  ];

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
