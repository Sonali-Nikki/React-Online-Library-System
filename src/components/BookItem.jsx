import { Link } from "react-router-dom";

const BookItem = ({
	bookId,
	bookTitle,
	bookAuthor,
	bookCoverImage,
	bookDescription,
	bookCategory,
	bookRating,
}) => {
	return (
		<article className='rounded-3xl bg-red-200 p-1 text-amber-950 transition-all duration-500 hover:scale-105 shadow-md hover:shadow-lg '>
			<img
				src={bookCoverImage}
				alt={bookTitle}
				className='h-64 w-full rounded-t-3xl object-cover'
			/>
			<div className='p-2 space-y-2'>
				<h2 className='truncate text-2xl font-bold'>{bookTitle}</h2>
				<p className='text-amber-800  text-xl'>{bookAuthor}</p>
				<p className='text-blue-900'>{bookDescription}</p>

				<div className='flex justify-between items-center'>
					<p className='text-amber-800'>Category: {bookCategory}</p>
					<p className='text-cyan-800'>Rating: ⭐{bookRating}</p>
				</div>
			</div>

			<Link
				to={`/book/${bookId}`}
				className='p-2 text-cyan-800'>
				View Details
			</Link>
		</article>
	);
};

export default BookItem;
