import React, { useState, useEffect } from 'react'
import { View , Text, Touchable, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Audio } from 'expo-av'
export default function Home() {
  const lettersGrid = [['A','B','C'],['D','E','F'],['G','H']]
  const showGif = {
    "A" : {
        name : "Apple",
        src: require('../assets/apple.gif'),
        voice: require('../assets/a.mp3')
    },
    "B" : {
        name : "Bear",
        src: require("../assets/bear.gif"),
        voice: require('../assets/b.mp3')
    },
    "C" : {
        name : "Coin",
        src: require("../assets/coin.gif"),
        voice: require('../assets/c.mp3')
    },
    "D" : {
        name : "Duck",
        src: require("../assets/duck.gif"),
        voice: require('../assets/d.mp3')
    },
    "E" : {
        name : "Eye",
        src: require("../assets/eye.gif"),
        voice: require("../assets/e.mp3")
    },
    "F" : {
        name : "Food Truck",
        src: require("../assets/food-truck.gif"),
        voice: require("../assets/f.mp3")
    },
    "G" : {
        name : "Gift",
        src: require("../assets/gift.gif"),
        voice: require("../assets/g.mp3")

    },
    "H" : {
        name : "Horse",
        src: require("../assets/horse.gif"),
        voice: require("../assets/h.mp3")
    },
  }
  const [sound, setSound] = useState();
  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  async function playSound(path) {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( path
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }
  const [pressedBtn,setPressedBtn] = useState(null);
  return (
    <View style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }}>
        <View style={{
            height: '58%',
            width: '90%',
            backgroundColor: '#FCE7D2',
            borderRadius: 10,
            justifyContent: 'center', alignItems: 'center',
        }}>

            { pressedBtn ? 
            <View>
                <Image style={{
                height: 250, width: 250
                }}
                source={showGif[pressedBtn].src} />
            <Text style={{
                textAlign: 'center', fontSize: 24, fontWeight: 'bold',
                // fontFamily: 'Comic Sans MS'
            }}>{showGif[pressedBtn].name}</Text>
            </View> : <Text>Press a Button!!</Text> }
        </View>
        <View style = {{
            height: '40%',
            backgroundColor: 'white',
            flexDirection: 'column',
            width: '100vw',
            justifyContent: 'center',
            gap: 10
        }}>
            {
                lettersGrid.map(letters => 
                    (
                        <View key = {letters} style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 10,
                        }}>
                        {
                            letters.map(letter => (
                                <TouchableOpacity key = {letter} style={{
                                    height: 90,
                                    width: 90,
                                }} onPress={() => {
                                    setPressedBtn(letter)
                                    console.log("src => ",showGif[letter].src)
                                    playSound(showGif[letter].voice)
                                }}>
                                    <View style={{
                                        height: 90,
                                        width: 90,
                                        position: 'relative',
                                        backgroundColor: 'red',
                                        zIndex: 1,
                                        top: 2.5,
                                        left:6.5,
                                        borderRadius: 10
                                    }}></View>
                                    <View style={{
                                        height: 90,
                                        width: 90,
                                        backgroundColor: 'orange',
                                        zIndex: 2,
                                        position: 'relative',
                                        bottom : 96,
                                        right: 5.5,
                                    }}>
                                        <Text style={{
                                            height: '100%',
                                            marginTop: 30,
                                            textAlign: 'center',
                                            fontSize: 20,
                                            fontWeight: 'bold',
                                            // fontFamily: 'Comic Sans MS3',
                                        }}>{letter}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }
                        </View>
                    )
                )
            }
        </View>
    </View>
  )
}