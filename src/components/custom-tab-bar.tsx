import React, { useEffect, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';
import { BasketIcon, CardIcon, BellIcon, DollarIcon, UserIcon } from './icons';

const { width: windowWidth } = Dimensions.get("window");

const TAB_ICONS: any = {
    basket: BasketIcon,
    card: CardIcon,
    bell: BellIcon,
    dollar: DollarIcon,
    user: UserIcon
}

export const CustomTabBar: React.FC<any> = ({ state, descriptors, navigation }) => {
    const focusedOptions = descriptors[state.routes[state.index].key].options;
    const position = useRef(new Animated.Value(0)).current;
    const general = new Animated.Value(0);

    useEffect(() => {
        Animated.spring(position, {
            toValue: state.index,
            velocity: 0.1,
            useNativeDriver: true,
        }).start()
        Animated.timing(general, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start()
    }, [state.index]);

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    return (
        <View style={{ flexDirection: 'row', height: 81 }}>
            <Animated.View style={[styles.SelectedTab, 
                {
                    transform: [{
                        translateX: Animated.multiply(windowWidth / 5, position)
                    }]
                }
            ]}>
                <View style={styles.BigCircle}>
                    <View style={styles.SelectedCircle}>
                        <View style={[styles.SelectedIcons]}>
                            <Animated.View style={{
                                transform: [{
                                    translateY: Animated.multiply(-24, position)
                                }]
                            }}>
                                {state.routes.map((route, index) => {
                                    const CustomIcon = TAB_ICONS[route.name];
                                    return <CustomIcon key={route.key} height={24} width={24} color={'#FFF'}/>
                                })}
                            </Animated.View>
                        </View>
                    </View>
                </View>
            </Animated.View>
            {state.routes.map((route, index) => {
                const CustomIcon = TAB_ICONS[route.name];
                const { options } = descriptors[route.key];
                const label = route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={route.name}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.Touchable}
                    >
                        <Animated.View style={[
                            styles.TabIcon, 
                            isFocused ? {
                                transform: [{
                                    translateY: Animated.multiply(100, general)
                                }]
                            } : {}
                        ]}>
                            <CustomIcon height={24} width={24} />
                        </Animated.View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    Touchable: {
        flex: 1,
        alignItems: 'center'
    },
    TabIcon: {
        width: 56,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center'
    },
    SelectedTab: {
        position: 'absolute',
        top: -50,
        width: windowWidth / 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    BigCircle: {
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: '#ACF8FF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    SelectedCircle: {
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: '#08D586',
        justifyContent: 'center',
        alignItems: 'center'
    },
    SelectedIcons: {
        width: 24,
        height: 24,
        overflow: 'hidden'
    }
})