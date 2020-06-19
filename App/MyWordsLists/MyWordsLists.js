//
//  MyWordsLists
//  Sign2Word App
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"


export default class MyWordsLists extends React.Component {

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
		
		navigate("MyWordsNewList")
	}

	onResourcesNavBarBackPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("MyWordsHome")
	}

	render() {
	
		return <View
				style={styles.mywordsListsView}>
				<View
					pointerEvents="box-none"
					style={{
						height: 549,
					}}>
					<View
						style={styles.iphoneXBarsNavigationNavigationBarLargeTitle1ActionOnWhiteView}>
						<View
							pointerEvents="box-none"
							style={{
								height: 67,
								marginLeft: 16,
								marginRight: 18,
								marginTop: 61,
							}}>
							<Text
								style={styles.vocabListsText}>Vocab Lists</Text>
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
							position: "absolute",
							left: 0,
							width: 721,
							top: 0,
							height: 546,
							alignItems: "flex-start",
						}}>
						<View
							style={styles.group3TwoView}>
							<View
								style={styles.group4TwoView}>
								<View
									style={styles.notebookSectionCopyTwoView}>
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
										style={styles.imageBookTwoViewLinearGradient}>
										<View
											style={styles.imageBookTwoView}>
											<Image
												source={require("./../../assets/images/group-2-2.png")}
												style={styles.group2ThreeImage}/>
											<View
												style={{
													flex: 1,
												}}/>
											<View
												style={styles.rectangle4TenView}/>
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
												style={styles.rectangle4ElevenView}/>
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
										marginLeft: 29,
										marginRight: 30,
										flexDirection: "row",
										alignItems: "flex-end",
									}}>
									<Text
										style={styles.savedTermsTwoText}>Saved{"\n"}Terms</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.trickyTermsTwoText}>Tricky{"\n"}Terms</Text>
								</View>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
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
								style={styles.bookFourViewLinearGradient}>
								<View
									style={styles.bookFourView}/>
							</LinearGradient>
						</View>
						<View
							style={styles.group3View}>
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
												style={styles.group2Image}/>
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
										style={styles.imageBookCopyViewLinearGradient}>
										<View
											style={styles.imageBookCopyView}>
											<Image
												source={require("./../../assets/images/group-2-2.png")}
												style={styles.group2TwoImage}/>
											<View
												style={{
													flex: 1,
												}}/>
											<View
												style={styles.rectangle4ThreeView}/>
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
										marginLeft: 29,
										marginRight: 30,
										flexDirection: "row",
										alignItems: "flex-end",
									}}>
									<Text
										style={styles.savedTermsText}>Saved{"\n"}Terms</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.trickyTermsText}>Tricky{"\n"}Terms</Text>
								</View>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
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
								style={styles.bookViewLinearGradient}>
								<View
									style={styles.bookView}/>
							</LinearGradient>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							right: 37,
							width: 66,
							top: 364,
							height: 185,
							alignItems: "flex-end",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								width: 66,
								height: 135,
								flexDirection: "row",
								justifyContent: "flex-end",
								alignItems: "flex-start",
							}}>
							<View
								style={styles.rectangle5SevenView}/>
							<View
								style={styles.rectangle5EightView}/>
							<View
								style={styles.rectangle4FourView}/>
						</View>
						<Text
							style={styles.regionalWordsText}>Regional{"\n"}Words</Text>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						height: 183,
						marginLeft: 13,
						marginRight: 90,
						marginTop: 23,
						flexDirection: "row",
						alignItems: "flex-start",
					}}>
					<View
						pointerEvents="box-none"
						style={{
							flex: 1,
							height: 183,
							marginRight: 50,
						}}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 12,
								width: 176,
								top: 12,
								height: 135,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<View
								style={styles.rectangle5FiveView}/>
							<View
								style={styles.rectangle5SixView}/>
							<View
								style={styles.rectangle4FiveView}/>
							<View
								style={styles.rectangle4View}/>
							<View
								style={styles.rectangle5View}/>
							<View
								style={styles.rectangle5TwoView}/>
							<View
								pointerEvents="box-none"
								style={{
									width: 9,
									height: 13,
									marginLeft: 1,
									marginTop: 112,
									alignItems: "flex-start",
								}}>
								<View
									style={styles.rectangle5FourteenView}/>
								<View
									style={styles.rectangle5ThreeView}/>
							</View>
						</View>
						<View
							style={styles.group8View}>
							<View
								pointerEvents="box-none"
								style={{
									flex: 1,
									alignSelf: "stretch",
									marginLeft: 1,
									marginRight: 53,
								}}>
								<View
									pointerEvents="box-none"
									style={{
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
										style={styles.bookTwoViewLinearGradient}>
										<View
											style={styles.bookTwoView}/>
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
											style={styles.rectangle5ElevenView}/>
										<View
											style={styles.rectangle5TwelveView}/>
										<View
											style={styles.rectangle5ThirteenView}/>
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
									style={styles.codingTermsText}>Coding {"\n"}Terms</Text>
							</View>
							<View
								style={styles.rectangle5NineView}/>
							<View
								style={styles.rectangle5TenView}/>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 135,
								width: 102,
								top: 1,
								height: 164,
								alignItems: "flex-start",
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
								style={styles.bookThreeViewLinearGradient}>
								<View
									style={styles.bookThreeView}/>
							</LinearGradient>
							<Text
								style={styles.numbersSetText}>Numbers Set</Text>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 145,
								right: 0,
								top: 1,
								height: 135,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<View
								style={styles.rectangle5SeventeenView}/>
							<View
								style={styles.rectangle5EighteenView}/>
							<View
								style={styles.rectangle5NineteenView}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.rectangle4EightView}/>
						</View>
						<View
							style={styles.rectangle4NineView}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							width: 11,
							height: 13,
							marginRight: 2,
							marginTop: 124,
							alignItems: "flex-end",
						}}>
						<View
							style={styles.rectangle5FifteenView}/>
						<View
							style={styles.rectangle5FourView}/>
					</View>
					<View
						style={styles.rectangle5SixteenView}/>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<TouchableOpacity
					onPress={this.onFabPressed}
					style={styles.fabButton}>
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
						style={styles.fabButtonLinearGradient}>
						<Image
							source={require("./../../assets/images/icons8-plus.png")}
							style={styles.fabButtonImage}/>
					</LinearGradient>
				</TouchableOpacity>
			</View>
	}
}

const styles = StyleSheet.create({
	mywordsListsView: {
		backgroundColor: "white",
		flex: 1,
	},
	iphoneXBarsNavigationNavigationBarLargeTitle1ActionOnWhiteView: {
		backgroundColor: "white",
		position: "absolute",
		left: 328,
		right: 0,
		top: 136,
		height: 231,
	},
	vocabListsText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 34,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 41,
		letterSpacing: 0.41,
		position: "absolute",
		left: 0,
		top: 26,
	},
	groupView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 1,
		right: 0,
		top: 0,
		height: 32,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	resourcesNavBarBackButtonImage: {
		resizeMode: "contain",
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
		marginTop: 1,
	},
	resourcesNavBarBackButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	labelText: {
		color: "rgb(123, 30, 88)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		backgroundColor: "transparent",
		alignSelf: "center",
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
	group3TwoView: {
		backgroundColor: "transparent",
		width: 376,
		height: 182,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	group4TwoView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 238,
		height: 182,
	},
	notebookSectionCopyTwoView: {
		backgroundColor: "transparent",
		height: 135,
		marginLeft: 3,
		marginRight: 2,
		flexDirection: "row",
		alignItems: "center",
	},
	imageBookTwoViewLinearGradient: {
		borderRadius: 2,
		borderWidth: 3,
		borderColor: "white",
		borderStyle: "solid",
		width: 102,
		height: 135,
	},
	imageBookTwoView: {
		width: "100%",
		height: "100%",
		flexDirection: "row",
		alignItems: "flex-end",
	},
	group2ThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 28,
		height: 2,
		marginLeft: 10,
		marginBottom: 10,
	},
	rectangle4TenView: {
		backgroundColor: "white",
		alignSelf: "center",
		width: 7,
		height: 135,
		marginRight: 9,
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
		alignItems: "center",
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
	rectangle4ElevenView: {
		backgroundColor: "white",
		width: 7,
		height: 135,
		marginRight: 9,
	},
	savedTermsTwoText: {
		color: "rgb(74, 74, 74)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	trickyTermsTwoText: {
		color: "rgb(74, 74, 74)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
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
		width: 102,
		height: 135,
	},
	group3View: {
		backgroundColor: "transparent",
		width: 376,
		height: 182,
		marginLeft: 345,
		marginTop: 182,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	group4View: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 238,
		height: 182,
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
	group2Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
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
	imageBookCopyView: {
		width: "100%",
		height: "100%",
		flexDirection: "row",
		alignItems: "center",
	},
	imageBookCopyViewLinearGradient: {
		borderRadius: 2,
		borderWidth: 3,
		borderColor: "white",
		borderStyle: "solid",
		width: 102,
		height: 135,
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
	rectangle4ThreeView: {
		backgroundColor: "white",
		width: 7,
		height: 135,
		marginRight: 9,
	},
	savedTermsText: {
		backgroundColor: "transparent",
		color: "rgb(74, 74, 74)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	trickyTermsText: {
		backgroundColor: "transparent",
		color: "rgb(74, 74, 74)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	bookView: {
		width: "100%",
		height: "100%",
	},
	bookViewLinearGradient: {
		borderRadius: 2,
		borderWidth: 3,
		borderColor: "white",
		borderStyle: "solid",
		width: 102,
		height: 135,
	},
	rectangle5SevenView: {
		backgroundColor: "white",
		borderRadius: 1,
		width: 8,
		height: 2,
		marginRight: 2,
		marginTop: 126,
	},
	rectangle5EightView: {
		backgroundColor: "white",
		borderRadius: 1,
		width: 8,
		height: 2,
		marginRight: 41,
		marginTop: 126,
	},
	rectangle4FourView: {
		backgroundColor: "white",
		width: 7,
		height: 135,
	},
	regionalWordsText: {
		backgroundColor: "transparent",
		color: "rgb(74, 74, 74)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginRight: 5,
		marginTop: 14,
	},
	rectangle5FiveView: {
		backgroundColor: "white",
		borderRadius: 1,
		width: 8,
		height: 2,
		marginTop: 123,
	},
	rectangle5SixView: {
		backgroundColor: "white",
		borderRadius: 1,
		width: 8,
		height: 2,
		marginLeft: 14,
		marginTop: 123,
	},
	rectangle4FiveView: {
		backgroundColor: "white",
		width: 7,
		height: 135,
		marginLeft: 37,
	},
	rectangle4View: {
		backgroundColor: "white",
		width: 7,
		height: 135,
		marginLeft: 14,
	},
	rectangle5View: {
		backgroundColor: "white",
		borderRadius: 1,
		width: 8,
		height: 2,
		marginLeft: 53,
		marginTop: 123,
	},
	rectangle5TwoView: {
		backgroundColor: "white",
		borderRadius: 1,
		width: 8,
		height: 2,
		marginLeft: 2,
		marginTop: 123,
	},
	rectangle5FourteenView: {
		backgroundColor: "white",
		borderRadius: 1,
		width: 8,
		height: 2,
	},
	rectangle5ThreeView: {
		backgroundColor: "white",
		borderRadius: 1,
		width: 8,
		height: 2,
		marginLeft: 1,
		marginTop: 9,
	},
	group8View: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 177,
		top: 0,
		height: 183,
		flexDirection: "row",
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
		width: 102,
		top: 1,
		height: 135,
	},
	rectangle5ElevenView: {
		backgroundColor: "white",
		borderRadius: 1,
		width: 8,
		height: 2,
		marginTop: 124,
	},
	rectangle5TwelveView: {
		backgroundColor: "white",
		borderRadius: 1,
		width: 8,
		height: 2,
		marginLeft: 14,
		marginTop: 124,
	},
	rectangle5ThirteenView: {
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
		marginLeft: 27,
	},
	rectangle4SixView: {
		backgroundColor: "white",
		width: 7,
		height: 135,
		marginTop: 1,
	},
	codingTermsText: {
		backgroundColor: "transparent",
		color: "rgb(74, 74, 74)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		alignSelf: "flex-start",
		marginLeft: 24,
	},
	rectangle5NineView: {
		backgroundColor: "white",
		borderRadius: 1,
		width: 8,
		height: 2,
		marginRight: 2,
		marginTop: 124,
	},
	rectangle5TenView: {
		backgroundColor: "white",
		borderRadius: 1,
		width: 8,
		height: 2,
		marginTop: 124,
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
		width: 102,
		height: 135,
	},
	numbersSetText: {
		color: "rgb(74, 74, 74)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginLeft: 6,
		marginTop: 11,
	},
	rectangle5SeventeenView: {
		backgroundColor: "white",
		borderRadius: 1,
		width: 8,
		height: 2,
		marginTop: 123,
	},
	rectangle5EighteenView: {
		backgroundColor: "white",
		borderRadius: 1,
		width: 8,
		height: 2,
		marginLeft: 14,
		marginTop: 123,
	},
	rectangle5NineteenView: {
		backgroundColor: "white",
		borderRadius: 1,
		width: 8,
		height: 2,
		marginLeft: 2,
		marginTop: 123,
	},
	rectangle4EightView: {
		backgroundColor: "white",
		width: 7,
		height: 135,
	},
	rectangle4NineView: {
		backgroundColor: "white",
		position: "absolute",
		right: 21,
		width: 7,
		top: 0,
		height: 135,
	},
	rectangle5FifteenView: {
		backgroundColor: "white",
		borderRadius: 1,
		width: 8,
		height: 2,
	},
	rectangle5FourView: {
		backgroundColor: "white",
		borderRadius: 1,
		width: 8,
		height: 2,
		marginRight: 3,
		marginTop: 9,
	},
	rectangle5SixteenView: {
		backgroundColor: "white",
		borderRadius: 1,
		width: 8,
		height: 2,
		marginTop: 124,
	},
	fabButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	fabButton: {
		alignSelf: "flex-end",
		width: 56,
		height: 56,
		marginRight: 16,
		marginBottom: 20,
	},
	fabButtonImage: {
		resizeMode: "contain",
	},
	fabButtonLinearGradient: {
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
})
