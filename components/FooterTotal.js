import {View, Text, Platform} from 'react-native';
import React from 'react';
import {TextButton, LineDivider} from '../components';
import {FONTS, SIZES, COLORS, icons} from '../constants';
import LinearGradient from 'react-native-linear-gradient';

const FooterTotal = ({subTotal, shippingFee, total, onPress}) => {
  return (
    <View>
      {/* Shadow */}
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={[COLORS.transparent, COLORS.lightGray1]}
        style={{
          position: 'absolute',
          top: -15,
          left: 0,
          right: 0,
          height: Platform.OS === 'ios' ? 200 : 50,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      />

      {/* Order Details */}
      <View
        style={{
          padding: SIZES.padding,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: COLORS.white,
        }}>
        {/* Subtotal */}
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text style={{flex: 1, ...FONTS.body3, color: COLORS.darkGray}}>Subtotal</Text>
          <Text style={{...FONTS.h3, color: COLORS.darkGray}}>${subTotal.toFixed(2)}</Text>
        </View>

        {/* Shipping Fee */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.base,
            marginBottom: SIZES.padding,
          }}>
          <Text style={{flex: 1, ...FONTS.body3, color: COLORS.darkGray}}>Shipping Fee</Text>
          <Text style={{...FONTS.h3, color: COLORS.darkGray}}>${shippingFee.toFixed(2)}</Text>
        </View>

        {/* Line */}
        <LineDivider/>

        {/* Total */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.padding,
          }}>
          <Text style={{flex: 1, ...FONTS.h2, color: COLORS.black}}>Total:</Text>
          <Text style={{...FONTS.h2 , color: COLORS.black}}>${total.toFixed(2)}</Text>
        </View>

        {/* Button */}
        <TextButton
            buttonContainerStyle={{
                height: 60,
                marginTop: SIZES.padding,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.primary,
            }}
            label="Place Your Order"
            onPress={onPress}
        />

      </View>
    </View>
  );
};

export default FooterTotal;
