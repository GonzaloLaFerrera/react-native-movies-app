import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
    // Queries
    const nowPlayingQuery = useQuery({
        queryKey: ['movies', 'nowPlaying'],
        queryFn: nowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24 // mantiene la data fresca por 24 horas
    });

    return {
        nowPlayingQuery
    };
};