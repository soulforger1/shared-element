
import * as React from 'react';
import { SafeAreaView, View, StyleSheet, Text, Image } from 'react-native';

export const ProfileDetail: React.FC<any> = ({ route }) => {
    const { name, jobTitle, email, profileImg, favColor } = route.params;

    const styles = StyleSheet.create({
        cardContainer: {
            flex: 1,
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
            height: 200,
            width: 200,
            position: 'absolute',
            resizeMode: 'contain',
            bottom: 8,
            right: 8,
        }
    })

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: favColor }}>
            <View style={styles.cardContainer}>
                <View style={[
                    StyleSheet.absoluteFillObject,
                    { backgroundColor: favColor }
                ]} />
                <Text style={[styles.font, styles.name]}>{name}</Text>
                <Text style={styles.font}>{jobTitle}</Text>
                <Text style={styles.font}>{email}</Text>
                <Image style={styles.avatar} source={{ uri: profileImg }} resizeMode={'cover'} />
            </View>
        </SafeAreaView>
    );
}