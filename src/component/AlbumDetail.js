import React from 'react';
import {Text, View, Image, Button, Linking}  from 'react-native';
import Card from './Card';
import CardSection from './CardSection';


const AlbumDetail = (props) => {


    const {title, artist, thumbnail_image, image, url} = props.details;                      /*--Notice Here*/
    console.log("Hey man, I'm entering Album Detail right now!!.\n You want in ?");
    return (
      <Card>

          <CardSection >
              <View style = {styles.imageHeaderStyle} >
              <Image style= {styles.thumbnailStyle} source={{uri: props.details.thumbnail_image}}/>
              </View>
              <View style = {styles.textStyle}>
                  <Text style={styles.titleStyle}>{title}</Text>
                  <Text>{artist}</Text>
              </View>
          </CardSection>

          <CardSection>
              <Image style={styles.imageStyle} source={{uri: image}}/>
          </CardSection>

              <Button style={{width:null, margin:10}} onPress={() => Linking.openURL(url)} >
                  Buy Now!!!
              </Button>
      </Card>

        //Remember the button can be replaced by a new js file
        //Whose parent tag is <TouchableOpacity> which is pretty cool

    );

};

const styles = {
    titleStyle: {
      fontSize: 20,
      fontWeight: "bold"
    },

    textStyle: {
        //you might have to include direction as column
        //fontFamily: 'sans-serif',
        paddingLeft: 10,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    imageHeaderStyle:{
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    imageStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      height: 325,
        width: 325
    },
    thumbnailStyle:{
        borderRadius: 8,
        borderWidth: 2.5,
        borderColor: '#10421a',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {height:10, width:0},
        shadowColor: '#000',
        height: 85,
        width: 85
    }
};


export default AlbumDetail;