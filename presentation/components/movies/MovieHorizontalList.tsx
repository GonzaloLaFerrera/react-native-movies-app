import { Movie } from '@/infrastructure/interfaces/movie.interface';
import { FlatList, Text, View } from 'react-native';
import MoviePoster from './MoviePoster';

interface Props {
    movies: Movie[];
    title?: string;
};

const MovieHorizontalList = ({ movies, title }: Props) => {
    return (
        <View>

            {title && <Text className='text-3xl font-bold px-4 mb-2'>{title}</Text>}

            <FlatList
                horizontal
                data={movies}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => `${item.id}`} //siempre es buena práctica mandar los keyExtractor's en iterables
                renderItem={({ item }) =>
                    <MoviePoster id={item.id} poster={item.poster} smallPoster={true} />
                }
            />

        </View>
    )
}

export default MovieHorizontalList;