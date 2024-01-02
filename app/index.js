import React, { useState } from 'react'
import { View , Text, Touchable, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import Sound from 'react-native-sound';
export default function Home() {
  const lettersGrid = [['A','B','C'],['D','E','F'],['G','H']]
  const showGif = {
    "A" : {
        name : "Apple",
        src: "./assets/apple.gif",
        voice: "a.mp3"
    },
    "B" : {
        name : "Bear",
        src: "./assets/Bear.gif",
        voice: "b.mp3"
    },
    "C" : {
        name : "Coin",
        src: "./assets/coin.gif",
        voice: "c.mp3"
    },
    "D" : {
        name : "Duck",
        src: "./assets/duck.gif",
        voice: "d.mp3"
    },
    "E" : {
        name : "Eye",
        src: "./assets/eye.gif",
        voice: "e.mp3"
    },
    "F" : {
        name : "Food Truck",
        src: "./assets/food-truck.gif",
        voice: "f.mp3"
    },
    "G" : {
        name : "Gift",
        src: "./assets/gift.gif",
        voice: "g.mp3"

    },
    "H" : {
        name : "Horse",
        src: "./assets/horse.gif",
        voice: "h.mp3"
    },
  }
//   const playSound = (path) => {
//     var whoosh = new Sound(path, Sound.MAIN_BUNDLE, (error) => {
//         if (error) {
//           console.log('failed to load the sound', error);
//           return;
//         }
//         // loaded successfully
//         console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
      
//         // Play the sound with an onEnd callback
//         whoosh.play((success) => {
//           if (success) {
//             console.log('successfully finished playing');
//           } else {
//             console.log('playback failed due to audio decoding errors');
//           }
//         });
//       });
//   }
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
            height: '58vh',
            width: '90%',
            backgroundColor: '#FCE7D2',
            borderRadius: 10,
            justifyContent: 'center', alignItems: 'center',
        }}>

            { pressedBtn ? 
            <View>
                <Image style={{
                height: '250px', width: '250px'
            }}source={showGif[pressedBtn].src} />
            <Text style={{
                textAlign: 'center', fontSize: '24px', fontWeight: 'bold' , fontFamily: 'Comic Sans MS',
            }}>{showGif[pressedBtn].name}</Text>
            </View> : <Text>Press a Button!!</Text> }
        </View>
        <View style = {{
            height: '40vh',
            backgroundColor: 'white',
            flexDirection: 'column',
            width: '100vw',
            justifyContent: 'center',
            gap: '20px'
        }}>
            {
                lettersGrid.map(letters => 
                    (
                        <View key = {letters} style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '20px'
                        }}>
                        {
                            letters.map(letter => (
                                <TouchableOpacity key = {letter} style={{
                                    position: 'relative',
                                }} onPress={() => {
                                    setPressedBtn(letter)
                                    // playSound(showGif[letter].voice)
                                }}>
                                    <View style={{
                                        height: '90px',
                                        width: '90px',
                                        backgroundColor: 'orange',
                                        zIndex: 2,
                                        // position: 'absolute',
                                    }}>
                                        <Text style={{
                                            height: '100%',
                                            marginTop: '30px',
                                            textAlign: 'center',
                                            fontSize: '20px',
                                            fontWeight: 'bold',
                                            fontFamily: 'Comic Sans MS',
                                        }}>{letter}</Text>
                                    </View>
                                    <View style={{
                                        height: '90px',
                                        width: '90px',
                                        position: 'absolute',
                                        backgroundColor: 'red',
                                        zIndex: 1,
                                        left: '6.5px',
                                        top: '6.5px'
                                    }}></View>
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