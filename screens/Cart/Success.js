import React, {useEffect} from 'react';
import {View, Text, Image, BackHandler, Alert} from 'react-native';
import {TextButton} from '../../components';
import {FONTS, SIZES, COLORS,images} from '../../constants';

const Success = ({navigation}) => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        return true;
      },
    );

    return () => {
      backHandler.remove();
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.white,
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={images.success}
          resize="contain"
          style={{
            width: 150,
            height: 150,
          }}
        />
        <Text style={{marginTop: SIZES.padding, ...FONTS.h1, color: COLORS.black}}>
          Congratulations!
        </Text>
        <Text
          style={{textAlign: 'center', color: COLORS.darkGray, ...FONTS.body3}}>
          Payment was successfully made!
        </Text>
      </View>

      <TextButton
        label="Done"
        buttonContainerStyle={{
          height: 55,
          marginBottom: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.primary,
        }}
        onPress={() => navigation.navigate('DeliveryStatus')}
      />
    </View>
  );
};

export default Success;
