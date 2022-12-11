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
    dummyData
} from '../constants'

const VerticleFoodCard = ({containerStyle, item, onPress}) => {
  return (
    <TouchableOpacity
        style={{
            width:200,
            paddingVertical: SIZES.radius,
            alignItems: 'center',
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
            ...containerStyle

        }}
        onPress={onPress}
    >
    {/* Calories and Favourite */}
      <View style={{ flexDirection: 'row' }}>
         {/* Calories */}
         <View style={{ flex:1, flexDirection: 'row'}}>
            <Image 
                source={icons.calories}
                style={{ height: 30, width: 30 }}
            />
            <Text style={{ color: COLORS.darkGray2, ...FONTS.body5 }}>{item.calories} Calories</Text>
            {/* Favourite */}
            <Image 
                source={icons.love}
                style={{ height: 30, width: 30,tintColor: item.isFavorite ? COLORS.primary : COLORS.gray, position: 'absolute', right: 10  }}
            />
         </View>
         </View>
         {/* Image */}
         <View style={{ height:150,width:150,alignItems: 'center',justifyContent: 'center' }}>
            <Image 
                    source={item.image}
                    style={{ height: '100%', width: '100%'}}
                />
         </View>

         {/* Info */}
         <View
            style={{ 
                alignItems: 'center',
                marginTop: -20
             }}
         >
             <Text style={{ color: COLORS.black, ...FONTS.h3 }}>{item.name}</Text>
            <Text style={{ color: COLORS.darkGray2, ...FONTS.body5, textAlign: 'center' }}>{item.description}</Text>
            <Text style={{ color: COLORS.black, ...FONTS.h2, textAlign: 'center' }}>${item.price}</Text>
         </View>
     
    </TouchableOpacity>
  )
}

export default VerticleFoodCard