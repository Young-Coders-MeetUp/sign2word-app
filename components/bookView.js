import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View, ClippingRectangle } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

const styles = StyleSheet.create({
    bookView: {
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 103,
		height: 182,
	},
	notebookView: {
		width: "100%",
		height: "100%",
		flexDirection: "row",
		alignItems: "flex-end",
	},
	notebookViewLinearGradient: {
		borderRadius: 2,
		borderWidth: 3,
		borderColor: "white",
		borderStyle: "solid",
		height: 135,
		marginLeft: 1,
	},
	group2TwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 28,
		height: 2,
		marginLeft: 10,
		marginBottom: 10,
	},
	rectangle4TwoView: {
		backgroundColor: "white",
		alignSelf: "center",
		width: 7,
		height: 135,
		marginRight: 9,
	},
	geographyText: {
		color: "rgb(74, 74, 74)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
});

const BookView = (props) => {
    return(<View
		style={styles.bookView}>
		<LinearGradient
			start={{
				x: props.GradStartx,
				y: props.GradStarty,
			}}
			end={{
				x: props.GradEndx,
				y: props.GradEndy,
			}}
			locations={[0, 1]}
			colors={props.color}
			style={styles.notebookViewLinearGradient}>
			<View
				style={styles.notebookView}>
				<Image
					source={props.source}
					style={styles.group2TwoImage}/>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					style={styles.rectangle4TwoView}/>
			</View>
		</LinearGradient>
		<View
			style={{
				flex: 1,
			}}/>
		<Text style={styles.geographyText}>{props.title}{"\n"}</Text>
	</View>
)};

export default BookView;