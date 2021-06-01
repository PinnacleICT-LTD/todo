import React, {useState} from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Title, Appbar, Avatar, Badge, Checkbox, DefaultTheme, Provider as Paper, Paragraph} from 'react-native-paper';
import MaterialIcons from '@expo/vector-icons';

export default function addTask() {

    const [unchecked, setChecked] = useState(false);
    const [unchecked1, setChecked1] = useState(false);
    const [unchecked2, setChecked2] = useState(false);
    const [unchecked3, setChecked3] = useState(false);
    const [unchecked4, setChecked4] = useState(false);
    const [unchecked5, setChecked5] = useState(false);

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
        <View style={{backgroundColor: '#6a6'}}>
        <Appbar.Header>
            <Appbar.Content title="TODO App" subtitle="Keep track of your daily work" />
            <Appbar.Action icon="dots-vertical" />
        </Appbar.Header>
        <ScrollView>
            <View style={{margin: 15, padding: 15, backgroundColor: '#353'}}>
                <View style={{backgroundColor: '#383', padding: 5}}>
                    <View style={{marginLeft: 'auto', marginRight: 'auto'}}>
                        <View style={{padding: 5}}>
                            <Avatar.Image source={require('../assets/icon.png')} />
                        </View>
                    </View>

                    <View style={{marginLeft: 'auto', marginRight: 'auto', padding: 5}}>
                        <Title style={{color: '#fff'}}>Yasin Muhammed Tukur</Title>
                    </View>
                </View>

                <View>
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

                <View style={{backgroundColor: '#393', borderRadius: 5, padding: 10}}>
                    <View style={{flexDirection: 'row'}}>
                        <Paragraph>Daily Task</Paragraph>
                        <View style={{marginLeft: 'auto', marginRight: 0, paddingTop: 6}}>
                        <Badge style={{backgroundColor: '#000'}}><Text style={{color: '#fff'}}>+</Text></Badge>
                        </View>
                    </View>
                    
                    <View style={{flexDirection: 'row'}}>
                    <Checkbox
                        status={unchecked1 ? "checked" : "unchecked"} 
                        onPress={ () => {
                        setChecked1(!unchecked1)
                        }}/>
                        <View style={{marginTop: 7}}>
                        <Paragraph>Learn programming by 12:00 am</Paragraph>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                    <Checkbox
                        status={unchecked2 ? "checked" : "unchecked"} 
                        onPress={ () => {
                        setChecked2(!unchecked2)
                        }}/>
                        <View style={{marginTop: 10}}>
                        <Paragraph>Learn cooking by 2:00 pm</Paragraph>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                    <Checkbox
                        status={unchecked3 ? "checked" : "unchecked"} 
                        onPress={ () => {
                        setChecked3(!unchecked3)
                        }}/>
                        <View style={{marginTop: 10}}>
                        <Paragraph>Have launch by 3:00 pm</Paragraph>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                    <Checkbox
                        status={unchecked4 ? "checked" : "unchecked"} 
                        onPress={ () => {
                        setChecked4(!unchecked4)
                        }}/>
                        <View style={{marginTop: 10}}>
                        <Paragraph>Learn react native by 4:30 pm</Paragraph>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Checkbox
                            status={unchecked5 ? "checked" : "unchecked"} 
                            onPress={ () => {
                            setChecked5(!unchecked5)
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
    </ScrollView>
    </View>
    );
}
