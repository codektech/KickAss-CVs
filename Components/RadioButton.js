import React,{useState} from 'react'
import { View, TouchableOpacity } from 'react-native'

const RadioButton = () => {
    const [color, setcolor] = useState()
    return (
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity
                onPress={()=>setcolor(!color)}
                style={{width:15,height:15,borderRadius:40,borderColor:'#2EBCAE',borderWidth:1,backgroundColor:color?"#807F7F":null}}
            />
        </View>
    );
};
export default RadioButton;
