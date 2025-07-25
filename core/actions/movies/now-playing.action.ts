import { movieApi } from "@/core/api/movie-api";

export const nowPlayingAction = async () => {
    try {
        const { data } = await movieApi.get('now_playing');

        console.log(JSON.stringify(data, null, 2));
        return [];

    } catch (error) {
        console.log(error);
        throw 'Cannot lado now playing movies';
    }
};