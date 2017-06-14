// Index.android.js - place code in here for android

// Import a library to help create a component
import React from 'react';
import { Text, AppRegistry, View } from 'react-native';
import Header from './src/component/header';
import AlbumList from './src/component/AlbumList';

//import ReactNative from 'react-native';

//Create a component
const App = () => (                           // THIS SHOULD ALWAYS HAVE ONLY ONE MAIN PARENT TAG. LIKE SO. THERE CAN BE MULTIPLE CHILDREN, BUT ONLY ONE PARENT
    <View>
      <Header headerText={'Random Stuff'}/>
      <AlbumList/>
    </View>
);



//Render it to the device
AppRegistry.registerComponent('Album', () => App); // WARNING!!! THE NAME HERE HAS TO MATCH THE PACKAGE NAME or you are screwed.