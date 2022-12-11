import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Image,
    TextInput,
} from 'react-native';
import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData
} from '../../constants'
import {HorizontalFoodCard, VerticleFoodCard} from '../../components';
import FilterModel from "./FilterModel";

const Section = ({title, onPress, children}) => {
    return (
        <View>
            {/* Header */}
            <View
             style={{ 
                flexDirection: 'row',
                marginHorizontal: SIZES.padding,
                marginTop: 20,
                marginBottom: 20,
              }}
            >
            <Text style={{ flex: 1, ...FONTS.h3, color: COLORS.black }}>{title}</Text>
            <TouchableOpacity onPress={onPress}>
              <Text style={{ color: COLORS.primary, ...FONTS.body3 }}>Show All</Text>
            </TouchableOpacity>
            </View>

            {/* Children */}
            {children}
            
        </View>
    );
}


const Home = ({navigation}) => {

    const [selectedCategoryId, setSelectedCategoryId] = useState(1);
    const [selectedMenuType, setSelectedMenuType] = useState(1);
    const [popular, setPopular] = useState([]);
    const [recommends, setRecommends] = useState([]);
    const [menuList, setMenuList] = useState([]);

    const [showFilterModel, setShowFilterModel] = useState(false);

    useEffect(() => {
        handleChangeCategory(selectedCategoryId, selectedMenuType);
    }, []);

    // handler
    
    function handleChangeCategory(categoryId, menuTypeId) {
        // Retrieve the Popluer menu
        let selectedPopular = dummyData.menu.find(item => item.name === 'Popular');

        // Retrieve the recommended menu
        let selectedRecommend = dummyData.menu.find(item => item.name === 'Recommended');

        // find the menu based on the menuTypeId
        let selectedMenu = dummyData.menu.find(item => item.id === menuTypeId);

        //set Popular
        setPopular(selectedPopular?.list.filter(item => item.categories.includes(categoryId)));
    
        //set Recommended
        setRecommends(selectedRecommend?.list.filter(item => item.categories.includes(categoryId)));
        //set the menu based on the categoryId
        setMenuList(selectedMenu?.list?.filter(item => item.categories.includes(categoryId)));
    }


    function renderSearch() {
        return (
            <View
              style={{
                flexDirection: 'row',
                height: 40,
                alignItems: 'center',
                marginHorizontal: SIZES.padding,
                marginVertical: SIZES.base,
                paddingHorizontal: SIZES.radius,
                borderRadius: SIZES.padding,
                backgroundColor: COLORS.lightGray2
              }}
            >

            {/* Icon */}
            <Image
                source={icons.search}
                style={{height: 20, width: 20, tintColor:COLORS.black}}
            />

            {/* Text Input */}
            <TextInput
                style={{ 
                    flex: 1,
                    marginLeft: SIZES.radius,
                    color: COLORS.black,
                    ...FONTS.body3
                 }}
                placeholder="search food..."
            />
                
            {/* Filter Button */}
            <TouchableOpacity
                onPress={() => setShowFilterModel(true)}
            >
                <Image
                    source={icons.filter}
                    style={{ height:20, width:20, tintColor:COLORS.black }}
                />
            </TouchableOpacity>

            </View>
        );
    }

    function renderMenuTypes() {
        return (
            <FlatList
                horizontal
                data={dummyData.menu}
                keyExtractor={item => `${item.id}`}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop:20,
                    marginBottom:20,
                }}
                renderItem={({item, index}) => (
                  <TouchableOpacity 
                    style={{
                        marginLeft: SIZES.padding,
                        marginRight: index === dummyData.menu.length - 1 ? SIZES.padding : 0,
                    }}
                    onPress={() => {
                        setSelectedMenuType(item.id);
                        handleChangeCategory(selectedCategoryId, item.id);
                    }}
                  >
                    <Text
                    style={{
                        color: selectedMenuType === item.id ? COLORS.primary : COLORS.black,
                        ...FONTS.h3
                    }}
                    >{item.name}</Text>
                  </TouchableOpacity>  
                )}
                />
        );
    }

    function renderRecommendedSection() {
        return (
            <Section
                title="Recommended"
                onPress={() => {console.log('show all Recommended')}}
            >
                <FlatList
                    data={recommends}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item, index}) => (
                        <HorizontalFoodCard 
                            containerStyle={{ 
                                height: 180,
                                width: SIZES.width * 0.85,
                                marginLeft: index === 0 ? SIZES.padding : 18,
                                padding: 18,
                                marginRight: index === recommends.length - 1 ? SIZES.padding : 0,
                                paddingRight: SIZES.radius,
                                alignItems: 'center',
                             }}
                            imageStyle={{
                                marginTop: 35,
                                height: 150,
                                width: 150,
                            }}
                            item={item}
                            onPress={() => {console.log('HorizontalFoodCard')}}
                        />
                    )}
                ></FlatList>
            </Section>
        );
    }

    function renderPopularSection() {
        return (
            <Section
                title="Popular"
                onPress={() => {console.log('show all Popular')}}
            >
                <FlatList
                    data={menuList}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item, index}) => (
                       <VerticleFoodCard
                        containerStyle={{
                            marginLeft: index === 0 ? SIZES.padding : 18,
                            marginRight: index === popular.length - 1 ? SIZES.padding : 0,
                        }}
                        item={item}
                        onPress={() => {navigation.navigate('FoodDetail')}}
                       />
                    )}
                ></FlatList>
            </Section>
        );

    }

    function renderFoodCategories() {
        return (
            <FlatList
                data={dummyData.categories}
                keyExtractor={item => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => (
                    <TouchableOpacity
                        style={{
                                flexDirection: 'row',
                                height: 55,
                                marginTop: SIZES.padding,
                                marginLeft: index === 0 ? SIZES.padding : 8,
                                marginRight: index === dummyData.categories.length - 1 ? SIZES.padding : 8,
                                paddingHorizontal: 8,
                                borderRadius: SIZES.radius,
                                backgroundColor: selectedCategoryId === item.id ? COLORS.primary : COLORS.lightGray2,
                            }}
                        onPress={() => {
                            setSelectedCategoryId(item.id);
                            handleChangeCategory(item.id, selectedMenuType);
                        }}
                    >
                    <Image 
                       source={item.icon}
                        style={{marginTop: 5, height:50, width: 50}}
                    />
                    <Text style={{ alignSelf: 'center', marginRight: SIZES.base, color: selectedCategoryId === item.id ? COLORS.white : COLORS.darkGray, ...FONTS.h3 }}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        );
    }

    function renderDeliveryTo() {
        return (
           <View
            style={{ 
                marginTop: SIZES.padding,
                marginHorizontal: SIZES.padding, 
             }}
           >
           <Text
            style={{ 
                color: COLORS.primary,
                ...FONTS.body3
             }}
           >Dilvery To</Text>
           <TouchableOpacity
            style={{ 
                flexDirecton: 'row',
                marginTop:SIZES.base,
                alignItems: 'center',
             }}
           >
           <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'center' }}>
               <Text
                style={{ 
                    ...FONTS.h3,
                    color: COLORS.black,
                 }}
               >{dummyData?.myProfile?.address}</Text>

               <Image
                   source={icons.down_arrow}
                   style={{ 
                       marginLeft: SIZES.base,
                       height: 20,
                       width: 20,
                    }}
               />
               </View>
           </TouchableOpacity>

           </View>
        );
    }

    return (
        <View
            style={{
                flex: 1
            }}>

            {/* Search */}
            {renderSearch()}

            {/* Filter */}
            {
               showFilterModel && 
                <FilterModel 
                isVisible={showFilterModel}
                onClose={() => {setShowFilterModel(false)}}
            />
            }

            {/* List */}
            <FlatList
                data={menuList}
                keyExtractor={item => `${item.id}`}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {/* Dilvery To */}
                        {renderDeliveryTo()}

                    {/* Food Categories */}
                    {renderFoodCategories()}

                      {/* Popular */}
                      {renderPopularSection()}

                        {/* Recommended */}
                        {renderRecommendedSection()}

                        {/* Menu Types */}
                        {renderMenuTypes()}
                    </View>
                }
                renderItem={({item, index}) => {
                    return (
                        <HorizontalFoodCard 
                            containerStyle={{ 
                                height: 130,
                                alignItems: 'center',
                                marginHorizontal: SIZES.padding,
                                marginBottom: SIZES.radius,
                             }}
                             imageStyle={{ 
                                 marginTop: 20,
                                 height: 110,
                                 width: 110
                              }}
                            item={item}
                            onPress={() => {console.log("HorizontalFoodCard pressed")}}
                        />
                        );
                }}
                ListFooterComponent={
                    <View style={{ height:160 }} />
                }
            />

        </View>
    )
}

export default Home;