import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';

const Stack = createNativeStackNavigator();

const FeedNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Listings' component={ListingsScreen}/>
            <Stack.Screen name='ListingDetails' component={ListingDetailsScreen} />
        </Stack.Navigator>
    );
}

export default FeedNavigator