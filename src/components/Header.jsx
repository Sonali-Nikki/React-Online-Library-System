import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className='container flex items-center justify-between py-4 px-4 sticky top-0 backdrop-blur-sm'>
			<section className='my-2 w-full flex items-center justify-between rounded-3xl shadow-lg border-border bg-red-200 px-6 py-4 text-amber-900'>
				<h1 className=' font-extrabold text-cyan-800 text-3xl'>
					<Link to={"/"}>Library System</Link>
				</h1>
				<ul className='flex gap-4 px-6 font-bold text-xl'>
					<Link
						to='/'
						className='transition-colors duration-300 hover:text-cyan-700 '>
						<li>Home</li>
					</Link>
					<Link
						to='/books'
						className='transition-colors duration-300 hover:text-cyan-700 '>
						<li>Browse Books</li>
					</Link>
					<Link
						to='/books/add'
						className='transition-colors duration-300 hover:text-cyan-700 '>
						<li>Add Book</li>
					</Link>
				</ul>
			</section>
		</header>
	);
};

export default Header;
