import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { popularMoviesAction } from "@/core/actions/movies/popular.action";
import { topRatedMovieAction } from "@/core/actions/movies/top-rated.action";
import { upcomingMovieAction } from "@/core/actions/movies/upcoming.action";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

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

    // No sirve para hacer infinite Scroll, hay que usar useInfiniteQuery
    /* const topRatedQuery = useQuery({
        queryKey: ['movies', 'top_rated'],
        queryFn: () => topRatedMovieAction({ page: 2 }),
        staleTime: 1000 * 60 * 60 * 24 
    }); */
    const topRatedQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ['movies', 'top_rated'],
        queryFn: ({ pageParam }) => {
            console.log(pageParam);
            return topRatedMovieAction({ page: pageParam })
        },
        getNextPageParam: (lastPage, pages) => pages.length + 1,
        staleTime: 1000 * 60 * 60 * 24
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