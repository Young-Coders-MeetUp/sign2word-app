//
//  GameVocabChoice
//  Sign2Word App
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"


export default class GameVocabChoice extends React.Component {

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

	onBookPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("GameModeChoice")
	}

	render() {
	
		return <View
				style={styles.gameVocabchoiceView}>
				<View
					pointerEvents="box-none"
					style={{
						height: 188,
						marginRight: 1,
						marginTop: 26,
					}}>
					<View
						style={styles.bgView}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 54,
							top: 37,
							height: 151,
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/group-4.png")}
							style={styles.groupTwoImage}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 174,
								height: 129,
								marginLeft: 32,
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.playText}>Play!</Text>
							<Image
								source={require("./../../assets/images/group-3.png")}
								style={styles.groupImage}/>
							<Text
								style={styles.testYourKnowledgeText}>Test your knowledge with these fun games!</Text>
						</View>
						<Image
							source={require("./../../assets/images/line-3.png")}
							style={styles.lineImage}/>
					</View>
				</View>
				<View
					style={styles.lineView}/>
				<Text
					style={styles.selectAVocabListText}>Select a Vocab list!</Text>
				<View
					pointerEvents="box-none"
					style={{
						flex: 1,
						marginRight: 13,
						marginTop: 18,
						marginBottom: 85,
					}}>
					<View
						style={styles.group3View}>
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
								alignSelf: "flex-start",
								width: 235,
								height: 182,
								marginLeft: 3,
								marginTop: 20,
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
							<View
								style={styles.classNotebookView}>
								<View
									pointerEvents="box-none"
									style={{
										flex: 1,
										marginBottom: 12,
									}}>
									<TouchableOpacity
										onPress={this.onBookPressed}
										style={styles.mathsButton}>
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
											style={styles.mathsButtonLinearGradient}/>
									</TouchableOpacity>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 10,
											right: 9,
											top: 0,
											bottom: 0,
											flexDirection: "row",
											alignItems: "flex-end",
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
									style={styles.mathsText}>Maths</Text>
							</View>
						</View>
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
							style={{
								flex: 1,
							}}/>
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
										style={styles.bookTwoViewLinearGradient}>
										<View
											style={styles.bookTwoView}/>
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
									style={styles.recentTermsText}>Recent{"\n"}Terms</Text>
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
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 12,
							top: 45,
							bottom: 0,
							alignItems: "flex-end",
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
							style={styles.imageBookCopyTwoViewLinearGradient}>
							<View
								style={styles.imageBookCopyTwoView}>
								<Image
									source={require("./../../assets/images/group-2-2.png")}
									style={styles.group2FiveImage}/>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.rectangle4FiveView}/>
							</View>
						</LinearGradient>
						<Text
							style={styles.scienceText}>Science{"\n"}</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								height: 211,
								marginRight: 2,
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<View
								style={styles.group12View}>
								<View
									pointerEvents="box-none"
									style={{
										flex: 1,
										alignSelf: "stretch",
										marginLeft: 1,
										marginRight: 54,
										alignItems: "flex-start",
									}}>
									<View
										pointerEvents="box-none"
										style={{
											alignSelf: "stretch",
											height: 136,
										}}>
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
											style={styles.bookFourViewLinearGradient}>
											<View
												style={styles.bookFourView}/>
										</LinearGradient>
										<View
											pointerEvents="box-none"
											style={{
												position: "absolute",
												left: 10,
												right: 0,
												top: 0,
												height: 136,
												flexDirection: "row",
												alignItems: "flex-start",
											}}>
											<View
												style={styles.rectangle5ThreeView}/>
											<View
												style={styles.rectangle5FourView}/>
											<View
												style={styles.rectangle5FiveView}/>
											<View
												style={styles.rectangle4SevenView}/>
											<View
												style={{
													flex: 1,
												}}/>
											<View
												style={styles.rectangle4SixView}/>
										</View>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.age57NumbersSetText}>Age 5-7: {"\n"}Numbers Set</Text>
								</View>
								<View
									style={styles.rectangle5View}/>
								<View
									style={styles.rectangle5TwoView}/>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.bookFiveView}>
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
									style={styles.notebookTwoViewLinearGradient}>
									<View
										style={styles.notebookTwoView}>
										<Image
											source={require("./../../assets/images/group-2-2.png")}
											style={styles.group2SixImage}/>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											style={styles.rectangle4EightView}/>
									</View>
								</LinearGradient>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.codingTermsText}>Coding{"\n"} Terms{"\n"}</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	gameVocabchoiceView: {
		backgroundColor: "white",
		flex: 1,
	},
	bgView: {
		backgroundColor: "rgb(247, 247, 247)",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 187,
	},
	groupTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 135,
		height: 110,
	},
	playText: {
		color: "rgb(103, 26, 87)",
		fontSize: 34,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		lineHeight: 41,
		letterSpacing: 0.41,
		backgroundColor: "transparent",
	},
	groupImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 66,
		height: 8,
		marginLeft: 7,
		marginTop: 22,
	},
	testYourKnowledgeText: {
		backgroundColor: "transparent",
		color: "rgb(103, 26, 87)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.19,
		width: 169,
		marginLeft: 5,
		marginTop: 20,
	},
	lineImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: 289,
		height: 3,
		marginTop: 18,
	},
	lineView: {
		backgroundColor: "rgb(102, 25, 87)",
		alignSelf: "center",
		width: 88,
		height: 1,
		marginTop: 17,
	},
	selectAVocabListText: {
		backgroundColor: "transparent",
		color: "rgb(103, 26, 87)",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		letterSpacing: 0.22,
		alignSelf: "center",
		marginTop: 12,
	},
	group3View: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 178,
		right: 0,
		top: 0,
		height: 489,
	},
	notebookTopView: {
		backgroundColor: "transparent",
		height: 25,
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
	bookView: {
		backgroundColor: "transparent",
		width: 102,
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
	},
	group2TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
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
		marginLeft: 14,
		marginRight: 14,
	},
	classNotebookView: {
		backgroundColor: "transparent",
		width: 102,
		height: 165,
		marginLeft: 31,
	},
	mathsButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	mathsButton: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 135,
	},
	mathsButtonLinearGradient: {
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
	mathsButtonImage: {
		resizeMode: "contain",
	},
	group2Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 28,
		height: 2,
		marginBottom: 10,
	},
	rectangle4View: {
		backgroundColor: "white",
		alignSelf: "flex-start",
		width: 7,
		height: 135,
	},
	mathsText: {
		backgroundColor: "transparent",
		color: "rgb(74, 74, 74)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginLeft: 26,
		marginRight: 34,
	},
	notebookTopTwoView: {
		backgroundColor: "transparent",
		height: 25,
		marginTop: 43,
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
	notebookSectionCopyView: {
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 235,
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
	bookTwoView: {
		width: "100%",
		height: "100%",
	},
	bookTwoViewLinearGradient: {
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
		backgroundColor: "transparent",
		resizeMode: "center",
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
		color: "rgb(74, 74, 74)",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginLeft: 27,
	},
	imageBookCopyView: {
		backgroundColor: "transparent",
		width: 102,
		height: 174,
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
	bookThreeView: {
		width: "100%",
		height: "100%",
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
		backgroundColor: "transparent",
		color: "rgb(74, 74, 74)",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginLeft: 32,
		marginRight: 35,
	},
	imageBookCopyTwoViewLinearGradient: {
		borderRadius: 2,
		borderWidth: 3,
		borderColor: "white",
		borderStyle: "solid",
		width: 102,
		height: 135,
	},
	imageBookCopyTwoView: {
		width: "100%",
		height: "100%",
		flexDirection: "row",
		alignItems: "flex-end",
	},
	group2FiveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 28,
		height: 2,
		marginLeft: 10,
		marginBottom: 10,
	},
	rectangle4FiveView: {
		backgroundColor: "white",
		alignSelf: "center",
		width: 7,
		height: 135,
		marginRight: 9,
	},
	scienceText: {
		backgroundColor: "transparent",
		color: "rgb(74, 74, 74)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginRight: 22,
		marginTop: 11,
	},
	group12View: {
		backgroundColor: "transparent",
		width: 181,
		height: 183,
		flexDirection: "row",
		alignItems: "flex-start",
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
		width: 104,
		top: 1,
		height: 135,
	},
	rectangle5ThreeView: {
		backgroundColor: "white",
		borderRadius: 1,
		width: 8,
		height: 2,
		marginTop: 124,
	},
	rectangle5FourView: {
		backgroundColor: "white",
		borderRadius: 1,
		width: 8,
		height: 2,
		marginLeft: 14,
		marginTop: 124,
	},
	rectangle5FiveView: {
		backgroundColor: "white",
		borderRadius: 1,
		width: 8,
		height: 2,
		marginLeft: 2,
		marginTop: 124,
	},
	rectangle4SevenView: {
		backgroundColor: "white",
		width: 7,
		height: 135,
		marginLeft: 28,
	},
	rectangle4SixView: {
		backgroundColor: "white",
		width: 7,
		height: 135,
		marginTop: 1,
	},
	age57NumbersSetText: {
		color: "rgb(74, 74, 74)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginLeft: 8,
	},
	rectangle5View: {
		backgroundColor: "white",
		borderRadius: 1,
		width: 8,
		height: 2,
		marginRight: 2,
		marginTop: 124,
	},
	rectangle5TwoView: {
		backgroundColor: "white",
		borderRadius: 1,
		width: 8,
		height: 2,
		marginTop: 124,
	},
	bookFiveView: {
		backgroundColor: "transparent",
		width: 102,
		height: 192,
		marginBottom: 19,
	},
	notebookTwoViewLinearGradient: {
		borderRadius: 2,
		borderWidth: 3,
		borderColor: "white",
		borderStyle: "solid",
		height: 135,
	},
	notebookTwoView: {
		width: "100%",
		height: "100%",
		flexDirection: "row",
		alignItems: "flex-end",
	},
	group2SixImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 28,
		height: 2,
		marginLeft: 10,
		marginBottom: 10,
	},
	rectangle4EightView: {
		backgroundColor: "white",
		alignSelf: "center",
		width: 7,
		height: 135,
		marginRight: 9,
	},
	codingTermsText: {
		color: "rgb(74, 74, 74)",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginLeft: 32,
		marginRight: 32,
	},
})
