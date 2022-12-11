import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {FONTS, SIZES, COLORS, icons} from '../constants';

const RadioButton = ({
  containerStyle,
  label,
  labelStyle,
  isSelected,
  onPress,
  iconStyle,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        ...containerStyle,
      }}
      onPress={onPress}>
          <Image
            source={
                isSelected ? icons.check_on : icons.check_off
            }
            style={{
                marginLeft: 5,
                width: 20,
                height: 20,
                ...iconStyle,
            }}
          />
          <Text
            style={{ 
                marginLeft: SIZES.radius,
                color: COLORS.gray,
                ...FONTS.body3,
                ...labelStyle,
             }}
          >{label}</Text>
      </TouchableOpacity>
  );
};

export default RadioButton;
