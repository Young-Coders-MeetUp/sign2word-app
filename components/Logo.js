import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const styles = StyleSheet.create({

    Logo: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignContent: "center",
    },
    
})

const Logo = () => {
    return (
        <Image
        source={require("../assets/images/image-03-06-2020-at-1605.png")}
        style={styles.Logo}/>
    )
};

export default Logo