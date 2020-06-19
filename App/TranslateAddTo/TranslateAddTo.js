//
//  TranslateAddTo
//  Sign2Word App
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"


export default class TranslateAddTo extends React.Component {

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

	render() {
	
		return <View
				style={styles.translateAddtoView}>
				<View
					style={styles.iphoneXBarsNavigationNavigationBarLargeTitle1ActionOnWhiteView}>
					<Text
						style={styles.addToText}>Add to…</Text>
				</View>
				<View
					style={styles.lineView}/>
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
				<View
					style={styles.notebookSectionView}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 11,
							width: 233,
							top: 41,
							height: 182,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<View
							style={styles.addNotebookView}>
							<Image
								source={require("./../../assets/images/plus-circle.png")}
								style={styles.plusCircleImage}/>
						</View>
						<View
							style={styles.bookTwoView}>
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
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 1,
							top: 0,
							bottom: 17,
						}}>
						<View
							style={styles.notebookTopView}>
							<Text
								style={styles.coursesText}>Courses</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.showAllText}>Show All</Text>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								flex: 1,
								marginLeft: 13,
								marginTop: 16,
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<Text
								style={styles.createCourseText}>Create Course</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.classNotebookView}>
								<View
									pointerEvents="box-none"
									style={{
										flex: 1,
										marginBottom: 12,
									}}>
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
										style={styles.bookViewLinearGradient}>
										<View
											style={styles.bookView}/>
									</LinearGradient>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 10,
											right: 9,
											top: 0,
											bottom: 0,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
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
								</View>
								<Text
									style={styles.mathsText}>Maths </Text>
							</View>
						</View>
					</View>
				</View>
				<View
					style={styles.groupView}>
					<View
						style={styles.notebookSectionTwoView}>
						<View
							style={styles.notebookTopTwoView}>
							<Text
								style={styles.vocabListsText}>Vocab Lists</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.showAllTwoText}>Show All</Text>
						</View>
						<View
							style={styles.addNotebookTwoView}>
							<Image
								source={require("./../../assets/images/plus-circle.png")}
								style={styles.plusCircleTwoImage}/>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.createListText}>Create List</Text>
					</View>
					<View
						style={styles.notebookSectionCopyView}>
						<View
							style={styles.imageBookView}>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "stretch",
									height: 135,
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
									colors={["rgb(252, 30, 80)", "rgb(210, 176, 239)"]}
									style={styles.bookThreeViewLinearGradient}>
									<View
										style={styles.bookThreeView}/>
								</LinearGradient>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 10,
										right: 9,
										top: 0,
										height: 135,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
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
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.recentTermsText}>Recent Terms</Text>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.imageBookCopyView}>
							<View
								pointerEvents="box-none"
								style={{
									height: 135,
								}}>
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
									style={styles.bookFourViewLinearGradient}>
									<View
										style={styles.bookFourView}/>
								</LinearGradient>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 10,
										right: 9,
										top: 0,
										height: 135,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
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
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.trickyTermsText}>Tricky {"\n"}Terms</Text>
						</View>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	translateAddtoView: {
		backgroundColor: "white",
		flex: 1,
	},
	iphoneXBarsNavigationNavigationBarLargeTitle1ActionOnWhiteView: {
		backgroundColor: "white",
		height: 155,
		justifyContent: "flex-end",
		alignItems: "flex-start",
	},
	addToText: {
		color: "black",
		fontSize: 34,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 41,
		letterSpacing: 0.41,
		backgroundColor: "transparent",
		marginLeft: 12,
		marginBottom: 5,
	},
	lineView: {
		backgroundColor: "rgb(102, 25, 87)",
		borderWidth: 1,
		borderColor: "rgb(102, 25, 87)",
		borderStyle: "solid",
		alignSelf: "flex-end",
		width: 378,
		height: 1,
		marginRight: 16,
		marginTop: 6,
	},
	searchFieldTypeView: {
		backgroundColor: "transparent",
		height: 36,
		marginTop: 21,
	},
	searchFieldView: {
		backgroundColor: "rgba(142, 142, 147, 0.24)",
		borderRadius: 10,
		height: 36,
		marginLeft: 16,
		marginRight: 16,
	},
	barsSearchBarSearchGlyphImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 14,
		height: 14,
	},
	placeholderLabelText: {
		backgroundColor: "transparent",
		color: "rgb(142, 142, 147)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		marginLeft: 8,
	},
	notebookSectionView: {
		backgroundColor: "transparent",
		height: 223,
		marginLeft: 16,
		marginRight: 15,
		marginTop: 21,
	},
	addNotebookView: {
		backgroundColor: "white",
		borderRadius: 2,
		borderWidth: 2,
		borderColor: "rgb(61, 16, 84)",
		borderStyle: "solid",
		alignSelf: "center",
		width: 90,
		height: 119,
		justifyContent: "center",
		alignItems: "center",
	},
	plusCircleImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 28,
		height: 28,
	},
	bookTwoView: {
		backgroundColor: "transparent",
		width: 103,
		height: 182,
	},
	notebookView: {
		width: "100%",
		height: "100%",
		flexDirection: "row",
		alignItems: "center",
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
		alignSelf: "flex-end",
		width: 28,
		height: 2,
		marginLeft: 10,
		marginBottom: 10,
	},
	rectangle4TwoView: {
		backgroundColor: "white",
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
	notebookTopView: {
		backgroundColor: "transparent",
		height: 25,
		marginRight: 1,
		flexDirection: "row",
		alignItems: "center",
	},
	coursesText: {
		color: "black",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.24,
		backgroundColor: "transparent",
	},
	showAllText: {
		backgroundColor: "transparent",
		color: "rgb(123, 30, 88)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.19,
		marginRight: 3,
	},
	createCourseText: {
		backgroundColor: "transparent",
		color: "rgb(123, 30, 88)",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginBottom: 6,
	},
	classNotebookView: {
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 102,
		height: 165,
	},
	bookViewLinearGradient: {
		borderRadius: 2,
		borderWidth: 3,
		borderColor: "white",
		borderStyle: "solid",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 135,
	},
	bookView: {
		width: "100%",
		height: "100%",
	},
	group2Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 28,
		height: 2,
		marginBottom: 10,
	},
	rectangle4View: {
		backgroundColor: "white",
		width: 7,
		height: 135,
	},
	mathsText: {
		color: "rgb(74, 74, 74)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginLeft: 24,
		marginRight: 32,
	},
	groupView: {
		backgroundColor: "transparent",
		height: 221,
		marginLeft: 16,
		marginRight: 17,
		marginTop: 47,
	},
	notebookSectionTwoView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 200,
		alignItems: "flex-start",
	},
	notebookTopTwoView: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 25,
		flexDirection: "row",
		alignItems: "center",
	},
	vocabListsText: {
		color: "black",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.24,
		backgroundColor: "transparent",
	},
	showAllTwoText: {
		color: "rgb(123, 30, 88)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.19,
		backgroundColor: "transparent",
		marginRight: 3,
	},
	addNotebookTwoView: {
		backgroundColor: "white",
		borderRadius: 2,
		borderWidth: 2,
		borderColor: "rgb(61, 16, 84)",
		borderStyle: "solid",
		width: 90,
		height: 119,
		marginLeft: 11,
		marginTop: 25,
		justifyContent: "center",
		alignItems: "center",
	},
	plusCircleTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 28,
		height: 28,
	},
	createListText: {
		backgroundColor: "transparent",
		color: "rgb(123, 30, 88)",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginLeft: 24,
	},
	notebookSectionCopyView: {
		backgroundColor: "transparent",
		position: "absolute",
		right: 0,
		width: 235,
		top: 47,
		height: 174,
		flexDirection: "row",
		alignItems: "center",
	},
	imageBookView: {
		backgroundColor: "transparent",
		width: 102,
		height: 174,
		alignItems: "flex-start",
	},
	bookThreeView: {
		width: "100%",
		height: "100%",
	},
	bookThreeViewLinearGradient: {
		borderRadius: 2,
		borderWidth: 3,
		borderColor: "white",
		borderStyle: "solid",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 135,
	},
	group2ThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 28,
		height: 2,
		marginTop: 123,
	},
	rectangle4ThreeView: {
		backgroundColor: "white",
		width: 7,
		height: 135,
	},
	recentTermsText: {
		backgroundColor: "transparent",
		color: "rgb(74, 74, 74)",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 67,
		marginLeft: 13,
	},
	imageBookCopyView: {
		backgroundColor: "transparent",
		width: 102,
		height: 174,
	},
	bookFourView: {
		width: "100%",
		height: "100%",
	},
	bookFourViewLinearGradient: {
		borderRadius: 2,
		borderWidth: 3,
		borderColor: "white",
		borderStyle: "solid",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 135,
	},
	group2FourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 28,
		height: 2,
		marginTop: 123,
	},
	rectangle4FourView: {
		backgroundColor: "white",
		width: 7,
		height: 135,
	},
	trickyTermsText: {
		color: "rgb(74, 74, 74)",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginLeft: 32,
		marginRight: 35,
	},
})
