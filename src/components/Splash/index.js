import { View, StyleSheet } from 'react-native';
import { ResizeMode, Video } from 'expo-av'
import { CommonActions, useNavigation } from '@react-navigation/native';
import { useRef } from 'react';

export default function Splash() {

    const navigation = useNavigation();
    const videoRef = useRef(null);

    const handleVideoEnd = () => {

        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes:[{ name: 'Welcome' }],
            })
        );
            
    };

 return (
        <Video
            style={StyleSheet.absoluteFill}
            ref={videoRef}
            resizeMode={ResizeMode.COVER}
            source={require('../../../assets/splash.mp4')}
            isLooping={false}
            shouldPlay={true}
            onPlaybackStatusUpdate={
                (status) => {
                    if (status.didJustFinish) {
                        handleVideoEnd();
                    }
                }
            }
        />
  );
}
