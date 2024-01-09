import { RiShoppingCart2Line } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import { Link } from "react-router-dom";



const Nav = () =>{
    return(
        // desktop
        <nav className="flex flex-row justify-between items-center w-[92%] mx-auto">
            <div className="container mx-auto justify-between md:flex hidden">
                <div>
                    <p>Logo</p>
                </div>
                <ul className="flex items-center gap-[4vw]">
                    <li className="hover:text-500"><Link to='/'>Home</Link></li>
                    <li className="hover:text-gray-500"><Link to='products'>Produits</Link></li>
                    <li><Link to='/connection' className="hover:text-gray-500">Connexion</Link></li>
                    <li><Link to='/inscription' className="hover:text-gray-500">Inscription</Link></li>
                    <li className="hover:text-gray-500"><a href=""><RiSearchLine /></a></li>
                    <li className="hover:text-gray-500"><a href=""><RiShoppingCart2Line /></a></li>
                    <li className="hover:text-gray-500"><a href=""><RiUserLine /></a></li>
                
                </ul>

            </div>
        </nav>
    )
    
 }
 export default Nav;