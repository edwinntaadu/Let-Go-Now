// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button, Platform, StatusBar, Dimensions, SafeAreaView } from 'react-native';
import {useDimensions,useDeviceOrientation} from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';


export default function App() {
  return (
    <ViewImageScreen />
  );
}

