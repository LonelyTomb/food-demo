import {useState, useEffect} from 'react'
import yelp from "../api/yelp";

export default (id) => {
	const [result, setResult] = useState(null)
	const [error, setError] = useState('')

	const getResult = async (id) => {
		try {
			const response = await yelp.get(`/${id}`)
			console.log(response.data)
			setResult(response.data)
		} catch (e) {
			setError('Something went wrong!')
		}
	}

	useEffect(() => {
		getResult(id).then()
	}, [])

	return [getResult, result, error]
}