import React from 'react';
import { View, Text, SafeAreaView,Image, Dimensions,FlatList, ScrollView} from 'react-native';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Skills from './Components/Skills';
import RadioButton from './Components/RadioButton';
import Header from './Components/Header';

const Templates = () => {
    const ARR=[
        "A",
        "B",
        "C",
        "D",
        "E",
    ]
    return (
        <ScrollView>
            <View style={{width:Dimensions.get('screen').width,height:Dimensions.get("screen").height,flexDirection:'row',marginTop:'5%',padding:'2%',backgroundColor:'#fff'}}>
                <View style={{width:'30%',height:'100%'}}>

                    <View style={{height:'13%',width:'100%',}}>
                        <Image source={require("./Images/Dp.jpg")} style={{height:'100%',width:'100%',borderRadius:100}}/>
                    </View>

                    <View style={{height:'20%',width:'100%',marginTop:'20%'}}>

                        <IonicIcon name="ios-mail-outline" size={16} color="#2EBCAE" />
                        <Text style={{fontWeight:'bold',fontSize:10}}>Jane@roe.gmail.com</Text>

                        <IonicIcon name="phone-portrait-outline" size={16} color="#2EBCAE" />
                        <Text style={{fontWeight:'bold',fontSize:10}}>202-155-2023</Text>

                        <IonicIcon name="ios-location-outline" size={16} color="#2EBCAE" />
                        <Text style={{fontWeight:'bold',fontSize:10}}>new york USA</Text>

                        <Entypo name="linkedin" size={16} color="#2EBCAE" />
                        <Text style={{fontWeight:'bold',fontSize:10}}>linkedin.com/in/janeroe</Text>

                        <IonicIcon name="ios-logo-skype" size={16} color="#2EBCAE" />
                        <Text style={{fontWeight:'bold',fontSize:10}}>jane.roe</Text>

                    </View>

                    <View style={{height:'3.3%',width:'100%',marginTop:'20%',borderBottomWidth:2,borderColor:'#2EBCAE'}}>
                        <Text style={{fontWeight:'bold',fontSize:18,color:'#2EBCAE'}}>SKIILS</Text>
                    </View>
                    <View style={{width:'100%',height:'35%',marginTop:'3%',alignSelf:'flex-start'}}>
                        <Skills TEXT="SEO" />
                        <Skills TEXT="Public Speaking" />
                        <Skills TEXT="Negotiation" />
                        <Skills TEXT="Team Work" />
                        <Skills TEXT="Decision Making" />
                        <Skills TEXT="Research & Strategy" />
                        <Skills TEXT="Emotional Intelligence" />
                        <Skills TEXT="outbound marketing" />
                        <Skills TEXT="Email marketing" />
                        <Skills TEXT="Google analytics" />
                        <Skills TEXT="Sales and Marketing" />
                    </View>

                    <View style={{height:'3.3%',width:'100%',marginTop:'5%',borderBottomWidth:2,borderColor:'#2EBCAE'}}>
                        <Text style={{fontWeight:'bold',fontSize:17,color:'#2EBCAE'}}>LANGUAGES</Text>
                    </View>

                    <View style={{width:'100%',height:'7%',marginTop:'3%'}}>
                        <Text style={{fontWeight:'bold'}}>English</Text>
                        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                            <RadioButton/>
                            <RadioButton/>
                            <RadioButton/>
                            <RadioButton/>
                            <RadioButton/>
                        </View>
                    </View>

                    <View style={{width:'100%',height:'5%',marginTop:'-10%'}}>
                        <Text style={{fontWeight:'bold'}}>Spanish</Text>
                        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                            <RadioButton/>
                            <RadioButton/>
                            <RadioButton/>
                            <RadioButton/>
                            <RadioButton/>
                        </View>                        
                    </View>
                    <View style={{width:'100%',height:'5%',marginTop:'1%'}}>
                        <Text style={{fontWeight:'bold'}}>French</Text>
                        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                            <RadioButton/>
                            <RadioButton/>
                            <RadioButton/>
                            <RadioButton/>
                            <RadioButton/>
                        </View>                    
                    </View>
                </View>     
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////  */}
                <View style={{width:'73.7%',height:'100%'}}>
                    <View style={{width:'100%',height:'17%',flexDirection:'row',}}>
                        <Header/>
                        <View style={{marginTop:'15%',width:'40%',height:'50%',right:'75%',borderRadius:40}}>
                            <Image source={require("./Images/Crown.png")} style={{height:'100%',width:'100%'}}/>
                        </View>
                    </View>
                    
                    <View style={{height:'3%',width:'97%',marginTop:'1%',borderBottomWidth:2,borderColor:'#2EBCAE'}}>
                        <Text style={{fontWeight:'bold',fontSize:16,color:'#2EBCAE'}}>WORK EXPERIENCE</Text>
                    </View>

                    <View style={{width:'100%',height:'3%',marginTop:'-0.5%'}}>
                        <Text style={{fontWeight:'bold',fontSize:14,color:'#2EBCAE'}}>Buisness Development manager</Text>
                    </View>

                    <View style={{width:'90%',height:'3%',marginTop:'-2%',flexDirection:'row',}}>
                        <Text style={{fontWeight:'bold',fontSize:14,}}>AirState Solution</Text>
                        <AntDesign name="export" size={16} color="#2EBCAE" style={{top:'1%'}}/>
                    </View>

                    <View style={{width:'97%',height:'2%',marginTop:'-2%',flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{fontWeight:'bold',fontSize:10,color:"#2EBCAE"}}>09/2014-06/2017</Text>
                        <Text style={{fontWeight:'bold',fontSize:10,color:"#2EBCAE"}}>New York USA</Text>
                    </View>

                    <View style={{width:'95%',height:'5%',marginTop:'-1%',paddingLeft:'1%',flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{marginTop:'2.5%',width:'2.5%',height:'16%',borderColor:'#2EBCAE',borderWidth:1}}/>
                        <Text style={{fontWeight:'bold',fontSize:10,}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                    </View>
                    <View style={{width:'95%',height:'5%',marginTop:'-5%',paddingLeft:'1%',flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{marginTop:'2%',width:'2.5%',height:'16%',borderColor:'#2EBCAE',borderWidth:1}}/>
                        <Text style={{fontWeight:'bold',fontSize:10,}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                    </View>
                    <View style={{width:'95%',height:'5%',marginTop:'-5%',paddingLeft:'1%',flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{marginTop:'2%',width:'2.5%',height:'16%',borderColor:'#2EBCAE',borderWidth:1}}/>
                        <Text style={{fontWeight:'bold',fontSize:10,}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                    </View>
                    <View style={{width:'95%',height:'5%',marginTop:'-5%',paddingLeft:'1%',flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{marginTop:'2%',width:'2.5%',height:'16%',borderColor:'#2EBCAE',borderWidth:1}}/>
                        <Text style={{fontWeight:'bold',fontSize:10,}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                    </View>
                    
                    {/* ////////////////////////////////////// */}

                    <View style={{width:'100%',height:'3%',marginTop:'-5%',paddingLeft:'2%'}}>
                        <Text style={{fontWeight:'bold',fontSize:14,color:'#2EBCAE'}}>Buisness Development Assistant</Text>
                    </View>
                    <View style={{width:'90%',height:'3%',marginTop:'-2%',flexDirection:'row',paddingLeft:'2%'}}>
                        <Text style={{fontWeight:'bold',fontSize:13,}}>AirState Solution</Text>
                        <AntDesign name="export" size={16} color="#2EBCAE" style={{top:'1%'}}/>
                    </View>
                    <View style={{width:'96%',height:'3%',marginTop:'-4%',flexDirection:'row',justifyContent:'space-between',padding:'1.5%'}}>
                        <Text style={{fontWeight:'bold',fontSize:10,color:"#2EBCAE"}}>08/2012-06/2014</Text>
                        <Text style={{fontWeight:'bold',fontSize:10,color:"#2EBCAE"}}>Chicago USA</Text>
                    </View>
                    
                    <View style={{width:'95%',height:'5%',marginTop:'-2%',paddingLeft:'1%',flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{marginTop:'2.5%',width:'2.5%',height:'16%',borderColor:'#2EBCAE',borderWidth:1}}/>
                        <Text style={{fontWeight:'bold',fontSize:10,}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                    </View>
                    <View style={{width:'95%',height:'5%',marginTop:'-5%',paddingLeft:'1%',flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{marginTop:'2%',width:'2.5%',height:'16%',borderColor:'#2EBCAE',borderWidth:1}}/>
                        <Text style={{fontWeight:'bold',fontSize:10,}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                    </View>
                    <View style={{width:'95%',height:'5%',marginTop:'-5%',paddingLeft:'1%',flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{marginTop:'2%',width:'2.5%',height:'16%',borderColor:'#2EBCAE',borderWidth:1}}/>
                        <Text style={{fontWeight:'bold',fontSize:10,}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                    </View>
                    <View style={{width:'95%',height:'5%',marginTop:'-5%',paddingLeft:'1%',flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{marginTop:'2%',width:'2.5%',height:'16%',borderColor:'#2EBCAE',borderWidth:1}}/>
                        <Text style={{fontWeight:'bold',fontSize:10,}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                    </View>

                    {/* ////////////////////////////////////// */}

                    <View style={{height:'3.3%',width:'97%',paddingLeft:'1%',marginTop:'-5%',borderBottomWidth:2,borderColor:'#2EBCAE'}}>
                        <Text style={{fontWeight:'bold',fontSize:18,color:'#2EBCAE'}}>ORGANIZATION</Text>
                    </View>

                    <View style={{height:'10%',width:'97%',marginTop:'2%',paddingLeft:'1%'}}>  
                        <Text style={{fontWeight:'bold',fontSize:12,color:'#000'}}>American management sytem(2015-present)</Text>
                        <Text style={{fontWeight:'bold',fontSize:12,color:'#000'}}>Associate of private education enterprise (2014-present)</Text>
                        <Text style={{fontWeight:'bold',fontSize:12,color:'#000'}}>eBuisness Association(eBA) (2013-present)</Text>
                    </View>

                    {/* ////////////////////////////////////// */}

                    <View style={{height:'3.3%',width:'97%',marginTop:'-4%',paddingLeft:'1%',borderBottomWidth:2,borderColor:'#2EBCAE'}}>
                        <Text style={{fontWeight:'bold',fontSize:18,color:'#2EBCAE'}}>EDUCATION</Text>
                    </View>

                    <View style={{height:'10%',width:'97%',marginTop:'2%',}}>
                        <Text style={{fontWeight:'bold',fontSize:14,color:'#2EBCAE'}}>MSc in Ecnomics and Buisness Adminstration</Text>
                        <Text style={{fontWeight:'bold',fontSize:14,color:'#000'}}>University Of Chicago</Text>
                        <Text style={{fontWeight:'bold',fontSize:12,color:'#2EBCAE'}}>09/2008-09/2010</Text>
                    </View>
                    {/* ////////////////////////////////////// */}

                    <View style={{height:'3.3%',width:'97%',marginTop:'-3%',borderBottomWidth:2,borderColor:'#2EBCAE'}}>
                        <Text style={{fontWeight:'bold',fontSize:18,color:'#2EBCAE'}}>Honours and Award</Text>
                    </View>
                    <View style={{height:'10%',width:'97%',marginTop:'2%',}}>
                        <Text style={{fontWeight:'bold',fontSize:12,color:'#000'}}>Jury member, venture cup enterprenuership competetion(2016)</Text>
                        <Text style={{fontSize:10,color:'#000',opacity:0.5}}>Venture Cup USA</Text>
                        <Text style={{fontWeight:'bold',fontSize:12,color:'#000'}}>Sales indiviual and buisness development Award(2015) </Text>
                        <Text style={{fontSize:10,color:'#000',opacity:0.5}}>AirState Buisness Award</Text>
                        <Text style={{fontWeight:'bold',fontSize:12,color:'#000'}}>Excellence in customer partening Award</Text>
                    </View>
                </View>

            </View>
        </ScrollView>    
    );
};
export default Templates;
