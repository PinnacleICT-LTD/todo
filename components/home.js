import React from 'react';
import { Title, Appbar, Button, DefaultTheme, Provider as Paper, Paragraph} from 'react-native-paper';
import {View, ScrollView, Image} from 'react-native';

export default function Main({ navigation }){
const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#349955',
      accent: '#228823',
    },
  };

  const pressHandler = () => {
    navigation.navigate('getting_started');
  }
 
  
    return (
      <View theme={theme}>
        <ScrollView>
          <View style={{backgroundColor: '#6a6'}}>
            <Appbar.Header>
              <Appbar.Content title="TODO App" subtitle="Keep track of your daily work" />
              <Appbar.Action icon="dots-vertical" />
            </Appbar.Header>
            
            <View style={{margin: 15, padding: 15, backgroundColor: '#353'}}>
              <View style={{paddingBottom: 15}}>

                <View style={{marginLeft: 'auto', marginRight: 'auto'}}>
                  <Image source={require('../assets/icon.png')}  style={{width: 200, height: 200}} />
                </View>

                <View style={{marginLeft: 'auto', marginRight: 'auto'}}>
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
                    mode="contained"
                    onPress={pressHandler}>
                    Getting Started
                  </Button>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        </View>
    );
}