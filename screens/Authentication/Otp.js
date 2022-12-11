import React, {useState, useEffect} from 'react';
import {
    View,
    Text
} from 'react-native';
import {FONTS, SIZES, COLORS} from '../../constants';
import {AuthLayout} from "../";
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {TextButton} from '../../components'

const Otp = ({navigation}) => {

    const [timer, setTimer] = useState(60);


    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prevTimer) => {
                if(prevTimer > 0) {
                    return prevTimer - 1;
                }else {
                    return prevTimer;
                }
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [timer]);

    return (
        <AuthLayout
            title="OTP Authentication"
            subTitle="An authentication code has been sent to salman@gmail.com"
            titleContainerStyle={{ 
                marginTop: SIZES.padding * 2,
             }}
        >

        {/* OTP input */}
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding * 2
                }}
            >
                <OTPInputView 
                    pinCount={4}
                    style={{
                        width: '100%',
                        height: 50
                    }}
                    codeInputFieldStyle={{
                        width: 65,
                        height: 65,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.lightGray2,
                        color: COLORS.black,
                        ...FONTS.h3
                    }}
                    onCodeFilled={(code) => {
                        console.log(code);
                    }}
                />

                {/* Countdown Timer */}
                <View
                style={{ 
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: SIZES.padding
                 }}
                >
                    <Text style={{ 
                        color: COLORS.darkGray,
                        ...FONTS.body3
                     }}>Didn't receive code?</Text>
                     <TextButton
                        label={`Resend in ${timer}s`}
                        disabled={timer === 0 ? false : true}
                        buttonContainerStyle={{
                            marginLeft: SIZES.base,
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.h3
                        }}
                        onPress={() => setTimer(60)}
                     />
                </View>

            </View>
            {/* Footer */}
            <View>
                <TextButton
                    label="Continue"
                    buttonContainerStyle={{
                        height: 50,
                        alignItems: 'center',
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary,
                    }}
                    onPress={() => navigation.navigate("Home")}
                />

                <View
                    style={{ 
                        marginTop: SIZES.padding,
                        alignItems: 'center'
                     }}
                >
                <Text 
                style={{ 
                    color: COLORS.darkGray,
                    ...FONTS.body3
                 }}
                >By signing up, you agree to our.</Text>
                <TextButton
                    label="Terms and Conditions"
                    buttonContainerStyle={{
                        backgroundColor: null,
                    }}
                    labelStyle={{
                        color: COLORS.primary,
                        ...FONTS.body3
                    }}
                    onPress={() => console.log('Terms and Conditions')}
                 />

                </View>
            </View>

        </AuthLayout>
    )
}

export default Otp;