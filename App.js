import React, {useState} from 'react';
import {TextInput, Card, Title, Avatar, Badge, Appbar, Button, Checkbox, DefaultTheme, Provider as Paper, Subheading, Paragraph} from 'react-native-paper';
import {View, Image, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
//import { Card } from 'native-base';
import Mobile from './components/mobile';

export default function Welcome(){
  
  const [unchecked, setChecked] = useState(false);
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#349955',
      accent: '#228823',
    },
  };

    return (
      <Paper theme={theme}>
      <View style={{backgroundColor: '#6a6'}}>
          <Appbar.Header>
            <Appbar.Content title="TODO App" subtitle="Keep track of your daily work" />
            <Appbar.Action icon="dots-vertical" />
          </Appbar.Header>
          
            {/* Langin Page*/}
            <View style={{margin: 15, padding: 15, backgroundColor: '#353'}}>
              <View style={{marginLeft: 'auto', marginRight: 'auto', paddingBottom: 15}}>
                <Title>Getting things done with TODO</Title>
              </View>

              <View style={{marginLeft: 'auto', marginRight: 'auto'}}>
                <Paragraph>
                  ajjhdjkbfjkdvbrubrgr8 g8g9rhghrgiorhvivhihvruihreuih weuhweu iweiufiebfaubv v vbuiaugryufgyugrfuwgfwyugfwefgenwfweifeufghufbdshvjs b uyeuyf yveyuvbe uewbvdbs dhs vduyeufgyugfyeuqgfuiftiegw78ftew8fte8yefy ef gfwfgd kdvbds vdguewgf78ewtf7e98ep89qyp9dg;iF[FEFV NIIO;DSVVBSIUGUEFjkbvuivauigrfbuibuire 
                  uburebkyurfhjsvdburbfyufaeyvfyrvfwyeuf yuyegfueyfewb kvguf weueyegwfuewkf,jdv,jyuvfyueyewfugefiueywevddsh nc ydfew feweI;ioh[ewpoewgbuid fduy uifiuagc bf ewifewuifweuig ewiwege
                  hjbkgiuefyuewdjbcudv]]
                </Paragraph>
              </View>

              {/* The Getting started Button*/}
              <View style={{marginTop: 50, marginBottom: 10, width: 'auto', marginLeft: 'auto', marginRight: 'auto'}}>
                <Button
                  mode="contained">
                  Getting Started
                </Button>
              </View>

            </View>

          <View style={{margin: 15, backgroundColor: '#353'}}>

            {/* The welcome page with form to register*/}
            <View style={{marginBottom: 15}}>
              <View style={{width: 100, height: 100, backgroundColor: '#fff', marginTop: 15, marginLeft: 'auto', marginRight: 'auto'}}>
                <Mobile style={{width: 200}}/>
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
              <View style={{marginTop: 50, marginBottom: 10, width: 'auto', marginLeft: 'auto', marginRight: 'auto'}}>
                <Button
                  mode="contained">
                  Register
                </Button>
              </View>

              {/* if already have account sign in instead</Paragraph*/}
              <View style={{marginLeft: 'auto', marginRight: 'auto'}}>
                <Paragraph>Already have an account? 
                  <Button
                    style={{marginLeft: 5}}
                    mode='contained'>
                    Sign in
                  </Button>
                </Paragraph>
              </View>
            </View>
        </View>

        {/* Sign in page*/}
        <View style={{margin: 15, padding: 15, backgroundColor: '#353'}}>
          <View style={{marginLeft: 'auto', marginRight: 'auto'}}>
            <View>
              <Title>Welcome Back!</Title>
            </View>
            <View style={{width: 100, height: 100, marginLeft: 15}}>
              <Mobile />
            </View>
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
            
          {/* Last page*/}
        <View style={{margin: 15, padding: 15, backgroundColor: '#353'}}>
          <View style={{backgroundColor: '#383', padding: 5}}>
            <View style={{marginLeft: 'auto', marginRight: 'auto'}}>
              <View style={{padding: 5}}>
                <Avatar.Image source={require('./assets/icon.png')} />
              </View>
            </View>

            <View style={{marginLeft: 'auto', marginRight: 'auto', padding: 5}}>
              <Title style={{color: '#fff'}}>Yasin Muhammed Tukur</Title>
            </View>
          </View>

          <View style={{backgroundColor: '#272', padding: 5}}>
            <View style={{marginLeft: 'auto'}}>
              <Title>Good Afternoon</Title>
            </View>

            <View style={{marginLeft: 'auto', marginRight: 'auto'}}>
              <View style={{paddingBottom: 10}}>
                <Avatar.Icon name="Clock"  />
              </View>
            </View>
          </View>

          <View style={{marginRight: 'auto', paddingBottom: 15}}>
            <Title>Task List</Title>
          </View>

          <View>
            <View style={{backgroundColor: '#393', borderRadius: 5, padding: 10}}>
              <View style={{flexDirection: 'row', flex: 1}}>
                <Paragraph>Daily Task</Paragraph>
                <View style={{marginLeft: 'auto', marginRight: 0, paddingTop: 6}}>
                  <TouchableOpacity><Badge style={{backgroundColor: '#000'}}><MaterialIcons style={{color: '#fff'}} name="add"/></Badge></TouchableOpacity>
                </View>
            </View>
              
              <View style={{flexDirection: 'row'}}>
                <Checkbox
                  status={unchecked ? "checked" : "unchecked"} 
                  onPress={ () => {
                    setChecked(!unchecked)
                  }}/>
                  <View style={{marginTop: 7}}>
                    <Paragraph>Learn programming by 12:00 am</Paragraph>
                  </View>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Checkbox
                  status={unchecked ? "checked" : "unchecked"} 
                  onPress={ () => {
                    setChecked(!unchecked)
                  }}/>
                  <View style={{marginTop: 10}}>
                    <Paragraph>Learn cooking by 2:00 pm</Paragraph>
                  </View>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Checkbox
                  status={unchecked ? "checked" : "unchecked"} 
                  onPress={ () => {
                    setChecked(!unchecked)
                  }}/>
                  <View style={{marginTop: 10}}>
                    <Paragraph>Have launch by 3:00 pm</Paragraph>
                  </View>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Checkbox
                  status={unchecked ? "checked" : "unchecked"} 
                  onPress={ () => {
                    setChecked(!unchecked)
                  }}/>
                  <View style={{marginTop: 10}}>
                    <Paragraph>Learn react native by 4:30 pm</Paragraph>
                  </View>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Checkbox
                  status={unchecked ? "checked" : "unchecked"} 
                  onPress={ () => {
                    setChecked(!unchecked)
                  }}/>
                  <View style={{marginTop: 10}}>
                    <Paragraph>Go visit mum by 6:00 pm</Paragraph>
                  </View>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Checkbox
                  status={unchecked ? "checked" : "unchecked"} 
                  onPress={ () => {
                    setChecked(!unchecked)
                  }}/>
                  <View style={{marginTop: 10}}>
                    <Paragraph>Have dinner by 9:00 pm</Paragraph>
                  </View>
              </View>

            </View>

          </View>
        </View>

      </View>
      </Paper>
    );
}
