import React from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import ResultsDetail from "./ResultsDetail";
import {withNavigation} from "react-navigation";

const ResultsList = ({title, results, navigation}) => {
	if (!results) {
		return null
	}
	return (<View style={styles.container}>
		<Text style={styles.titleStyle}>{title}</Text>
		<FlatList
			horizontal
			data={results}
			showsHorizontalScrollIndicator={false}
			keyExtractor={(result) => result.id}
			renderItem={({item}) => {
				return (<TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id: item.id})}>
					<ResultsDetail result={item}/>
				</TouchableOpacity>)
			}
			}
		/>
	</View>)
}
const styles = StyleSheet.create({
	container: {
		marginBottom: 10
	},
	titleStyle: {
		marginLeft: 15,
		marginBottom: 5,
		fontSize: 18,
		fontWeight: 'bold'
	}
})

export default withNavigation(ResultsList)