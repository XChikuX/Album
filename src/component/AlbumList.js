import React, { Component } from 'react';
import ReactNative, { View, Text } from 'react-native';
import Card from './Card';
import axios from 'axios';
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component{
    state = {albums: []};
    componentWillMount() {

        console.log('Component will mount in AlbumList');
        axios.get("https://rallycoding.herokuapp.com/api/music_albums")
        .then(response => this.setState({albums: response.data}));//,response => console.log(response));

        //continue from here

        //debugger;  //You can use this shiz for debugging :*
    }

    renderAlbums() {
        //code here
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} details={album}/>
        );
    }
    render() {
        console.log(this.state);
    return(
        <View>
            {this.renderAlbums()}
        </View>
    );
    }
}


export default AlbumList;