import React, {useState} from 'react';
import {View, Text, Image, ScrollView, Alert} from 'react-native';
import {
  Header,
  LineDivider,
  TextButton,
  TextIconButton,
} from '../../components';
import {FONTS, SIZES, COLORS, icons, constants} from '../../constants';

const DeliveryStatus = ({navigation}) => {
  const [currentStep, setCurrentStep] = useState(3);

  function renderHeader() {
    return (
      <Header
        title="DELIVERY STATUS"
        containerStyle={{
          height: 50,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
        }}
      />
    );
  }

  function renderInfo() {
    return (
      <View
        style={{
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
        }}>
        <Text style={{textAlign: 'center', color: COLORS.gray, ...FONTS.body4}}>
          Estimated Delivery
        </Text>
        <Text
          style={{textAlign: 'center', color: COLORS.black, ...FONTS.h2}}>
          Sept 2021 / 12:30PM
        </Text>
      </View>
    );
  }

  function renderTrackOrder() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          paddingVertical: SIZES.padding,
          borderRadius: SIZES.radius,
          borderWidth: 2,
          borderColor: COLORS.lightGray2,
          backgroundColor: COLORS.white2,
        }}>
        {/* Track Order */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
            paddingHorizontal: SIZES.padding,
          }}>
          <Text style={{color: COLORS.darkGray, ...FONTS.h3}}>Track Order</Text>
          <Text style={{color: COLORS.gray, ...FONTS.body3}}>NY012345</Text>
        </View>
        <LineDivider
          lineStyle={{
            backgroundColor: COLORS.lightGray2,
          }}
        />

        {/* Status */}
        <View
          style={{
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.padding,
          }}>
          {constants.track_order_status.map((item, index) => {
            return (
              <View key={`Statuslist-${index}`}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: -5,
                  }}>
                  <Image
                    source={icons.check_circle}
                    style={{
                      width: 40,
                      height: 40,
                      tintColor:
                        index <= currentStep
                          ? COLORS.primary
                          : COLORS.lightGray1,
                    }}
                  />

                  <View
                    style={{
                      marginLeft: SIZES.radius,
                    }}>
                    <Text style={{...FONTS.h3, color: COLORS.darkGray}}>
                      {item.title}
                    </Text>
                    <Text style={{...FONTS.body4, color: COLORS.gray}}>
                      {item.sub_title}
                    </Text>
                  </View>
                </View>
                {index < currentStep && (
                  <View>
                    <View
                      style={{
                        height: 50,
                        width: 3,
                        marginLeft: 18,
                        backgroundColor: COLORS.primary,
                        zIndex: -1,
                      }}
                    />
                  </View>
                )}

                {index >= currentStep && (
                  <Image
                    source={icons.dotted_line}
                    resizeMode="cover"
                    style={{
                      width: 4,
                      height: 50,
                      marginLeft: 17,
                    }}
                  />
                )}
              </View>
            );
          })}
        </View>
      </View>
    );
  }

  function renderFooter() {
    return (
      <View
        style={{
          marginTop: SIZES.radius,
          marginBottom: SIZES.padding,
        }}>
        {currentStep < constants.track_order_status.length - 1 && (
          <View
            style={{
              flexDirection: 'row',
              height: 55,
            }}>
            {/* Cancel */}
            <TextButton
              label="CANCEL"
              buttonContainerStyle={{
                width: '40%',
                borderRadius: SIZES.base,
                backgroundColor: COLORS.lightGray2,
              }}
              labelStyle={{
                color: COLORS.primary,
              }}
              onPress={() => {
                navigation.navigate('FoodDetail');
              }}
            />

            {/* MapView */}
            <TextIconButton
              containerStyle={{
                flex: 1,
                marginLeft: SIZES.radius,
                borderRadius: SIZES.base,
                backgroundColor: COLORS.primary,
              }}
              label="Map View"
              labelStyle={{
                color: COLORS.white,
                ...FONTS.h3,
              }}
              icon={icons.map}
              iconPosition="LEFT"
              iconStyle={{
                width: 25,
                height: 25,
                marginRight: SIZES.base,
                tintColor: COLORS.white,
              }}
              onPress={() => {
                // navigation.navigate('Map');
                Alert.alert("Done");
              }}
            />
          </View>
        )}
        {currentStep === constants.track_order_status.length - 1 && (
          <TextButton
            buttonContainerStyle={{
              height: 55,
              borderRadius: SIZES.base,
            }}
            label="DONE"
            onPress={() => {
              navigation.navigate('FoodDetail');
            }}
          />
        )}
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.white,
      }}>
      {/* Header */}
      {renderHeader()}

      {/* info */}
      {renderInfo()}

      {/* Track Order */}
      <ScrollView showsHorizontalScrollIndicator={false}>
        {renderTrackOrder()}
      </ScrollView>

      {/* Footer */}
      {renderFooter()}
    </View>
  );
};

export default DeliveryStatus;
