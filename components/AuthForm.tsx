import React, { useState } from 'react'
import { View, StyleSheet } from "react-native";
import { Text, Input } from "react-native-elements";
import { Button } from '.';
import { COLORS } from '../constants/theme'

interface Props {
    headerText: string,
    errorMessage: string,
    buttonText: string,
    onSubmitCallback: (param: Object) => void,
}

const AuthForm: React.FC<Props> = ({ headerText, errorMessage, onSubmitCallback, buttonText }) => {
    // For now, Registered user uses state
    const [email, setEmail] = useState('jane.doe@example.com');
    const [password, setPassword] = useState('SuperSecretPassword!');
    return (
        <>
            <Text h3 style={styles.headerStyle}>{headerText}</Text>
            <Input
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
                inputStyle={{color: COLORS.white}}
            />
            <Input
                secureTextEntry
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                inputStyle={{color: COLORS.white}}
            />
            {errorMessage ? (
                <Text style={styles.errorMessage}>{errorMessage}</Text>
            ) : null}
            <View style={styles.spacer}>
                <Button
                    title={buttonText}
                    onClick={() => {
                        onSubmitCallback({ email, password });
                    }}
                />
            </View>
        </>
    );
}
// height: PixelRatio.getPixelSizeForLayoutSize(135),
const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15
    },
    spacer: {
        margin: 15
    },
    headerStyle: {
        margin: 15,
        color: COLORS.secondary
    }
});
export default AuthForm;