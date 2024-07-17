<template>
    <div class="movie-container">
      <div class="poster">
        <img :src="movie.posterUrl" alt="Movie Poster">
      </div>
      <div class="details">
        <h2>{{ movie.title }}</h2>
        <p><strong>Genre:</strong> {{ movie.genre }}</p>
        <p><strong>Country:</strong> {{ movie.country }}</p>
        <p><strong>Description:</strong></p>
        <p>{{ movie.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MovieComponent',
    props: {
      movie: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .movie-container {
    display: flex;
    align-items: flex-start;
    margin: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    background-color: #101010; /* Dark background color */
    color: #ccc; /* Lighter text color */
  }
  
  .poster {
    flex: 0 0 316px; /* Fixed width for the poster */
    height: 500px; /* Adjust height as necessary */
  }
  
  .poster img {
    width: 100%;
    height: auto;
  }
  
  .details {
    flex: 1;
    padding: 20px;
  }
  
  .details h2 {
    margin-top: 0;
    font-size: 24px;
    color: #eee; /* Lighter heading color */
  }
  
  .details p {
    margin: 10px 0;
    color: #ccc; /* Lighter paragraph color */
  }
  </style>
  