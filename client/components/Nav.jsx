import apiRequests from "../utils/apiRequests";
import { useRouter } from "next/router"
const Nav = () => {
    const router = useRouter()
    return <nav>
        <div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll'>
            {Object.entries(apiRequests).map(([key, { title, url }]) => {
                return <h2 onClick={()=> router.push(`/?genre=${key}`)} key={key} className='cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 last:pr-20'
                >{title}</h2>
            })}
        </div>
    </nav>
}

export default Nav;