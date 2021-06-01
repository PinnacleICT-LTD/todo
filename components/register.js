import React from 'react';
import { View, Image, ScrollView} from 'react-native';
import { TextInput, Appbar, Button, Paragraph, Title, Subheading } from 'react-native-paper';

export default function register({navigation}) {

  const pressHandler = () => {
    navigation.navigate('getting_started');
  }
    return (
      <View style={{backgroundColor: '#6a6'}}>
        
        <ScrollView>
        <View style={{margin: 15, backgroundColor: '#353'}}>
            {/* The welcome page with form to register*/}
            <View style={{marginBottom: 15}}>
              <View style={{width: 100, height: 100, backgroundColor: '#fff', marginTop: 15, marginLeft: 'auto', marginRight: 'auto'}}>
                <Image source={require('../assets/icon.png')} style={{width: 200, height: 200}} />
              </View>

              <View style={{marginLeft: 'auto', marginRight: 'auto', padding: 10}}>
                <Title>Welcome onboard</Title>
              </View>

              <View style={{marginLeft: 'auto', marginRight: 'auto', padding: 10}}>
                <Subheading>Let's help you meet up your tasks</Subheading>
              </View>

              <View>
                <TextInput
                    style={{padding: 5}}
                    mode='outlined'
                    label='Full Name'
                    placeholder='Enter your Full Name'
                />

                <TextInput
                    style={{padding: 5}}
                    mode='outlined'
                    label='E-mail Address'
                    placeholder='Enter your E-mail'
                />

                <TextInput
                    style={{padding: 5}}
                    mode='outlined'
                    label='Passward'
                    placeholder='Enter your password'
                />

                <TextInput
                    style={{padding: 5}}
                    mode='outlined'
                    label='Confirm Password'
                    placeholder='Confirm Password'
                />
              </View>

              {/* The register Button*/}
              <View style={{marginTop: 20, marginBottom: 10, width: 'auto', marginLeft: 'auto', marginRight: 'auto'}}>
                <Button
                  mode="contained">
                  Register
                </Button>
              </View>

            
              {/* if already have account sign in instead</Paragraph*/}
              <View style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}>
                <Paragraph>Already have an account? 
                  <Button
                    style={{marginLeft: 5}}
                    mode='contained'
                    onPress={pressHandler}>
                    Sign in
                  </Button>
                </Paragraph>
              </View>
            </View>
        </View>
        </ScrollView>
        </View>
    );
}
