const Header = () => {
    return (
        <header className="bg-gray-800 p-4">
            <ul  className="flex space-x-6 text-white">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Contact Us</li>
            </ul>
        </header>
    );
};

export default Header;
