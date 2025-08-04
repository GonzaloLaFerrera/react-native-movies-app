import { movieApi } from "@/core/api/movie-api";
import { MovieDBCreditsResponse } from "@/infrastructure/interfaces/moviedb-moviecast.response";
import { CastMapper } from "@/infrastructure/mappers/cast.mapper";

export const getMovieCastAction = async (movieId: number) => {
    try {
        const { data } = await movieApi.get<MovieDBCreditsResponse>(`${movieId}/credits`);
        // console.log(data);

        return data.cast.map(CastMapper.fromMovieDBCastToInterface);
    } catch (error) {
        console.log(error);
        throw 'Cannot load the requested movie cast by id';
    }
};