import { Cast } from "../interfaces/movie-cast.interface";
import { MovieDBCast } from "../interfaces/moviedb-moviecast.response";

export class CastMapper {
    static fromMovieDBCastToInterface(actor: MovieDBCast): Cast {
        return {
            id: actor.id,
            name: actor.name,
            character: actor.character ?? 'No character',
            avatar: actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : 'https://i.stack.imgur.com/l60Hf.png',
        }
    }
};