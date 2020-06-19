import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View, Button } from "react-native"

onTRANSLATEPressed = () => {
    const { navigate } = this.props.navigation
    navigate("TranslateHome")
}

const Navigator = () => {

    return(
        <View>
            <Button
                onPress = {this.onTRANSLATEPressed}>
                <Text style = {{textSize: 50,}}>Hi</Text>
                <Image
                    source = {icons.translate} />
            </Button>
        </View>
    )

}

const icons = {
	translate: require("./../../assets/images/translate-2.png"),
	myWords: require("./../../assets/images/myWordsIcon.png"),
	create: require("./../../assets/images/edit-alt-2.png"),
	play: require("./../../assets/images/GameIcon.png")
}

export default Navigator;