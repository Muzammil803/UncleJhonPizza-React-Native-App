
import * as React from 'react';
import { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import NextBtn from '../buttomn/nextbtn';
import LinearGradient from 'react-native-linear-gradient';
import Pizzaimage01 from '../../assets/pizzaAssetsthinCrust.png'

const HomeScreen2 = () => {
    const [thinStyleBox, setThinStyleBox] = useState(true)
    const [thikStyleBox, setThikStyleBox] = useState(false)
    const [thiknessPrice, setThiknessPrice] = useState('$12.00')
    const navigation = useNavigation();
    const navigateTo = () => {
        navigation.navigate('home3')
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
            <View>
                <View style={styles.halfBg}>
                    <LinearGradient colors={['#FFA360', '#F5313F']}
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 0 }}
                        style={{ width: "100%", height: '100%' }}>
                        <View style={styles.headerMain}>
                            <Text style={styles.headerTitle}>Create Your Pizza</Text>
                            <Text style={styles.headerPrice}>{thiknessPrice}</Text>

                        </View>
                        <Text style={{ marginLeft: 20, color: 'rgba(255, 255, 255, 0.3)', fontSize: 10 }}>MEDIUM , SIZE , CRUST , TOPPING</Text>

                    </LinearGradient>
                </View>
                <View style={{
                    position: 'absolute',
                    width: 401.74,
                    height: 387,
                    borderColor: '#DADAE5',
                    borderWidth: 0.5,
                    borderSizing: 'solid',
                    borderRadius: 180,
                    left: -20,
                    top: 56,
                    zIndex: -2,
                    backgroundColor: '#fffg'
                }}>

                </View>
                <View style={{
                    position: 'absolute',
                    width: 324,
                    height: 324,
                    borderColor: '#F4F4F4',
                    borderWidth: 0.4,
                    borderSizing: 'solid',
                    borderRadius: 162,
                    left: 20,
                    top: 80,
                    backgroundColor: 'rgba(255, 255, 255, 0.8)  ',
                    backDropFilter: 'blur(4px)'
                }}>

                </View>
                <View style={{
                    position: 'absolute',
                    width: 274,
                    height: 274,
                    borderColor: '#F4F4F4',
                    borderWidth: 0.4,
                    borderSizing: 'solid',
                    boxShadow: '0px 4px 15px rgba(218, 218, 229, 0.2)',
                    borderRadius: 162,
                    left: 44,
                    top: 104,
                    backgroundColor: 'white',
                }}>
                </View>
                <Image source={require('../../assets/pizzaAssetsthinCrust.png')} style={{ position: 'absolute', top: 90, left: 10 }} />
                <Text style={{
                    width: 48.13,
                    height: 22.79, backgroundColor: '#DADAE5',
                    textAlign: 'center', borderRadius: 10, position: 'absolute',
                    textAlignVertical: 'center',
                    left: 168, top: 430, color: '#A0A8CC', fontSize: 10
                }}>
                    +$2.00"
                </Text>
                <View style={styles.sizeBox}>
                    <Text style={styles.sizeText}>Choose your <Text style={{ fontWeight: 'bold' }}>Crust</Text></Text>
                    <View style={styles.sizeBtnBox}>

                        {/* <Text style={styles.sizeBtn}>Small</Text> */}
                        <View style={styles.sizeBtn}>
                            {thinStyleBox ? <LinearGradient colors={['#FFA360', '#F5313F']}
                                start={{ x: 1, y: 0 }}
                                end={{ x: 0, y: 0 }}
                                style={{
                                    width: "100%", height: '100%', borderRadius: 18,
                                    alignItems: 'center',
                                    boxShadow: '0 6 25 rgba(245, 49, 63, 0.9)',
                                    justifyContent: 'center',
                                }}>

                                <Text onPress={() => { setThinStyleBox(true),setThikStyleBox(null) }} style={{ fontWeight: 'bold', color: 'white' }}>
                                    Thin
                                </Text>
                            </LinearGradient> :
                                <Text onPress={() => { setThinStyleBox(true),setThikStyleBox(null),setThiknessPrice("$12.00") }} style={styles.sizeBtn}>Thin</Text>


                            }
                        </View>
                        <View style={styles.sizeBtn}>
                            {thikStyleBox ? <LinearGradient colors={['#FFA360', '#F5313F']}
                                start={{ x: 1, y: 0 }}
                                end={{ x: 0, y: 0 }}
                                style={{
                                    width: "100%", height: '100%', borderRadius: 18,
                                    alignItems: 'center',
                                    boxShadow: '0 6 25 rgba(245, 49, 63, 0.9)',
                                    justifyContent: 'center',
                                }}>

                                <Text onPress={() => { setThikStyleBox(true),setThinStyleBox(null) }} style={{ fontWeight: 'bold', color: 'white' }}>
                                    Thick
                                </Text>
                            </LinearGradient> :
                                <Text onPress={() => { setThikStyleBox(true) ,setThinStyleBox(null),setThiknessPrice("$14.00") }} style={styles.sizeBtn}>Thick</Text>


                            }
                        </View>

                    </View>
                </View>
            </View>
            <NextBtn val='NEXT' task={navigateTo} />

        </View>
    )

}

const styles = StyleSheet.create({
    halfBg: {
        height: 247,
        backgroundColor: "yellow"
    },
    headerMain: {
        flexDirection: 'row'
    },
    headerTitle: {
        color: 'white',
        fontFamily: 'roboto',
        fontSize: 25,
        marginTop: 20,
        marginLeft: 20,

    },
    headerPrice: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 20,
        marginLeft: 59,
    },
    ellipse3: {
        borderSizing: 'border-box',
        width: 402,
        heght: 387,
        border: '0.5px solid #DADAE5',
        backgroundColor: 'yellow',
        borderRadius: '100%',
        position: 'absolute',
        top: 120


    },
    sizeBox: {
        width: 325,
        height: 120,
        marginTop: 220,
        marginHorizontal: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 20
    },
    sizeText: {
        alignSelf: 'center',
        marginTop: 10,
        fontSize: 20,
        color: '#6D6E9C',
        fontFamily: 'roboto',


    },
    sizeBtnBox: {
        width: '100%',
        height: 40,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-evenly"

    },
    sizeBtn: {
        width: 90,
        height: 38,
        // backgroundColor:'white',
        // backgroundColor:'yellow',
        borderRadius: 18,
        justifyContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 15,
    }


})

export default HomeScreen2;