import React from 'react'
import { View, Text, Image } from 'react-native'

const Header = () => {
    return (
        <View style={{backgroundColor:'#2EBCAE',borderTopRightRadius:20,padding:'3%'}}>
                <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>Jane Roe</Text>
                <Text style={{color:'#fff',fontSize:16,borderBottomWidth:1,borderColor:'#fff'}}>Buisness development Manager</Text>
                <Text style={{color:'#fff',fontSize:13,top:'5%'}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Ipsum has been the industry's standard dummy text ever since the 1500s, 
                </Text>
        </View>
    );
};
export default Header;
