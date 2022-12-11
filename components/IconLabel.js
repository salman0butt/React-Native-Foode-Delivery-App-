import {View, Text, Image} from 'react-native';
import React from 'react';
import {FONTS, SIZES, COLORS, icons} from '../constants';

const IconLabel = ({containerStyle, icon, iconStyle, label, labelStyle}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingVerticle: SIZES.base,
        paddingHoirizontal: SIZES.radius,
        borderRadius: SIZES.radius,
        ...containerStyle,
      }}>
      <Image
        source={icon}
        style={{
          width: 20,
          height: 20,
          ...iconStyle,
        }}
      />
      <Text
        style={{
          marginLeft: SIZES.base,
          ...FONTS.body3,
          ...labelStyle,
        }}>
        {label}
      </Text>
    </View>
  );
};

export default IconLabel;
