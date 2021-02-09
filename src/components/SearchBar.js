import React from 'react'
import {View, TextInput, StyleSheet} from "react-native";
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term, onTermChanged, onTermSubmit}) => {
	return (<View style={styles.backgroundStyle}>
		<Feather name={"search"} style={styles.iconStyle}/>
		<TextInput placeholder={'Search'} style={styles.inputStyle} value={term} autoCapitalize={'none'}
		           autoCorrect={false}
		           onEndEditing={onTermSubmit}
		           onChangeText={onTermChanged}/>
	</View>)
}
const styles = StyleSheet.create({
	backgroundStyle: {
		backgroundColor: '#D3D3D3',
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: "row",
		marginTop: 15,
		marginBottom: 10
	},
	iconStyle: {
		fontSize: 35,
		marginHorizontal: 10,
		alignSelf: 'center'
	},
	inputStyle: {
		fontSize: 18,
		paddingVertical: 10,
		flex: 1
	}
})

export default SearchBar