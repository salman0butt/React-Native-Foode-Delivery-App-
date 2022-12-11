import {View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {FONTS, COLORS} from '../constants'

const TextIconButton = ({
    containerStyle,
    label,
    labelStyle,
    icon,
    iconStyle,
    onPress,
    iconPosition = 'LEFT',
}) => {
    return (
        <TouchableOpacity
            style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            ...containerStyle
        }}
            onPress={onPress}>
            {iconPosition === 'LEFT' && (
            <Image
                source={icon}
                style={{
                marginLeft: 5,
                width: 20,
                height: 20,
                tintColor: COLORS.black,
                ...iconStyle
            }}/>
            )}
            <Text
                style={{
                ...FONTS.body3,
                ...labelStyle
            }}>{label}</Text>

            {iconPosition === 'RIGHT' && (
            <Image
                source={icon}
                style={{
                marginLeft: 5,
                width: 20,
                height: 20,
                tintColor: COLORS.black,
                ...iconStyle
            }}/>
            )}
        </TouchableOpacity>
    )
}

export default TextIconButton