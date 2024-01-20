export const customFetch = async (url) => {
	try {
		const res = await fetch(url);
		if (!res.ok) {
			throw { status: res.status, statusText: res.statusText };
		}
		return res.json();
	} catch (err) {
		const message = err.statusText || 'Ocurrió un error';
		console.log(`Error ${err.status}: ${message}`);
		throw err;
	}
};
