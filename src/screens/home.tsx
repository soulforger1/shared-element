
import * as React from 'react';
import { SafeAreaView, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { data } from '../assets/data';
import { PersonCard } from '../components';

export const Home = () => {
    const navigation = useNavigation();

    console.log(data);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ACF8FF' }}>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.uid}
                    renderItem={({ item }) => <PersonCard {...item} />}
                />
            </View>
        </SafeAreaView>
    );
}