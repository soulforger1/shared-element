import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Person } from '../types';

export const PersonCard: React.FC<Person> = (props) => {
    const { name, jobTitle, email, profileImg, favColor } = props;
    const navigation = useNavigation();
    const ITEM_HEIGHT = 150;

    const styles = StyleSheet.create({
        cardContainer: {
            flex: 1,
            height: ITEM_HEIGHT,
            padding: 20,
        },
        font: {
            color: 'white',
            fontSize: 11,
            opacity: 0.7
        },
        name: {
            fontWeight: '700',
            fontSize: 18,
            opacity: 1
        },
        avatar: {
            height: ITEM_HEIGHT * 0.8, 
            width: ITEM_HEIGHT * 0.8,
            position: 'absolute',
            resizeMode: 'contain',
            bottom: 8,
            right: 8,
        }
    })

    return (
        <TouchableOpacity onPress={() => { 
            navigation.navigate('detail', {...props})
        }} style={{ margin: 20, borderRadius: 20 }}>
            <View style={styles.cardContainer}>
                <View style={[
                    StyleSheet.absoluteFillObject,
                    {backgroundColor: favColor}
                ]} />
                <Text style={[styles.font, styles.name]}>{name}</Text>
                <Text style={styles.font}>{jobTitle}</Text>
                <Text style={styles.font}>{email}</Text>
                <Image style={styles.avatar} source={{ uri: profileImg }} resizeMode={'cover'} />
            </View>
        </TouchableOpacity>
    )

}