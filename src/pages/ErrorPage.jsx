import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div className='flex flex-col items-center justify-center h-screen gap-2'>
			<h1 className='text-4xl text-blue-400 tracking-tight'>
				Page not found
			</h1>
			<Link to='/'>
				<button className='px-4 py-2 bg-blue-400 text-primary-content font-semibold rounded-md hover:bg-blue-500'>
					Back to Home
				</button>
			</Link>
		</div>
	);
};

export default ErrorPage;
