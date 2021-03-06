import React from 'react';
import {ScrollView, View, Image} from 'react-native';
import {TextInput, Title, Button} from 'react-native-paper';
import Mobile from '../components/mobile.tsx';

export default function login( { navigation} ) {

    const pressHandler = () => {
        navigation.navigate('AddTask');
    }
    
    return (
        <View style={{backgroundColor: '#6a6'}}>
        <ScrollView>
            <View style={{margin: 15, padding: 15, backgroundColor: '#353'}}>
                <View>
                    <View style={{marginLeft: 'auto', marginRight: 'auto'}}>
                        <Title>Welcome Back!</Title>
                    </View>
                    <View style={{marginLeft: 'auto', marginRight: 'auto'}}>
                        <Mobile style={{width: 200, height:200, }}/>
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
                        mode="contained"
                        onPress={
                            pressHandler
                        }>
                        Login
                        </Button>
                    </View>
                </View>
            </View>
        </ScrollView>
        </View>
    );
}
