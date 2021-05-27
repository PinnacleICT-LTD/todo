import React, {useState} from 'react';
import {Text, TextInput, Title, Avatar, Appbar, Button, Checkbox} from 'react-native-paper';
import {View, Image} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function Welcome(){
  
  const [unchecked, setChecked] = useState(false);
    return (
      <View style={{backgroundColor: '#787'}}>
          <Appbar.Header>
            <Appbar.Content title="TODO App" subtitle="Keep track of your daily work" />
            <Appbar.Action icon="dots-vertical" />
          </Appbar.Header>
          
            {/* Langin Page*/}
            <View style={{margin: 15, padding: 15, backgroundColor: '#7f7'}}>
              <View style={{marginLeft: 'auto', marginRight: 'auto', paddingBottom: 15}}>
                <Title>Getting things done with TODO</Title>
              </View>

              <View style={{marginLeft: 'auto', marginRight: 'auto'}}>
                <Text>
                  ajjhdjkbfjkdvbrubrgr8 g8g9rhghrgiorhvivhihvruihreuih weuhweu iweiufiebfaubv v vbuiaugryufgyugrfuwgfwyugfwefgenwfweifeufghufbdshvjs b uyeuyf yveyuvbe uewbvdbs dhs vduyeufgyugfyeuqgfuiftiegw78ftew8fte8yefy ef gfwfgd kdvbds vdguewgf78ewtf7e98ep89qyp9dg;iF[FEFV NIIO;DSVVBSIUGUEFjkbvuivauigrfbuibuire 
                  uburebkyurfhjsvdburbfyufaeyvfyrvfwyeuf yuyegfueyfewb kvguf weueyegwfuewkf,jdv,jyuvfyueyewfugefiueywevddsh nc ydfew feweI;ioh[ewpoewgbuid fduy uifiuagc bf ewifewuifweuig ewiwege
                  hjbkgiuefyuewdjbcudv]]
                </Text>
              </View>

              {/* The Getting started Button*/}
              <View style={{marginTop: 50, marginBottom: 10, width: 250, marginLeft: 'auto', marginRight: 'auto'}}>
                <Button
                  mode="contained">
                  Getting Started
                </Button>
              </View>

            </View>

          <View style={{margin: 15, backgroundColor: '#7f7'}}>

            {/* The welcome page with form to register*/}
            <View style={{marginBottom: 15}}>
              <View>
                <Image source={require('./assets/mobile.png')} />
                <Avatar.Image source={require('./assets/icon.png')} size="90" />
              </View>

              <View style={{marginLeft: 'auto', marginRight: 'auto', padding: 10}}>
                <Title>Welcome onboard</Title>
              </View>

              <View style={{marginLeft: 'auto', marginRight: 'auto', padding: 10}}>
                <Text>Let's help you meet up your tasks</Text>
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
              <View style={{marginTop: 50, marginBottom: 10, width: 250, marginLeft: 'auto', marginRight: 'auto'}}>
                <Button
                  mode="contained">
                  Register
                </Button>
              </View>

              {/* if already have account sign in instead</Text*/}
              <View style={{marginLeft: 'auto', marginRight: 'auto'}}>
                <Text>Already have an account? 
                  <Button
                    mode='flat'>
                    Sign in
                  </Button>
                </Text>
              </View>
            </View>
        </View>
        {/* Sign in page*/}
        <View style={{margin: 15, padding: 15, backgroundColor: '#7f7'}}>
          <View style={{marginLeft: 'auto', marginRight: 'auto'}}>
            <View>
            
          {/* Last page*/}
        <View style={{margin: 15, padding: 15, backgroundColor: '#7f7'}}>
          <View style={{marginLeft: 'auto', marginRight: 'auto'}}>
            <View>
              <Avatar.Image source={require('./assets/icon.png')} />
            </View>
          </View>

          <View style={{marginLeft: 'auto', marginRight: 'auto', padding: 5}}>
            <Title>Yasin Muhammed Tukur</Title>
          </View>

          <View style={{marginLeft: 'auto'}}>
            <Title>Good Afternoon</Title>
          </View>

          <View style={{marginLeft: 'auto', marginRight: 'auto'}}>
            <View>
              <Avatar.Icon name="date" />
            </View>
          </View>

          <View style={{marginRight: 'auto', paddingBottom: 15}}>
            <Title>Task List</Title>
          </View>

          <View>
            <View>
              <View style={{flexDirection: 'row'}}>
                <Text>Daily Task</Text>
                <View style={{marginLeft: 'auto', height: 10, width: 10, borderRadius: 5}}>
                  <MaterialIcons name="add" size="20"/>
                </View>
            </View>
              
              <View style={{flexDirection: 'row'}}>
                <Checkbox
                  status={unchecked ? "checked" : "unchecked"} 
                  onPress={ () => {
                    setChecked(!unchecked)
                  }}/>
                  <View style={{marginTop: 10}}>
                    <Text>Learn programming by 12:00 am</Text>
                  </View>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Checkbox
                  status={unchecked ? "checked" : "unchecked"} 
                  onPress={ () => {
                    setChecked(!unchecked)
                  }}/>
                  <View style={{marginTop: 10}}>
                    <Text>Learn cooking by 2:00 pm</Text>
                  </View>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Checkbox
                  status={unchecked ? "checked" : "unchecked"} 
                  onPress={ () => {
                    setChecked(!unchecked)
                  }}/>
                  <View style={{marginTop: 10}}>
                    <Text>Have launch by 3:00 pm</Text>
                  </View>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Checkbox
                  status={unchecked ? "checked" : "unchecked"} 
                  onPress={ () => {
                    setChecked(!unchecked)
                  }}/>
                  <View style={{marginTop: 10}}>
                    <Text>Learn react native by 4:30 pm</Text>
                  </View>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Checkbox
                  status={unchecked ? "checked" : "unchecked"} 
                  onPress={ () => {
                    setChecked(!unchecked)
                  }}/>
                  <View style={{marginTop: 10}}>
                    <Text>Go visit mum by 6:00 pm</Text>
                  </View>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Checkbox
                  status={unchecked ? "checked" : "unchecked"} 
                  onPress={ () => {
                    setChecked(!unchecked)
                  }}/>
                  <View style={{marginTop: 10}}>
                    <Text>Have dinner by 9:00 pm</Text>
                  </View>
              </View>

            </View>

          </View>
        </View>

      </View>
    );
}
