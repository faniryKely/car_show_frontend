import Link from "next/link"

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
            title:"Search",
            path:"/search"
        },
        {
            title:"Login",
            path:"/login"
        }
    ]
    return (
        <div>
            {links.map((link=>(
                <Link href={link.path} key={link.title}>{link.title}</Link>
            )))}
        </div>
    )
}