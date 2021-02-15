import * as React from 'react';
import { View, Button, Text, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Settings = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ACF8FF' }}>
            <Text style={{fontSize: 30}}>Settings screen</Text>
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}
            />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}