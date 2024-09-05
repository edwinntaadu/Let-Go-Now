import { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { StyleSheet, View, Text, Button, Platform, StatusBar, Dimensions, SafeAreaView, TextInput, Switch, Image } from 'react-native';
import {useDimensions,useDeviceOrientation} from '@react-native-community/hooks';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Screen from './app/components/Screen';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';


export default function App() {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = uri => {
    setImageUris([...imageUris, uri]);
  }

  const handleRemove = uri => {
    setImageUris(imageUris.filter(imageUri => imageUri !== uri));
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
     <Screen>
      <ImageInputList
       imageUris={imageUris} 
       onAddImage={handleAdd} 
       onRemoveImage={handleRemove} 
      />
     </Screen>
    </GestureHandlerRootView>
  );
}

