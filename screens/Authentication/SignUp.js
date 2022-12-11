import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {AuthLayout} from '../';
import {FONTS, SIZES, COLORS, icons} from '../../constants';
import {FormInput, TextButton, TextIconButton} from '../../components';
import {utils} from '../../utils';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  function isEnabledSignUp() {
    return (
      email !== '' &&
      emailError === '' &&
      username !== '' &&
      usernameError === '' &&
      password !== '' &&
      passwordError === ''
    );
  }

  return (
    <AuthLayout
      title="Getting Started"
      subTitle="Create an account to continue!"
      titleContainerStyle={{
        marginTop: SIZES.radius,
      }}>
      {/* Form input and Sign Up */}
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding,
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
          label="Username"
          containerStyle={{
            marginTop: SIZES.radius,
          }}
          onChange={value => {
            setUsername(value);
          }}
          value={username}
          inputStyle={{
            color: COLORS.black,
          }}
          errorMsg={usernameError}
          appendComponent={
            <View
              style={{
                justifyContent: 'center',
              }}>
              {/* Image */}
              <Image
                source={
                  username === '' || (username !== '' && usernameError === '')
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    username === ''
                      ? COLORS.gray
                      : username !== '' && usernameError === ''
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
          value={password}
          inputStyle={{
            color: COLORS.black,
          }}
          onChange={value => {
            utils.validatePassword(value, setPasswordError);
            setPassword(value);
          }}
          errorMsg={passwordError}
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

        {/* Sign Up & Sign In */}
        <TextButton
          label="Sign Up"
          disabled={isEnabledSignUp() ? false : true}
          buttonContainerStyle={{
            height: 55,
            alignItems: 'center',
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnabledSignUp()
              ? COLORS.primary
              : COLORS.transparentPrimray,
          }}
          onPress={() => navigation.navigate('Otp')}
        />

        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            justifyContent: 'center',
          }}>
          <Text style={{color: COLORS.darkGray, ...FONTS.body3}}>
            Already have and account?{' '}
          </Text>
          <TextButton
            label="Sign In"
            buttonContainerStyle={{
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
            onPress={() => navigation.goBack()}
          />
        </View>

        {/* Footer */}
        <View style={{marginTop: 20}}>
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

export default SignUp;
