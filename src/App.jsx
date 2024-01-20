import { useEffect, useState } from 'react';
import { HeaderForm } from './components/HeaderForm';
import { customFetch } from './helpers/fetch';
import { UserData } from './components/UserData';

function App() {
	const [userName, setUserName] = useState('github');
	const [isLoading, setIsLoading] = useState(false);
	const [userData, setUserData] = useState(null);
	const [error, setError] = useState(null);

	const handleSetUserName = (value) => {
		setUserName(value);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await customFetch(
					`https://api.github.com/users/${userName}`
				);
				setError(null);
				setUserData(data);
				console.log(data);
			} catch (err) {
				setError(err);
			} finally {
				setIsLoading(false);
			}
		};

		setIsLoading(true);
		fetchData();
	}, [userName]);

	return (
		<>
			<HeaderForm onGetUserName={handleSetUserName} />
			<main className='w-full min-h-screen bg-blue-light flex flex-col items-center'>
				{isLoading && (
					<p className='text-2xl text-[#8893A5] font-bold mt-2'>Loading...</p>
				)}
				{userData ? (
					<UserData user={userData} />
				) : (
					<p className='text-2xl text-red-500 font-bold'>{error}</p>
				)}
			</main>
		</>
	);
}

export default App;
