import React from 'react';
import {View, Text, Image} from 'react-native';
import piglet from './piglet.jpg';

export default function TodoItem(props) {
    return (
        <View>
            <Image 
                style={ {width: 64, height: 64} }
                source={piglet}
            />
            <Text>{props.message}</Text>
        </View>
    )
}