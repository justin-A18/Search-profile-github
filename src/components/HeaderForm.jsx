import PropTypes from 'prop-types';
import { useState } from 'react';

export const HeaderForm = ({ onGetUserName }) => {
	const [value, setValue] = useState('');

	const handleChangeInput = ({ target }) => {
		const valueInput = target.value;
		setValue(valueInput);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (value === '') return;

		onGetUserName(value);
	};

	return (
		<header className='w-full h-60 bg-hero-img bg-cover flex  justify-center pt-14'>
			<form
				className='w-[90%] md:w-[40rem] rounded-md bg-[#20293A] h-[3.5rem] p-3'
				onSubmit={handleFormSubmit}>
				<div className='w-full h-full flex relative'>
					<img
						src='./public/Search.svg'
						alt='logo'
						className='absolute top-1'
					/>
					<input
						type='text'
						placeholder='username'
						value={value}
						className='w-full h-full font-vietnam bg-transparent px-8 outline-none text-[#CDD5E0]'
						onChange={handleChangeInput}
					/>
				</div>
			</form>
		</header>
	);
};

HeaderForm.propTypes = {
	onGetUserName: PropTypes.func.isRequired,
};
