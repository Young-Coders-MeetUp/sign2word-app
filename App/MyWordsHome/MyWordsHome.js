//
//  MyWordsHome
//  Sign2Word App
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View, ImageStore } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import BareScreenHeader from "../../components/BareScreenHeader"
import bookView from "../../components/bookView"
import BookView from "../../components/bookView"
import { Directions } from "react-native-gesture-handler"
import CreateLibrary from "../../components/CreateLibrary"


export default class MyWordsHome extends React.Component {

	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	onShowCourse = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("MyWordsCourses")
	}
	onShowLists = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("MyWordsLists")
	}
	onCreateList = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("MyWordsNewList")
	}
	onCreateCourse = () => {
		const { navigate } = this.props.navigation
		navigate("MyWordsNewCourse")
	}
	

	render() {
		return <View
			style={styles.mywordsHomeView}>
			<BareScreenHeader title = "Library"/>
			<View style={styles.PageView} >
				<View style={{flex: 1,}}/>
				<View style={styles.groupView}>
					<View style={styles.notebookSectionView}>
						<View style={styles.notebookTopView}>
							<Text
								style={styles.LibraryText}>Courses</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<TouchableOpacity
								onPress={this.onShowCourse}
								style={styles.showAllLibraryButton}>
								<Text
									style={styles.showAllLibraryButtonText}>Show All</Text>
							</TouchableOpacity>
						</View>

						<View
							style={{
								flex: 1,
								width: 400,
								flexDirection: "row",
								justifyContent: "space-around",
								alignSelf: "center",
							}}>
							<TouchableOpacity
								onPress={this.onCreateCourse}
								style={styles.newListButton}>
								<CreateLibrary 
									source = {images.addLibrary}
									title = "Add Course" />
							</TouchableOpacity>
							<BookView 
								GradStartx = {0.16}
								GradStarty = {-0.08}
								GradEndx = {0.82}
								GradEndy = {1.07}
								color = {["rgb(61, 16, 84)", "rgb(123, 30, 88)"]}
								source = {images.notebook}
								title = "Geography" />
							<TouchableOpacity>
								<BookView 
									GradStartx = {0.5}
									GradStarty = {0}
									GradEndx = {0.5}
									GradEndy = {1}
									color = {["rgb(250, 217, 97)", "rgb(247, 107, 28)"]}
									source = {images.notebook}
									title = "Maths" />
							</TouchableOpacity>
						</View>				
					</View>
				</View>
				<View style={{flex: 1,}}/>
				<View style={styles.groupView}>
					<View style={styles.notebookSectionView}>
						<View style={styles.notebookTopView}>
							<Text
								style={styles.LibraryText}>Vocab Lists</Text>
							<View style={{flex: 1,}}/>
							<TouchableOpacity
								onPress={this.onShowLists}
								style={styles.showAllListButton}>
								<Text
									style={styles.showAllLibraryButtonText}>Show All</Text>
							</TouchableOpacity>
						</View>
						<View
							style={{
								flex: 1,
								width: 400,
								flexDirection: "row",
								justifyContent: "space-around",
								alignSelf: "center",
							}}>
							<TouchableOpacity
								onPress={this.onCreateList}
								style={styles.newListButton}>
								<CreateLibrary 
									source = {images.addLibrary}
									title = "Add List" />
							</TouchableOpacity>
							<BookView 
								GradStartx = {0.16}
								GradStarty = {-0.09}
								GradEndx = {0.86}
								GradEndy = {1.1}
								color = {["rgb(252, 30, 80)", "rgb(210, 176, 239)"]}
								source = {images.notebook}
								title = "Recent Terms" />
							<BookView 
								GradStartx = {0.16}
								GradStarty = {-0.08}
								GradEndx = {0.82}
								GradEndy = {1.06}
								color = {["rgb(72, 207, 173)", "rgb(25, 167, 132)"]}
								source = {images.notebook}
								title = "Tricky Terms" />		
						</View>				
					</View>
				</View>
			</View>
		</View>
	}
}

const images = {
	notebook: require("./../../assets/images/group-2-2.png"),
	addLibrary: require("./../../assets/images/plus-circle.png"),
}


const styles = StyleSheet.create({
	mywordsHomeView: {
		backgroundColor: "white",
		flex: 1,
	},
	PageView: {
		backgroundColor: "transparent",
		alignItems: "stretch",
	},
	notebookSectionView: {
		backgroundColor: "transparent",
		height: 223,
	},
	notebookTopView: {
		backgroundColor: "transparent",
		height: 25,
		marginLeft: 10,
		marginRight: 30,
		marginBottom: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start"
	},
	LibraryText: {
		color: "black",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.24,
		backgroundColor: "transparent",
	},
	showAllLibraryButtonText: {
		color: "rgb(123, 30, 88)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
})
