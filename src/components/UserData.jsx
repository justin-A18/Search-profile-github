import PropTypes from 'prop-types';
import { UserRepositories } from './UserRepositories';
import { useEffect, useState } from 'react';
import { customFetch } from '../helpers/fetch';

export const UserData = ({ user }) => {
	const [respositories, setRespositories] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await customFetch(user.repos_url);
				const results = data.slice(0, 4);
				setRespositories(results);
				setError(null);
			} catch (err) {
				setError(err);
			} finally {
				setIsLoading(false);
			}
		};
		setIsLoading(true);
		fetchData();
	}, [user]);

	return (
		<section className='flex p-5 flex-col gap-4 justify-center items-center max-w-[900px]'>
			<header className='flex flex-col w-full items-center md:flex-row gap-3 min-h-20 relative'>
				<div className='size-32 bg-[#20293A] md:absolute md:bottom-1 p-2 rounded-lg'>
					<img
						className='rounded-lg'
						src={user.avatar_url}
						alt={user.name}
					/>
				</div>

				<div className='flex flex-wrap justify-center items-center gap-6 md:pl-40'>
					<div className='flex rounded-xl items-center px-4 py-4 bg-[#111629] text-[#CAD2DD]'>
						<p className='pr-3 text-[#505B6D] font-medium border-r-[1px] border-[#505B6D]'>
							Followers
						</p>
						<p className='pl-3 font-medium'>{user.followers}</p>
					</div>

					<div className='flex rounded-xl items-center px-4 py-4 bg-[#111629] text-[#CAD2DD]'>
						<p className='pr-3 text-[#505B6D] font-medium border-[#505B6D] border-r-[1px]'>
							Following
						</p>
						<p className='pl-3 font-medium'>{user.following}</p>
					</div>

					<div className='flex rounded-xl items-center px-4 py-4 bg-[#111629] text-[#CAD2DD]'>
						<p className='pr-3 text-[#505B6D] font-medium border-[#505B6D] border-r-[1px]'>
							Location
						</p>
						<p className='pl-3 font-medium'>{user.location || 'ninguna'}</p>
					</div>
				</div>
			</header>

			<div className='w-[100%] flex flex-col gap-8'>
				<header>
					<h2 className='text-[#CAD2DD] mb-2 text-4xl'>{user.name}</h2>
					<p className='text-[#8893A5] text-lg'>{user.bio}</p>
				</header>

				<div className='w-[100%] grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-5 place-items-center'>
					{isLoading && (
						<p className='text-xl text-[#8893A5] font-bold'>
							Cargando respositories...
						</p>
					)}

					{respositories.length > 0 ? (
						respositories.map((repositorie) => (
							<UserRepositories
								key={repositorie.id}
								repositorie={repositorie}
							/>
						))
					) : (
						<p className='text-xl text-red-500 font-bold'>
							{error || 'No hay repositorios'}
						</p>
					)}
				</div>
			</div>

			<footer className='w-[100%] h-20 flex items-center justify-center'>
				<a
					href={user.html_url}
					className='text-[#8893A5] font-medium'
					target='_blank'
					rel='noreferrer'>
					View all repositories
				</a>
			</footer>
		</section>
	);
};

UserData.propTypes = {
	user: PropTypes.object.isRequired,
};
