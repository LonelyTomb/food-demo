import React, {useState} from 'react'
import {View, Text} from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
	const [term, setTerm] = useState('')
	return (<View>
		<SearchBar term={term} onTermChanged={newTerm => setTerm(newTerm)}/>
		<Text>Search Screen</Text>
		<Text>{term}</Text>
	</View>)
}
// const styles = StyleSheet.create({})

export default SearchScreen