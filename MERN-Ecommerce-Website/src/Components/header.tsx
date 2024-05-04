import { FaSearch, FaShoppingBag, FaSignInAlt } from "react-icons/fa"
import { Link } from "react-router-dom"

const user = { _id: "" }

const Header = () => {
    return (
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/search"}><FaSearch /></Link>
            <Link to={"/cart"}><FaShoppingBag /></Link>

            {
                user?._id ? (
                    <>
                    </>
                ) : (<link ><FaSignInAlt /></link>)
            }
        </nav>
    )
}

export default Header
