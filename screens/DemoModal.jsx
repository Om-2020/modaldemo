import { View, Text, Modal, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import React from 'react'
import { useState } from "react";
import { responsiveHeight } from 'react-native-responsive-dimensions';

const DemoModal = () => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{
                width: '70%',
                height: '10%',
                backgroundColor: 'red',
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20
            }} onPress={() => { setModalVisible(true) }}>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>Show Modal</Text>
            </TouchableOpacity>

            <Modal visible={modalVisible} transparent>

                <View style={{
                    height: '100%',
                    width: '100%',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>

                    <View style={{
                        height: '50%',
                        width: '80%',
                        backgroundColor: '#fff',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 5
                    }}>
                        <Image source={require('../assets/add-user.png')} style={{height:60,width:60,borderRadius:30,margin:10,marginBottom:35}}></Image>

                        <Text style={{ color: 'black', fontSize: 20 }}>You are Just One Step Away!</Text>
                        <Text style={{ color: 'black', fontSize: 15 }}>Want Access? We just need Your Email Adress</Text>
                        <TextInput
                            placeholder="email"
                            keyboardType="email-address"
                        />

                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={{
                                margin: 10,
                                height: 40,
                                width: 100,
                                borderRadius: 20,
                                backgroundColor: 'red',
                                alignContent: 'center',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }} onPress={()=>{
                                setModalVisible(false);
                            }}>
                                <Text style={{ alignSelf: 'center' }}>No Thanks</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                margin: 10,
                                height: 40, 
                                width: 100, 
                                borderRadius: 20, 
                                backgroundColor: 'red', 
                                alignContent: 'center', 
                                alignItems: 'center', 
                                justifyContent: 'center'
                            }} onPress={()=>{Alert.alert("Do sign up with me")}}>
                                <Text style={{ alignSelf: 'center' }}> Sign me up! </Text>
                            </TouchableOpacity>

                        </View>

                    </View>

                </View>

            </Modal>
        </View>
    )
}

export default DemoModal;