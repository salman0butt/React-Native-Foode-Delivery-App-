import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {AuthLayout} from '../';
import {FONTS, SIZES, COLORS, icons} from '../../constants';
import {utils} from '../../utils';
import {
  FormInput,
  CustomSwitch,
  TextButton,
  TextIconButton,
} from '../../components';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const [showPass, setShowPass] = useState(false);
  const [saveMe, setSaveMe] = useState(false);

  const isEnabledSignIn = () => {
    return email !== '' && password !== '' && emailError === '';
  };

  return (
    <AuthLayout
      title="Let's Sign You In"
      subTitle="Welcome back, you've been missed">
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding * 2,
        }}>
        {/* Form Inputs */}
        <FormInput
          label="Email"
          keyboardType="email-address"
          autoCompleteType="email"
          value={email}
          onChange={value => {
            // validate email
            utils.validateEmail(value, setEmailError);
            setEmail(value);
          }}
          inputStyle={{
            color: COLORS.black,
          }}
          errorMsg={emailError}
          appendComponent={
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Image
                source={
                  email === '' || (email !== '' && emailError === '')
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    email === ''
                      ? COLORS.gray
                      : email !== '' && emailError === ''
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />

        <FormInput
          label="Password"
          secureTextEntry={!showPass}
          autoCompleteType="password"
          containerStyle={{
            marginTop: SIZES.radius,
          }}
          inputStyle={{
            color: COLORS.black,
          }}
          onChange={value => setPassword(value)}
          value={password}
          appendComponent={
            <TouchableOpacity
              style={{
                width: 40,
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
              onPress={() => setShowPass(!showPass)}>
              <Image
                source={showPass ? icons.eye_close : icons.eye}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: COLORS.gray,
                }}
              />
            </TouchableOpacity>
          }
        />

        {/* Save me & Forget Password */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            justifyContent: 'space-between',
          }}>
          <CustomSwitch value={saveMe} onChange={value => setSaveMe(value)} />

          <TextButton
            label="Forgot Password?"
            buttonContainerStyle={{
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.gray,
              ...FONTS.body4,
            }}
            onPress={() => {
              navigation.navigate('ForgotPassword');
            }}
          />
        </View>

        {/* Sign In */}
        <TextButton
          label="Sign In"
          disabled={isEnabledSignIn() ? false : true}
          buttonContainerStyle={{
            height: 55,
            alignItems: 'center',
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnabledSignIn() ? COLORS.primary : COLORS.gray,
          }}
          onPress={() => {navigation.navigate('Home')}}
        />

        {/* Sign Up */}

        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: COLORS.darkGray,
              ...FONTS.body3,
            }}>
            Don't have an account?
          </Text>
          <TextButton
            label="Sign Up"
            buttonContainerStyle={{
              marginLeft: 3,
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          />
        </View>

        {/* Footer */}
        <View style={{marginTop: 40}}>
          {/* Facebook */}
          <TextIconButton
            containerStyle={{
              height: 50,
              alignItems: 'center',
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.blue,
            }}
            icon={icons.fb}
            iconPosition="LEFT"
            iconStyle={{
              tintColor: COLORS.white,
            }}
            label="Continue with Facebook"
            labelStyle={{
              marginLeft: SIZES.radius,
              color: COLORS.white,
            }}
            onPress={() => {
              console.log('facebook');
            }}
          />
          {/* Google */}

          <TextIconButton
            containerStyle={{
              height: 50,
              alignItems: 'center',
              marginTop: SIZES.radius,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.lightGray2,
            }}
            icon={icons.google}
            iconPosition="LEFT"
            iconStyle={{
              tintColor: null,
            }}
            label="Continue with Google"
            labelStyle={{
              marginLeft: SIZES.radius,
              color: COLORS.darkGray,
            }}
            onPress={() => {
              console.log('Google');
            }}
          />
        </View>
      </View>
    </AuthLayout>
  );
};

export default SignIn;
