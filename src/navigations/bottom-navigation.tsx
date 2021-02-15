import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Notifications, Profile, Settings, Card } from '../screens';
import { CustomTabBar } from '../components';

const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {

    return (
        <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
            <Tab.Screen name="basket" component={Home} />
            <Tab.Screen name="card" component={Card} />
            <Tab.Screen name="dollar" component={Settings} />
            <Tab.Screen name="bell" component={Notifications} />
            <Tab.Screen name="user" component={Profile} />
        </Tab.Navigator>
    )
}
