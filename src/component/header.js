import React from 'react';
import {Text, View} from 'react-native';

//make component
const Header = (props) => {
    console.log("Hey man, What's up :3");
    //Here props takes whatever parameter passed to the Header tag in the index file.
    const {headerText} = props;     //Make a note of destructuring.
    const { textStyle, viewStyle } = styles; //Here too
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{headerText}</Text>
        </View>
    );
};
//style it
const styles = {
    viewStyle: {
        backgroundColor: '#357c44',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},    //Random. careful with this ehuhu.
        shadowOpacity: 0.3
    },

    textStyle: {

        fontSize: 25
    }
};

//render it
export default Header;
