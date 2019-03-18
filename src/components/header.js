//import libraries 

import React from 'react';
import { Text, View } from 'react-native';


//Make a Component

const Header = (props) => {
const { textStyle, viewStyle } = Styles;

return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
);
};

const Styles = {
    viewStyle: {
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 100 },
        shadowOpacity: 0.5,
        position: 'relative',
        elevation: 2
    },
    textStyle: {
        fontSize: 20
    }

};

//Make to component available to the other parts of the component 

export default Header;
