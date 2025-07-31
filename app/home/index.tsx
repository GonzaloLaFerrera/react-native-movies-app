import MainSlideshow from '@/presentation/components/movies/MainSlideshow';
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList';
import { useMovies } from '@/presentation/hooks/useMovies';
import { ActivityIndicator, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
    const { nowPlayingQuery, popularQuery } = useMovies();
    const safeArea = useSafeAreaInsets(); //Otra alternativa para trabajar con safe areas

    if (nowPlayingQuery.isLoading) {
        return (
            <View className='justify-center items-center flex-1'>
                <ActivityIndicator color='purple' size={60} />
            </View>
        )
    };

    return (
        <View className='mt-2' style={{ paddingTop: safeArea.top }}>
            <Text className='text-3xl font-bold px-4 mb-2'>Movies App</Text>

            {/* Carrousel de imágenes */}
            <MainSlideshow movies={nowPlayingQuery.data ?? []} />

            {/* Popular Movies */}
            <MovieHorizontalList
                movies={popularQuery.data ?? []}
                title='Popular Movies'
            />
        </View>
    )
}

export default HomeScreen;