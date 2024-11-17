
import { View, Text, ScrollView, TouchableOpacity, Dimensions, Platform, Image } from 'react-native' 
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { styles, theme } from '../theme';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '../components/cast';
import MovieList from '../components/movieList';

var {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';
const topMargin = ios? '': 'mt-3';

export default function MovieScreen() {
    const {params: item} = useRoute();
    const [isFavourite, toggleFavourite] = useState(false);
    const navigation = useNavigation();
    const [cast, setCast] = useState([1,2,3,4,5]);
    const [similarMovies, setSimilarMovies] = useState([1,2,3,4,5]);
    let movieName = 'Guardiões da Galáxia';

    useEffect (() =>{
    // call the movie details api
    }, [item])

    return(
        <ScrollView
            contentContainerStyle={{paddingBottom: 20}}
            className="flex-1 bg-neutral-900"
        >
            {/* back button and movie poster */}
            <View className="w-full">
                <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-4" +topMargin}> 
                    <TouchableOpacity onPress={()=> navigation.goBack()} style={[styles.background, { marginTop:10, marginLeft: 15 }]} className="rounded-xl p-2">
                        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> toggleFavourite(!isFavourite)} style={{ marginTop:10, marginRight: 15 }}>
                        <HeartIcon size="35" color={isFavourite? theme.background :"white"} />
                    </TouchableOpacity>
                </SafeAreaView>
                <View>
                    <Image
                        source={require('../assets/images/MoviePoster1.png')}
                        style={{width, height: height*0.55}}
                    />
                    
                    <LinearGradient
                        colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23, 1)']}
                        style={{width, height: height*0.40}}
                        start={{x: 0.5, y: 0}}
                        end={{x: 0.5, y: 1}}
                        className="absolute bottom-0"
                    />
                </View>
            </View>

            
            {/* movie details */}
            <View style={{marginTop: -(height *0.09)}} className="space-y-3"> 
                
                {/* title */}
                <Text className="text-white text-center text-3xl font-bold tracking-wider">
                    {
                        movieName
                    }
                </Text>
                
                {/* status, release, runtime */}
                <Text className="text-neutral-400 font-semibold text-base text-center" style={{marginTop: 10 }}> 
                    Released • 2020 • 170 min
                </Text>
                
                {/* genres */}
                <View className="flex-row justify-center mx-4 space-x-2" >
                    <Text className="text-neutral-400 font-semibold text-base text-center" style={{marginRight: 5 }}>
                        Action • 
                    </Text>
                    <Text className="text-neutral-400 font-semibold text-base text-center" style={{marginRight: 5 }}>
                        Comédia • 
                    </Text>
                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        Aventura 
                    </Text>
                </View>

                {/* Description */}
                <Text className="text-neutral-400 mx-4 tracking-wide" style={{marginTop: 15 }}>
                O aventureiro do espaço Peter Quill torna-se presa de caçadores de recompensas depois que rouba a esfera de um vilão traiçoeiro, Ronan. Para escapar do perigo, ele faz uma aliança com um grupo de quatro extraterrestres. Quando Quill descobre que a esfera roubada possui um poder capaz de mudar os rumos do universo, ele e seu grupo deverão proteger o objeto para salvar o futuro da galáxia.
                </Text>

            </View>

            {/* cast */}
            <Cast navigation={navigation} cast={cast} />

            {/* Similar Movies */}
            <MovieList title="Similar Movies" hiddenSeeAll={true} data={similarMovies} />

        </ScrollView>
    )
}