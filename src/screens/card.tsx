import * as React from 'react';
import { Image, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Card = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ACF8FF' }}>
            <Text style={{fontSize: 30}}>Basket screen</Text>
            <Image style={{height: 200, width: 400}} resizeMode={'cover'} source={{uri: 'https://pngimg.com/uploads/credit_card/credit_card_PNG4.png'}} />
        </View>
    );
}