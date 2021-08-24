import React, { useState } from "react";
import { View, TextInput, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";

export default function Login() {
    const [state, setstate] = useState({
        username: "",
        password: "",
    })

    function handleOnChange(name, text) {
        setstate({ ...state, [name]: text })
    }

    function handleSubmit() {

    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.text}>Log In</Text>

            <TextInput style={styles.firstInput}
                placeholder="Username"
                onChangeText={(text) => { handleOnChange("username", text) }} />

            <TextInput style={styles.secondInput}
                placeholder="Password"
                secureTextEntry={true}
                autoCorrect={false}
                onChangeText={(text) => { handleOnChange("password", text) }}
            />

            <TouchableOpacity>
                <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.clickButton} onPress={handleSubmit}>
                <Text style={styles.log}>Log in</Text>
            </TouchableOpacity>

            <Text style={styles.secondText}>Don't have account?
                <TouchableOpacity>
                    <Text style={styles.signButton}>Sign up</Text>
                </TouchableOpacity>
            </Text>

        </ScrollView>


    )

}


const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        marginHorizontal: 70,
    },

    text: {
        fontSize: 50,
        color: "#711be4",
    },

    firstInput: {
        marginTop: 50,
        marginBottom: 30,
        fontSize: 15,
        borderBottomWidth: 3,
        borderBottomColor: "#711be4",
        color: '#05010A',
    },

    secondInput: {
        marginBottom: 10,
        fontSize: 15,
        borderBottomWidth: 3,
        borderBottomColor: "#711be4",
        color: '#05010A',
    },

    forgotText: {
        alignSelf: "flex-end",
        color: "#1E90FF",
    },

    clickButton: {
        height: 50,
        backgroundColor: "#711be4",
        borderRadius: 12,
        marginTop: 40,
        alignItems: "center",
        justifyContent: "center",
    },

    log: {
        color: "white",
        fontSize: 18,
    },

    secondText: {
        marginTop: 50,
        alignSelf: "center",
        fontSize: 18,
    },

    signButton: {
        color: "#711be4",
        marginLeft: 5,
    },

})