import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Image,
} from 'react-native';
import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
} from '../constants'

const HorizontalFoodCard = ({containerStyle, imageStyle, item, onPress}) => {
  return (
    <TouchableOpacity
        style={{ 
            flexDirection: "row",
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
            ...containerStyle,
         }}
        onPress={onPress}
    > 
      {/* Image */}
         <Image
            source={item.image}
            style={imageStyle}
         />

      {/* info */}
      <View
        style={{flex:1}}
      >
      {/* Name */}
      <Text
        style={{ ...FONTS.h3, fontSize: 17, color: '#000' }}
      >{item.name}</Text>

      {/* Description */}
      <Text
        style={{ color: COLORS.darkGray2, ...FONTS.body4 }}
      >{item.description}</Text>

      {/* Price */}
      <Text
        style={{ marginTop: SIZES.base, ...FONTS.h2, color: '#000' }}
      >${item.price}</Text>

      </View>

      {/* Calories */}
      <View
        style={{ flexDirection: 'row', position: 'absolute', top: 5, right: SIZES.radius }}
      >
        <Image 
            source={icons.calories}
            style={{ height: 30, width: 30 }}
        />
        <Text style={{ color: COLORS.darkGray2, ...FONTS.body5 }}>{item.calories} Calories</Text>
      </View>
    </TouchableOpacity>
  )
}

export default HorizontalFoodCard