// import { getMovieByIdAction } from '@/core/actions/movie/get-movie-by-id.action';
import MovieHeader from '@/presentation/components/movie/MovieHeader';
import { useMovie } from '@/presentation/hooks/useMovie';
import { useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

const MovieScreen = () => {

    const { id } = useLocalSearchParams();
    // getMovieByIdAction(+id);

    const { movieQuery } = useMovie(+id);

    if (movieQuery.isLoading || !movieQuery.data) {
        return (
            <View className='flex flex-1 justify-center items-center'>
                <Text className='mb-4'>
                    Espere por favor
                </Text>
                <ActivityIndicator color='purple' size={30} />
            </View>
        )
    }

    return (
        <ScrollView>
            {/* <Text>{movieQuery.data?.title ?? 'No tiene'}</Text> */}
            {/* Al agregar otra cond en el if en caso de que no venga data no es necesario el condicional acá */}
            {/* <Text>{movieQuery.data.title}</Text> */}

            {/* Componentizado */}
            <MovieHeader
                originalTitle={movieQuery.data.originalTitle}
                poster={movieQuery.data.poster}
                title={movieQuery.data.title}
            />
        </ScrollView>
    )
}

export default MovieScreen;