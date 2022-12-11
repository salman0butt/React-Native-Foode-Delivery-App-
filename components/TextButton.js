import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { FONTS, COLORS } from '../constants'

const TextButton = ({label, disabled, label2, label2Style, labelStyle, buttonContainerStyle, onPress}) => {
  return (
    <TouchableOpacity
        style={{ 
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.primary,
            ...buttonContainerStyle
         }}
        disabled={disabled}
        onPress={onPress}
    >
    <Text
        style={{color: COLORS.white, ...FONTS.h3, ...labelStyle}}
    >{label}</Text>

    {
      label2 && (
        <Text
          style={{ 
            flex: 1,
            textAlign: 'right',
            color: COLORS.white,
            ...FONTS.h3,
            ...label2Style
           }}
        >
          {label2}
        </Text>
      )
    }


    </TouchableOpacity>
  )
}

export default TextButton
