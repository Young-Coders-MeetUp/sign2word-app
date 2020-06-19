import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View, ClippingRectangle } from "react-native"

const styles = StyleSheet.create({
    newLibraryButtonImage: {
        top: 40
	},
	createLibraryText: {
		color: "rgb(123, 30, 88)",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
})

const CreateLibrary = (props) => {
    return(<View >
        <View style = {{
            height: 130,
            width: 100,
            borderColor: "rgb(0, 0, 0)",
            borderWidth: 1.5,
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <Image
                source={props.source}
                style={styles.newLibraryButtonImage}/>
            <View
                style={{
                    flex: 1,
                }}/>
        </View>
        <Text
            style={styles.createLibraryText}>{props.title}</Text>
    </View>
)};

export default CreateLibrary;