import { View, Text, Dimensions, Platform, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../theme';

var {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';
const verticalMargin = ios? '': 'my-3';

export default function PersonScreen() {

    const navigation = useNavigation();
    const [isFavourite, toggleFavourite] = useState(false);

    return (
        <ScrollView className="flex-1 bg-neutral-900" contentContainerStyle={{paddingBottom: 20}}>
            <SafeAreaView className={"z-20 w-full flex-row justify-between items-center px-4" +verticalMargin}> 
                <TouchableOpacity onPress={()=> navigation.goBack()} style={[styles.background, { marginTop:37, marginLeft: 15 }]} className="rounded-xl p-2">
                    <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> toggleFavourite(!isFavourite)} style={{ marginTop:37, marginRight: 15 }}>
                    <HeartIcon size="35" color={isFavourite? 'red' :"white"} />
                </TouchableOpacity>
            </SafeAreaView>

            {/* Person Details */}
            <View>
                <View className="flex-row justify-center"
                    style={{
                        shadowColor: 'gray',
                        shadowRadius: 40,
                        shadowOffset: {width: 0, height: 5},
                        shadowOpacity: 1
                    }}
                >
                    <View className="image-center rounded-full overflow-hidden h-72 w-72 border-4 border-neutral-500">
                        <Image
                            source={require('../assets/images/Actor.png')}
                            style={{height: height*0.43, width: width*0.74}}
                        />
                    </View>
                </View>

                <View className="mt=6" style={{ marginTop: 10 }}>
                    <Text className="text-3xl text-white font-bold text-center">
                        Chris Pratt
                    </Text>

                    <Text className="text-base text-neutral-500 text-center">
                        Estados Unidos, EUA
                    </Text>
                </View>

                <View className="mx-3 p-4 mt-6 flex-row flex-wrap justify-center items-center bg-neutral-700 rounded-full overflow-hidden">
                    <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                        <Text className="text-white font-semibold" style={{paddingRight: 35}}>Gênero</Text>
                        <Text className="text-neutral-300 text-sm" style={{paddingRight: 35}}>Masculino</Text>
                    </View>

                    <View className="px-2 items-center">
                        <Text className="text-white font-semibold" style={{paddingLeft: 35}}>Dt. de Nasc.</Text>
                        <Text className="text-neutral-300 text-sm" style={{paddingLeft: 35}}>19/06/2002</Text>
                    </View>
                </View>

                <View className="mx-3 p-4 mt-6 flex-row flex-wrap justify-center items-center bg-neutral-700 rounded-full overflow-hidden">
                    <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                        <Text className="text-white font-semibold" style={{paddingRight: 35}}>Conhecido por</Text>
                        <Text className="text-neutral-300 text-sm" style={{paddingRight: 35}}>Atuar</Text>
                    </View>

                    <View className="px-2 items-center">
                        <Text className="text-white font-semibold" style={{paddingLeft: 35}}>Popularidade</Text>
                        <Text className="text-neutral-300 text-sm" style={{paddingLeft: 35}}>64.34 M</Text>
                    </View>
                </View>

            </View>

        </ScrollView>
    )
}