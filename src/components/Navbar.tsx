const Navbar = () => {
    return (
        <nav className="w-screen fixed flex flex-row justify-evenly z-50 items-center p-4 bg-gray-800 text-white">
            <a href="/">
                <div className="py-2 px-4 bg-gray-500 rounded">Concert list</div>
            </a>
            <a href="/add">
                <div className="py-2 px-4 bg-gray-500 rounded">Add concert</div>
            </a>
        </nav>
    );
};

export default Navbar;
