import Logo from "@/components/logo/Logo"
import Navbar from "../Navbar/Navbar"
import styles from "./header.module.css"
export default function Header(){
    return (
    <div className={styles.container}>
        <Logo/>
        <Navbar/>
    </div>
        
    )
}