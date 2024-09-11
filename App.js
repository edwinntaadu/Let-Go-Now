import { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { StyleSheet, View, Text, Button, Platform, StatusBar, Dimensions, SafeAreaView, TextInput, Switch, Image } from 'react-native';
import {useDimensions,useDeviceOrientation} from '@react-native-community/hooks';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Screen from './app/components/Screen';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
import ListingEditScreen from './app/screens/ListingEditScreen';


export default function App() {

  return (
    <GestureHandlerRootView style={{flex: 1}}>
     <ListingEditScreen />
    </GestureHandlerRootView>
  );
}

