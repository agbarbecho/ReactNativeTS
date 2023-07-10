import React from "react";
import { StyleSheet, View, Pressable, Text, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface ButtonProps {
    label: string;
    theme: string;
    onPress?: () => void;
}

export default function Button({ label, theme, onPress }: ButtonProps): JSX.Element {
    const handlePress = () => {
    Alert.alert("You pressed a button");
    onPress && onPress();
};

    if (theme === "primary") {
    return (
        <View style={styles.buttonContainer}>
        <Pressable
            style={[styles.button, { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }]}
            onPress={handlePress}
        >
            <FontAwesome
            name="picture-o"
            size={18}
            color="black"
            style={styles.buttonIcon}
            />
            <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
        </Pressable>
        </View>
    );
}

    return (
    <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={handlePress}>
        <Text style={[styles.buttonLabel, { color: "black" }]}>{label}</Text>
        </Pressable>
    </View>
);
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
},
    button: {
        borderRadius: 10,
        width: 150,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        paddingRight: 10,
},
    buttonIcon: {
        marginRight: 5,
        paddingLeft: 5,
},
    buttonLabel: {
        color: "black",
        fontSize: 16,
},
});
