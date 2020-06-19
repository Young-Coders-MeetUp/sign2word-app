import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View, ClippingRectangle } from "react-native"

const styles = StyleSheet.create({

    HomeScreenButtonsText: {
        color: "rgb(103, 26, 87)",
		fontSize: 21,
		fontStyle: "normal",
        fontWeight: "normal",

    },
    HomeScreenButtonsBackground: {
		backgroundColor: "rgba(246, 246, 246, 0.75)",
		borderRadius: 8,
		borderWidth: 2.5,
		borderColor: "rgb(103, 26, 87)",
		borderStyle: "solid",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
		width: 360,
		top: 0,
        height: 80,
    },
    HomeScreenButtonsImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 48,
        height: 48,

	},
})

const HomeScreenButtonsTemplate = (props) => {
    return ( <View 
        pointerEvents="box-none"
        style={{
            flexDirection: "row",
            alignItems: "flex-start",
             }}>
        <View style = {styles.HomeScreenButtonsBackground}>
            <Image
                source={props.source}
                style={styles.HomeScreenButtonsImage}/>
            <Text style={styles.HomeScreenButtonsText}>{props.label}</Text>
        </View>
    </View>)
};


export default HomeScreenButtonsTemplate; 
