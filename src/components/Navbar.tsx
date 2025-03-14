const Navbar = () => {
    return (
        <nav className="w-screen fixed flex justify-between items-center p-4 bg-gray-800 text-white">
            <ul className="text-white">
                <li><a href="">Home</a></li>
                <li><a href="">Concerts</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
