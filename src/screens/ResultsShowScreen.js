import React, {useState} from 'react'
import {View, Text, StyleSheet, FlatList, Image} from "react-native";
import findBusiness from "../hooks/findBusiness";

const ResultsShowScreen = ({navigation}) => {
	const id = navigation.getParam('id')
	const [getResult, result] = findBusiness(id)
	if (!result) {
		return null
	}
	return (<View style={styles.container}>
		<Text style={styles.titleStyle}>{result.name}</Text>
		<FlatList
			data={result.photos}
			keyExtractor={photo => photo}
			renderItem={({item}) => {
				return (<><Image source={{uri: item}} style={styles.imageStyle}/></>)
			}}/>
	</View>)
}
const styles = StyleSheet.create({
	container: {
		marginLeft: 15
	},
	imageStyle: {
		height: 400,
		marginBottom: 5,
		borderRadius: 4
	},
	titleStyle: {
		marginHorizontal: 15,
		marginVertical: 5,
		fontSize: 18,
		fontWeight: 'bold'
	}
})
export default ResultsShowScreen