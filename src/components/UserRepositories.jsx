import PropTypes from 'prop-types';

export const UserRepositories = ({ repositorie }) => {
	const licenseName = repositorie.license
		? repositorie.license.name
		: 'Not License';

	return (
		<article className='bg-gradient-to-r from-[#12182e] to-[#1a1943] via-[#1a1943] p-4 w-full h-full rounded-xl'>
			<h3 className='text-white text-xl'>{repositorie.name}</h3>
			<p className='text-[#8893A5] text-md mt-2'>{repositorie.description}</p>
			<footer className='flex items-center gap-4 mt-2'>
				<div className='flex items-center gap-1 text-[#8893A5]'>
					<i className='bx bx-message-square-dots'></i>
					{licenseName}
				</div>
				<div className='flex items-center gap-1 text-[#8893A5]'>
					<i className='bx bx-git-repo-forked'></i>
					{repositorie.forks}
				</div>
				<div className='flex items-center gap-1 text-[#8893A5]'>
					<i className='bx bx-star'></i>
					{repositorie.stargazers_count}
				</div>
			</footer>
		</article>
	);
};

UserRepositories.propTypes = {
	repositorie: PropTypes.object.isRequired,
};
