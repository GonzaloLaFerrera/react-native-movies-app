import { Cast } from '@/infrastructure/interfaces/movie-cast.interface';
import { FlatList, Text, View } from 'react-native';

import { ActorCard } from './ActorCard';

interface Props {
    cast: Cast[];
}

const MovieCast = ({ cast }: Props) => {
    return (
        <View className='mt-5 mb-20'>
            <Text className='font-bold text-2xl px-5 mb-5'>Actores</Text>
            <FlatList
                data={cast}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <ActorCard actor={item} />}

            >

            </FlatList>
        </View>
    )
};

export default MovieCast;