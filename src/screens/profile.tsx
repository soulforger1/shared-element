import * as React from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Profile = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ACF8FF' }}>
            <Text style={{fontSize: 30}}>Card screen</Text>
            <Image style={{height: 180, width: 300}} resizeMode={'cover'} source={{uri: 'https://lh3.googleusercontent.com/proxy/BAO-fhbHAwWdVJUCaI3hvZn2eqUMtR3yWkHgXkW-jfIBgLVUE6mDP00yakem15lAtQ9MuedJXw7clcTiV4-poLyRtoIPCeN_PkuV6V3uL2jFBIBUdohefxVi'}} />
        </View>
    );
}