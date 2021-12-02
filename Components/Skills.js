import React from 'react'
import { View, Text } from 'react-native'

const Skills = (props) => {
    const {TEXT}=props;
    return (
        <View style={{backgroundColor:'#2EBCAE',justifyContent:'center',alignItems:'flex-start',borderRadius:5,marginTop:'3%',padding:'2%'}}>
            <Text style={{color:'#fff',fontSize:11}}>{TEXT}</Text>
        </View>
    );
};
export default Skills;
