import {useState, useEffect} from 'react'
import yelp from "../api/yelp";

export default () => {
	const [results, setResults] = useState([])
	const [error, setError] = useState('')

	const searchApi = async (searchTerm) => {
		try {
			const response = await yelp.get('/search', {
				params: {term: searchTerm, limit: 50, location: 'san jose'}
			})
			setResults(response.data.businesses)
			setError('')
			// console.table(response.data.businesses)
		} catch (e) {
			console.log(error)
			setError('Something went wrong!')
		}
	}

	useEffect(() => {
		searchApi('steak').then()
	}, [])

	return [searchApi, results, error]
}