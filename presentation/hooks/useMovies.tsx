import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { popularMoviesAction } from "@/core/actions/movies/popular.action";
import { topRatedMovieAction } from "@/core/actions/movies/top-rated.action";
import { upcomingMovieAction } from "@/core/actions/movies/upcoming.action";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
    // Queries
    const nowPlayingQuery = useQuery({
        queryKey: ['movies', 'nowPlaying'],
        queryFn: nowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24 // mantiene la data fresca por 24 horas
    });

    const popularQuery = useQuery({
        queryKey: ['movies', 'popular'],
        queryFn: popularMoviesAction,
        staleTime: 1000 * 60 * 60 * 24 // mantiene la data fresca por 24 horas
    });

    const topRatedQuery = useQuery({
        queryKey: ['movies', 'top_rated'],
        queryFn: topRatedMovieAction,
        staleTime: 1000 * 60 * 60 * 24 // mantiene la data fresca por 24 horas
    });

    const upcomingQuery = useQuery({
        queryKey: ['movies', 'upcoming'],
        queryFn: upcomingMovieAction,
        staleTime: 1000 * 60 * 60 * 24 // mantiene la data fresca por 24 horas
    });

    return {
        nowPlayingQuery,
        popularQuery,
        topRatedQuery,
        upcomingQuery
    };
};