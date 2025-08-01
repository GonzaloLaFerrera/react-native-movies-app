import { Movie } from '@/infrastructure/interfaces/movie.interface';
import { useEffect, useRef } from 'react';
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native';
import MoviePoster from './MoviePoster';

interface Props {
    movies: Movie[];
    title?: string;
    className?: string;

    loadNextPage?: () => void;
};

const MovieHorizontalList = ({ movies, title, className, loadNextPage }: Props) => {

    const isLoading = useRef(false);

    //función de limpieza para volver a habilitar la carga de peliculas una vez que cambian las peliculas
    useEffect(() => {
        setTimeout(() => {
            isLoading.current = false;
        }, 200);
    }, [movies]);

    //todo esto se podría resolver usando onEndReached
    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (isLoading.current) return;

        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

        const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width; //1 era parte: para determinar si ya estoy cerca del scroll / La 2da parte: indica que estoy cerca del final, o ya llegue al final is cambia la condicion a 'true'

        if (!isEndReached) return;

        isLoading.current = true;

        console.log('Cargar siguientes películas');

        loadNextPage && loadNextPage(); //es una forma de evaluar si el primer valor existe(true) entonces ejecuta la función; se podría hacer con if obviamente.

    };

    return (
        <View className={`${className}`}>

            {title && <Text className='text-3xl font-bold px-4 mb-2'>{title}</Text>}

            <FlatList
                horizontal
                data={movies}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => `${item.id}`} //siempre es buena práctica mandar los keyExtractor's en iterables
                renderItem={({ item }) =>
                    <MoviePoster id={item.id} poster={item.poster} smallPoster={true} />
                }
                onScroll={onScroll}
            />

        </View>
    )
}

export default MovieHorizontalList;