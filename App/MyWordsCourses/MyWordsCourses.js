//
//  MyWordsCourses
//  Sign2Word App
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import BareScreenHeader from "../../components/BareScreenHeader"
import bookView from "../../components/bookView"


export default class MyWordsCourses extends React.Component {

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

	onFabPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("MyWordsNewCourse")
	}

	onResourcesNavBarBackPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("MyWordsHome")
	}

	onImageBookCopyPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("MyWordsMathsCourse")
	}

	render() {
	
		return <View
				style={styles.mywordsCoursesView}>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 0,
						right: 0,
						top: 0,
						bottom: 20,
					}}>
					<View
						style={styles.iphoneXBarsNavigationNavigationBarLargeTitle1ActionOnWhiteView}>
						<View
							pointerEvents="box-none"
							style={{
								height: 68,
								marginLeft: 16,
								marginRight: 18,
								marginTop: 60,
							}}>
							<Text
								style={styles.coursesText}>Courses</Text>
							<View
								style={styles.groupView}>
								<TouchableOpacity
									onPress={this.onResourcesNavBarBackPressed}
									style={styles.resourcesNavBarBackButton}>
									<Image
										source={require("./../../assets/images/resources-nav-bar-back.png")}
										style={styles.resourcesNavBarBackButtonImage}/>
								</TouchableOpacity>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.labelText}>Edit</Text>
							</View>
						</View>
						<View
							style={styles.searchFieldTypeView}>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									right: 0,
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<View
									style={styles.searchFieldView}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<View
									pointerEvents="box-none"
									style={{
										width: 73,
										height: 22,
										marginLeft: 24,
										flexDirection: "row",
										alignItems: "center",
									}}>
									<Image
										source={require("./../../assets/images/bars-search-bar-search-glyph.png")}
										style={styles.barsSearchBarSearchGlyphImage}/>
									<Text
										style={styles.placeholderLabelText}>Search</Text>
								</View>
							</View>
						</View>
					</View>

					<View
						pointerEvents="box-none"
						style={{
							height: 182,
							marginLeft: 17,
							marginRight: 28,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<View
							style={styles.bookView}>
							<LinearGradient
								start={{
									x: 0.16,
									y: -0.08,
								}}
								end={{
									x: 0.82,
									y: 1.07,
								}}
								locations={[0, 1]}
								colors={["rgb(61, 16, 84)", "rgb(123, 30, 88)"]}
								style={styles.notebookViewLinearGradient}>
								<View
									style={styles.notebookView}>
									<Image
										source={require("./../../assets/images/group-2-2.png")}
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
							<Text
								style={styles.geographyText}>Geography{"\n"}</Text>
						</View>
						<Text
							style={styles.mathsText}>Maths</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 102,
								height: 164,
								alignItems: "flex-end",
							}}>
							<LinearGradient
								start={{
									x: 0.16,
									y: -0.09,
								}}
								end={{
									x: 0.86,
									y: 1.1,
								}}
								locations={[0, 1]}
								colors={["rgb(48, 35, 174)", "rgb(200, 109, 215)"]}
								style={styles.imageBookCopyViewLinearGradient}>
								<View
									style={styles.imageBookCopyView}>
									<Image
										source={require("./../../assets/images/group-2-2.png")}
										style={styles.group2Image}/>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										style={styles.rectangle4View}/>
								</View>
							</LinearGradient>
							<Text
								style={styles.historyText}>History</Text>
						</View>
					</View>
					<View
						style={styles.group4View}>
						<View
							style={styles.notebookSectionCopyView}>
							<LinearGradient
								start={{
									x: 0.16,
									y: -0.09,
								}}
								end={{
									x: 0.86,
									y: 1.1,
								}}
								locations={[0, 1]}
								colors={["rgb(252, 30, 80)", "rgb(210, 176, 239)"]}
								style={styles.imageBookViewLinearGradient}>
								<View
									style={styles.imageBookView}>
									<Image
										source={require("./../../assets/images/group-2-2.png")}
										style={styles.group2ThreeImage}/>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										style={styles.rectangle4ThreeView}/>
								</View>
							</LinearGradient>
							<View
								style={{
									flex: 1,
								}}/>
							<LinearGradient
								start={{
									x: 0.16,
									y: -0.08,
								}}
								end={{
									x: 0.82,
									y: 1.06,
								}}
								locations={[0, 1]}
								colors={["rgb(72, 207, 173)", "rgb(25, 167, 132)"]}
								style={styles.imageBookCopyTwoViewLinearGradient}>
								<View
									style={styles.imageBookCopyTwoView}>
									<Image
										source={require("./../../assets/images/group-2-2.png")}
										style={styles.group2FourImage}/>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										style={styles.rectangle4FourView}/>
								</View>
							</LinearGradient>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								height: 36,
								marginLeft: 24,
								marginRight: 24,
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<Text
								style={styles.englishText}>English {"\n"}</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.scienceText}>Science{"\n"}</Text>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<TouchableOpacity
						onPress={this.onFabPressed}
						style={styles.addButton}>
						<LinearGradient
							start={{
								x: 0.2,
								y: 0.22,
							}}
							end={{
								x: 0.81,
								y: 0.8,
							}}
							locations={[0, 1]}
							colors={["rgb(61, 15, 84)", "rgb(123, 30, 88)"]}
							style={styles.addButtonLinearGradient}>
							<Image
								source={require("./../../assets/images/icons8-plus.png")}
								style={styles.addButtonImage}/>
						</LinearGradient>
					</TouchableOpacity>
				</View>
				<TouchableOpacity
					onPress={this.onImageBookCopyPressed}
					style={styles.imageBookCopyButton}>
					<LinearGradient
						start={{
							x: 0.5,
							y: 0,
						}}
						end={{
							x: 0.5,
							y: 1,
						}}
						locations={[0, 1]}
						colors={["rgb(250, 217, 97)", "rgb(247, 107, 28)"]}
						style={styles.imageBookCopyButtonLinearGradient}>
						<Image
							source={require("./../../assets/images/group-2-2.png")}
							style={styles.imageBookCopyButtonImage}/>
					</LinearGradient>
				</TouchableOpacity>
			</View>
	}
}

const styles = StyleSheet.create({
	mywordsCoursesView: {
		backgroundColor: "white",
		flex: 1,
	},
	iphoneXBarsNavigationNavigationBarLargeTitle1ActionOnWhiteView: {
		backgroundColor: "white",
		height: 231,
	},
	coursesText: {
		color: "black",
		fontSize: 34,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 41,
		letterSpacing: 0.41,
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		top: 27,
	},
	groupView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 1,
		right: 0,
		top: 0,
		height: 29,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	resourcesNavBarBackButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	resourcesNavBarBackButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 12,
		height: 21,
		marginLeft: 1,
		marginTop: 2,
	},
	resourcesNavBarBackButtonImage: {
		resizeMode: "contain",
	},
	labelText: {
		backgroundColor: "transparent",
		color: "rgb(123, 30, 88)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		marginTop: 8,
	},
	searchFieldTypeView: {
		backgroundColor: "transparent",
		height: 36,
		marginTop: 18,
	},
	searchFieldView: {
		backgroundColor: "rgba(142, 142, 147, 0.24)",
		borderRadius: 10,
		height: 36,
		marginLeft: 16,
		marginRight: 16,
	},
	barsSearchBarSearchGlyphImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 14,
		height: 14,
	},
	placeholderLabelText: {
		color: "rgb(142, 142, 147)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		backgroundColor: "transparent",
		marginLeft: 8,
	},
	bookView: {
		backgroundColor: "transparent",
		width: 103,
		height: 182,
	},
	notebookViewLinearGradient: {
		borderRadius: 2,
		borderWidth: 3,
		borderColor: "white",
		borderStyle: "solid",
		height: 135,
		marginLeft: 1,
	},
	notebookView: {
		width: "100%",
		height: "100%",
		flexDirection: "row",
		alignItems: "flex-end",
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
		backgroundColor: "transparent",
		color: "rgb(74, 74, 74)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginLeft: 14,
		marginRight: 15,
	},
	mathsText: {
		color: "rgb(74, 74, 74)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginLeft: 63,
		marginTop: 146,
	},
	imageBookCopyViewLinearGradient: {
		borderRadius: 2,
		borderWidth: 3,
		borderColor: "white",
		borderStyle: "solid",
		width: 102,
		height: 135,
	},
	imageBookCopyView: {
		width: "100%",
		height: "100%",
		flexDirection: "row",
		alignItems: "flex-end",
	},
	group2Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 28,
		height: 2,
		marginLeft: 10,
		marginBottom: 10,
	},
	rectangle4View: {
		backgroundColor: "white",
		alignSelf: "center",
		width: 7,
		height: 135,
		marginRight: 9,
	},
	historyText: {
		backgroundColor: "transparent",
		color: "rgb(74, 74, 74)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginRight: 27,
		marginTop: 11,
	},
	group4View: {
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 238,
		height: 182,
		marginLeft: 17,
		marginTop: 35,
	},
	notebookSectionCopyView: {
		backgroundColor: "transparent",
		height: 135,
		marginLeft: 3,
		marginRight: 2,
		flexDirection: "row",
		alignItems: "center",
	},
	imageBookViewLinearGradient: {
		borderRadius: 2,
		borderWidth: 3,
		borderColor: "white",
		borderStyle: "solid",
		width: 102,
		height: 135,
	},
	imageBookView: {
		width: "100%",
		height: "100%",
		flexDirection: "row",
		alignItems: "center",
	},
	group2ThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 28,
		height: 2,
		marginLeft: 10,
		marginBottom: 10,
	},
	rectangle4ThreeView: {
		backgroundColor: "white",
		width: 7,
		height: 135,
		marginRight: 9,
	},
	imageBookCopyTwoView: {
		width: "100%",
		height: "100%",
		flexDirection: "row",
		alignItems: "center",
	},
	imageBookCopyTwoViewLinearGradient: {
		borderRadius: 2,
		borderWidth: 3,
		borderColor: "white",
		borderStyle: "solid",
		width: 102,
		height: 135,
	},
	group2FourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 28,
		height: 2,
		marginLeft: 10,
		marginBottom: 10,
	},
	rectangle4FourView: {
		backgroundColor: "white",
		width: 7,
		height: 135,
		marginRight: 9,
	},
	englishText: {
		color: "rgb(74, 74, 74)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	scienceText: {
		backgroundColor: "transparent",
		color: "rgb(74, 74, 74)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	addButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	addButton: {
		alignSelf: "flex-end",
		width: 56,
		height: 56,
		marginRight: 16,
	},
	addButtonLinearGradient: {
		borderRadius: 28,
		shadowColor: "rgba(138, 64, 115, 0.45)",
		shadowRadius: 24,
		shadowOpacity: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: "100%",
		height: "100%",
	},
	addButtonImage: {
		resizeMode: "contain",
	},
	imageBookCopyButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	imageBookCopyButton: {
		position: "absolute",
		alignSelf: "center",
		width: 102,
		top: 231,
		height: 135,
	},
	imageBookCopyButtonLinearGradient: {
		borderRadius: 2,
		borderWidth: 3,
		borderColor: "white",
		borderStyle: "solid",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: "100%",
		height: "100%",
	},
	imageBookCopyButtonImage: {
		resizeMode: "contain",
	},
})
