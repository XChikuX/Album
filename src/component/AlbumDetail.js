import React from 'react';
import {Text, View, Image}  from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import axios from 'axios';


const AlbumDetail = (props) => {

    const {title, artist, thumbnail_image} = props.details;
    console.log("Hey man, I'm entering Album Detail right now!!.\n You want in ?");
    return (
      <Card>

          <CardSection style = {styles.imageStyle}>
              <View>
              <Image style= {styles.thumbnailStyle} source={{uri: props.details.thumbnail_image}}/>
              </View>
              <CardSection >
                  <Text >{props.details.title}</Text>
                  <Text>{props.details.artist}</Text>
              </CardSection>
          </CardSection>

          <CardSection>

          </CardSection>
      </Card>


    );

}

const styles = {

    textStyle: {
        //you might have to include direction as column

        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    imageStyle:{
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    thumbnailStyle:{
        height: 75,
        width: 75
    }
}


export default AlbumDetail;