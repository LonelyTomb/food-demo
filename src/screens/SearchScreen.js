import React, {useState} from 'react'
import {Text, StyleSheet, ScrollView} from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
	const [term, setTerm] = useState('')
	const [searchApi, results, error] = useResults()
	const filterResultsByPrice = (price) => {
		return results.filter((result) => result.price === price)
	}
	return (<>
		<SearchBar term={term} onTermChanged={setTerm}
		           onTermSubmit={() => searchApi(term)}/>
		{error ? <Text>{error}</Text> : null}
		<ScrollView>
			<ResultsList
				results={filterResultsByPrice('$')}
				title={"Cost Effective"}/>
			<ResultsList
				results={filterResultsByPrice('$$')}
				title={"Bit pricey"}/>
			<ResultsList
				results={filterResultsByPrice('$$$')}
				title={"Big Spender"}/>
		</ScrollView>
	</>)
}
const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})

export default SearchScreen