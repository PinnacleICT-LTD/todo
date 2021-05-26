import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';

export default function Welcome(){
    const [inputText1, setInputText1] = useState('');
    return (
        <View>
            <View>
                <TextInput
                    mode='outlined'
                    label='First Name'
                    placeholder='First Name'
                />
            </View>
        </View>
    );
}