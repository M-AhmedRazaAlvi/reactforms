import React, { Component } from 'react';
import Paginations from './common/pagination';
import SearchBox from './common/searchBox';
import { getMovies} from './fakeMovieService';
import { getGenres } from "./fakeGenerService";
import { paginate } from './utils/paginate';
import ListGroup from './common/listGroup';
import MoviesTable from './moviesTable';
import _ from "lodash";
import {Link} from 'react-router-dom';



class MovieList extends Component {
state = {
    movies:[],
    genres: [],
    pageSize:4,
    currentPage:1,
    sortColumn: {path:"title", order:"asc"},
    selectedGenre:null,
    searchQuery:""
  };
componentDidMount() {
    const data  =  getGenres();
    const genres = [{ _id: "0", name: "All Genres" }, ...data];
    this.setState({ movies: getMovies(), genres });

    // const { data } = await getGenres();
    // const genres = [{ _id: "", name: "All Genres" }, ...data];
    // const { data: movies } = await getMovies();
    // this.setState({ movies, genres });
};
handleClick = (movie) => {
    const { movies } = this.state;
    const updatedMovies = movies.splice(movies.indexOf(movie), 1);
    this.setState({
      // movies
      updatedMovies
      
    });
};
handleLike= movie=>{
    const movies =[...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index]={...movies[index]};
    movies[index].liked=!movies[index].liked;
    this.setState({movies});

};
handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre,searchQuery:"", currentPage: 1 });
};

handlePageChange = page => {
  this.setState({ currentPage: page });
};
handleSort= sortColumn=>{
  this.setState({sortColumn});
};
handleSearchChange = query => {
  this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
};
getPagedData = () => {
  let {
    currentPage,
    pageSize,
    movies: allMovies,
    selectedGenre,
    sortColumn,
    searchQuery
  } = this.state;

  let filtered;
  if (searchQuery) {
    filtered = allMovies.filter(movie =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  } else {
    filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;
  }
  const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
  const movies = paginate(sorted, currentPage, pageSize);
  return { totalCount: filtered.length, data: movies };
};
  render() {
    return <div>
      {
        this.state.movies.length === 0
          ? <p>There are no movies in the database</p>
          : this.renderMovies()
      }
    </div>;
  }

  
  renderMovies = () => {
    // const {length : count }=this.state.movies;
    const {pageSize,currentPage,sortColumn,  selectedGenre, movies:allMovies, searchQuery}=this.state;
    const filtered = selectedGenre && selectedGenre._id 
      ? allMovies.filter(m => m.genre._id === selectedGenre._id)
      : allMovies;

    const sort =  _.orderBy(filtered, [sortColumn.path],[sortColumn.order])
    const movies =paginate(sort, currentPage, pageSize);
    return (
      <div className='row'>
         <div className='col-2'>
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={genre => this.handleGenreSelect(genre)}
          />

         </div>
         <div className='col'>
         <Link to="/movies/new"
              className="btn btn-primary"
              style={{marginBottom:20}}>New Movie
         </Link>
         <SearchBox value={searchQuery} onChange={this.handleSearchChange} />
         <p>Showing <b>{filtered.length}</b> movies in the database.</p>
        
        <MoviesTable
            movies={movies}
            sortColumn={this.sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
        <Paginations 
               itemsCount={filtered.length}
               pageSize={pageSize}
               currentPage={currentPage}
               onPageChange={this.handlePageChange}/>
         </div>
        
      </div>
    );
  }

}

export default MovieList