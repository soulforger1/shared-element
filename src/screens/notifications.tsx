import * as React from 'react';
import { View, Button, Text, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Notifications = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ACF8FF' }}>
            <Text style={{fontSize: 30}}>Notifications screen</Text>
            <Button
                title="Go to Settings"
                onPress={() => navigation.navigate('Settings')}
            />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}