import React from 'react'
import { View, TouchableOpacity } from 'react-native'

const RadioButton = () => {
    return (
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity
                style={{width:15,height:15,borderRadius:40,borderColor:'#2EBCAE',borderWidth:1}}
            />
        </View>
    );
};
export default RadioButton;
