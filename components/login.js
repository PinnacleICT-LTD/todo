import React from 'react';
import {ScrollView, View, Image} from 'react-native';
import {TextInput, Title, Button} from 'react-native-paper';

export default function login({navigation}) {

    
    return (
        <ScrollView>
            <View style={{margin: 15, padding: 15, backgroundColor: '#353'}}>
                <View>
                    <View style={{marginLeft: 'auto', marginRight: 'auto'}}>
                        <Title>Welcome Back!</Title>
                    </View>
                    <View style={{marginLeft: 'auto', marginRight: 'auto', marginLeft: 15}}>
                        <Image source={require('../assets/icon.png')} style={{width: 200, height:200}}/>
                    </View>

                    <View>
                        <TextInput
                        mode="outlined"
                        label="E-mail Address"
                        placeholder="Enter your email address" />
                        
                        <TextInput
                        mode="outlined"
                        label="Password"
                        placeholder="Enter your password" />
                    </View>

                    <View style={{marginTop: 50, marginBottom: 10, borderRadius: 5, width: 'auto', marginLeft: 'auto', marginRight: 'auto'}}>
                        <Button
                        mode="contained">
                        Login
                        </Button>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
