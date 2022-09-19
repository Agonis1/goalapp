
export function movies(state = {}, action) {
    switch(action.type) {
      case 'GET_MOVIES':
        return {
          movies: action.movies
        };
      case 'ADD_MOVIE':
        return {
          movies: [...state.movies, action.movie]
        };
      case 'DELETE_MOVIE':
        return {
          movies: state.movies.filter(movie => movie.id !== action.id)
        };
      case 'CLEAR_MOVIES':
        return {};
      default:
        return state;
    }
  }