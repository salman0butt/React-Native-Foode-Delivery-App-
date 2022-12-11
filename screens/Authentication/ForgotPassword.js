import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import {AuthLayout} from "../";
import {FONTS, SIZES, COLORS, icons} from '../../constants';
import { FormInput, TextButton } from '../../components';
import { utils } from '../../utils';

const ForgotPassword = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    function isEnabledEmail() {
        return email !== "" && emailError === "";
    }

    return (
        <AuthLayout
            title="Password Recovery"
            subTitle="Please enter your email address to recover your password"
            titleContainerStyle={{
                marginTop: SIZES.padding * 2,
            }}
        >
        {/* Form Inputs */}
        <View
        style={{
            flex: 1,
            marginTop: SIZES.padding * 2,
        }}
        >
        
        <FormInput 
             label="Email"
             keyboardType="email-address"
             autoCompleteType="email"
             onChange={(value) => {
                 // validate email
                 utils.validateEmail(value, setEmailError);
                 setEmail(value);
             }}
             inputStyle={{ 
                 color: COLORS.black
              }}
             errorMsg={emailError}
             appendComponent={
                <View
                style={{
                    justifyContent: 'center',
                }}
                >
                 <Image
                source={
                  email === "" || (email !== "" && emailError === "")
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    email === ""
                      ? COLORS.gray
                      : email !== "" && emailError === ""
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
                </View>
             }
         />

             {/* Button */}
             <TextButton
                 label="Send Email"
                 disabled={isEnabledEmail() ? false : true}
                 buttonContainerStyle={{
                     height: 55,
                     alignItems: 'center',
                     marginTop: SIZES.padding,
                     borderRadius: SIZES.radius,
                     backgroundColor: isEnabledEmail() ? COLORS.primary : COLORS.transparentPrimray,
                 }}
                 onPress={() => navigation.goBack()}
             />
        </View>
       
        </AuthLayout>
    )
}

export default ForgotPassword;