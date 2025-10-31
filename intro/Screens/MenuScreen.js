import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesScreen'
import TextInputview from './TextInput';
import ImageBack from './ImageBack';
import Scroll from './Scroll';
import ActIndicator from './ActIndicator';
import FLySL from './FySL';
import Modal from './ModalScreen';
import bottomsheet from './BottonS';
import BS from './BottonS';
import ActRepaso from './Repaso';



export default function MenuScreen() {

    const[screen,setCreen]=useState('menu');

    switch(screen){
        case'contador':
            return<ContadorScreen/>
        case'botones':
            return<BotonesScreen/>
        case 'TextInput':
            return<TextInputview/>
        case 'image':
            return<ImageBack/>
        case 'scroll':
            return<Scroll/>
        case 'Act':
            return<ActIndicator/>
        case 'list':
            return<FLySL/>
        case 'modal':
            return<ModalScreen/>
        case 'bottom':
            return<BS/>
        case 'repaso':
            return<ActRepaso/>
        case 'menu':
            default:
                return (
                    <View>
                    <Text> Menu de Practicas </Text>
                    <Button onPress={()=>setCreen('contador')} title='Pract: Contador'/>
                    <Button onPress={()=>setCreen('botones')} title='Pract:Buttons'/>
                    <Button onPress={()=>setCreen('TextInput')} title='Pract:TextInput'/>
                    <Button onPress={()=>setCreen('image')} title='Pract:ImageBackground'/>
                    <Button onPress={()=>setCreen('scroll')} title='Pract: ScrollView'/>
                    <Button onPress={()=>setCreen('Act')} title='Pract: Activity Indicator'/>
                    <Button onPress={()=>setCreen('list')} title='Pract: FlatList y Section List'/>
                    <Button onPress={()=>setCreen('modal')} title='Pract: Modal'/>
                    <Button onPress={()=>setCreen('bottom')} title='Pract: Bottom Sheet'/>
                    <Button onPress={()=>setCreen('repaso')} title='Pract: Repaso'/>
                    </View>
                )
    }

  }


const styles = StyleSheet.create({})
