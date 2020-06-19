import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View, ClippingRectangle } from "react-native"

const styles = StyleSheet.create({

    pointText: {
		backgroundColor: "transparent",
		color: "rgb(103, 26, 87)",
		fontSize: 38,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.91,
		position: "absolute",
		right: 0,
		top: 59,
	},
	group3View: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 256,
		top: 0,
		height: 183,
		flexDirection: "row",
		alignItems: "flex-end",
	},
	image2Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		flex: 1,
		alignSelf: "flex-start",
		height: 176,
	},
	textText: {
		color: "black",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},

})

const GameResponse = (props) => {
    return(<View
        pointerEvents="box-none"
        style={{
            height: 183,
            marginRight: 74,
            marginTop: 62,
        }}>
        <Text
            style={styles.pointText}>{props.ResponseText}</Text>
        <View
            style={styles.group3View}>
            <Image
                source={props.ResponseImage}
                style={styles.image2Image}/>
            <Text
                style={styles.textText}> </Text>
        </View>
    </View>
)};

export default GameResponse;