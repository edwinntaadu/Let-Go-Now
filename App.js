// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button, Platform, StatusBar, Dimensions, SafeAreaView } from 'react-native';
import {useDimensions,useDeviceOrientation} from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';


export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ListingsScreen />
    </GestureHandlerRootView>
  );
}

