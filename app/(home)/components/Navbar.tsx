import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

function Navbar({className}: {className?: string}) {
    
    const socialLinks =[
        {
            link: "https://www.linkedin.com/in/namratachandarana/",
            label: "Twitter",
            icon: FaLinkedin
        },
        {
            link: "https://x.com/Namrata20_",
            label: "Github",
            icon: FaXTwitter
        },
        {
            link:"https://github.com/NamrataChandarana",
            label: "LinkedIn",
            icon: FaGithub
        }
    ]

    return(
        <nav className={`flex justify-between py-10 md:px-20 items-center px-10 ${className}`}>
            <h1 className=" text-white underline underline-offset-8 decoration-indigo-500 font-bold text-2xl -rotate-2">
                Namrata 👩🏻‍💻
            </h1>
            <div className="flex gap-2">
               {socialLinks.map((social, index) => {

                    const Icon = social.icon;
                    return (
                        <Link href={social.link} area-label={social.label} key={index} >
                            <span className="text-white text-xl">
                                <Icon />
                            </span>
                        </Link>
                    )
                })}    
            </div>
        </nav>
    )
}

export default Navbar