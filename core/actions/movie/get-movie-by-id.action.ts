import { movieApi } from "@/core/api/movie-api";
import { MovieDBMovieRespone } from "@/infrastructure/interfaces/moviedb-movie.response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";


export const getMovieByIdAction = async (id: number | string) => {
    try {
        const { data } = await movieApi.get<MovieDBMovieRespone>(`/${id}`);
        console.log('Película - HTTP cargada');

        return MovieMapper.fromTheMovieDBToCompleteMovie(data);
    } catch (error) {
        console.log(error);
        throw 'Cannot load the requested movie by id';
    }
}