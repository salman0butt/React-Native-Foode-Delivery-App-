import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  Header,
  IconButton,
  FormInput,
  CardItem,
  FooterTotal,
} from '../../components';
import {FONTS, SIZES, COLORS, icons, images, dummyData} from '../../constants';

const Checkout = ({navigation, route}) => {
  const [selectedCard, setSelectCard] = useState(null);

  useEffect(() => {
    let {selectedCard} = route.params;
    setSelectCard(selectedCard);
  }, []);

  function renderHeader() {
    return (
      <Header
        title="CHECKOUT"
        containerStyle={{
          height: 50,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
        }}
        leftComponent={
          <IconButton
            icon={icons.back}
            containerStyle={{
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderRadius: SIZES.radius,
              borderColor: COLORS.gray2,
            }}
            iconStyle={{
              width: 20,
              height: 20,
              tintColor: COLORS.gray2,
            }}
            onPress={() => console.log('back!')}
          />
        }
        rightComponent={
          <View
            style={{
              width: 40,
            }}
          />
        }
      />
    );
  }

  function renderMyCards() {
    return (
      <View>
        {selectedCard &&
          dummyData.myCards.map((item, index) => {
            return (
              <CardItem
                key={`MyCard-${item.id}`}
                item={item}
                isSelected={
                  `${selectedCard?.key}-${selectedCard?.id}` ==
                  `MyCard-${item.id}`
                }
                onPress={() => setSelectCard({...item, key: 'MyCard'})}
              />
            );
          })}
      </View>
    );
  }

  function renderDeliveryAddress() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}>
        <Text style={{...FONTS.h3, color: COLORS.black}}>Delivery Address</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: SIZES.radius,
            paddingVertical: SIZES.padding,
            paddingHorizontal: SIZES.padding,
            borderWidth: 2,
            borderRadius: SIZES.radius,
            borderColor: COLORS.lightGray2,
          }}>
          <Image
            source={icons.focus}
            style={{
              width: 40,
              height: 40,
              tintColor: COLORS.darkGray,
            }}
          />

          <Text
            style={{
              marginLeft: SIZES.radius,
              width: '80%',
              ...FONTS.body3,
              color: COLORS.darkGray,
            }}>
            300 Post Street Franciso, CA
          </Text>
        </View>
      </View>
    );
  }

  function renderCoupon() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}>
        <Text style={{...FONTS.h3, color: COLORS.black}}>Add Coupon</Text>
        <FormInput
          inputContainerStyle={{
            marginTop: 0,
            paddingLeft: SIZES.padding,
            paddingRight: 0,
            borderWidth: 2,
            borderColor: COLORS.lightGray2,
            backgroundColor: COLORS.white,
            overflow: 'hidden',
          }}
          placeholder="Enter Coupon Code"
          appendComponent={
            <View
              style={{
                width: 60,
                alignItems: 'center',
                alignContent: 'center',
                backgroundColor: COLORS.primary,
              }}>
              <Image
                source={icons.discount}
                style={{
                  width: 40,
                  height: 40,
                  marginTop: 5
                }}
              />
            </View>
          }
        />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      {/* Header */}
      {renderHeader()}

      {/* body */}
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        extraScrollHeight={-200}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: SIZES.padding,
          paddingBottom: 20,
        }}>
        {/* My Cards */}
        {renderMyCards()}

        {/* Delivery Address */}
        {renderDeliveryAddress()}

        {/* Coupon */}
        {renderCoupon()}
      </KeyboardAwareScrollView>

      {/* Footer */}
      <FooterTotal
        subTotal={37.97}
        shippingFee={0.0}
        total={37.97}
        onPress={() => navigation.replace('Success')}
      />
    </View>
  );
};

export default Checkout;
