import React from "react";
import './about.css';
import Weather from '../../assets/weather.png';
import Beer from '../../assets/beerme.png';
import Movie from '../../assets/movie.png';
import Note from '../../assets/notetaker.png';
import Pass from '../../assets/passwordgen.png';
import schedule from '../../assets/schedule.png';

const Blog = () => (
  <div class="container">

    <div class="jumbotron">
      <h1>Here below are a few porjects I've either fully designed or took part in.</h1>
    </div>

    <div class="wrapper">


      <div class="row">

        <div class="col-md-6">

          <div class="card">
            <img src={Weather}></img>
            <div class="card-body">  
              <h5 class="card-title">Weather API</h5>
              <p class="card-text"> weather API application that will bring up a five day forecast on the city search.</p>
              <a href="https://github.com/AngelCooper/weatherApi" class="btn btn-primary"> Go to Github</a>
            </div>
          </div>
        </div>

        <div class="col-md-6">

          <div class="card">
            <img src={schedule}></img>
            <div class="card-body">
              <h5 class="card-title">Daily schedule Application</h5>
              <p class="card-text"> An application to set a daily schedule with time blocks</p>
              <a href="https://github.com/AngelCooper/05dayplanner" class="btn btn-primary"> Go to Github</a>
            </div>
          </div>
        </div>



      </div>
    </div>

    <div class="wrapper">


      <div class="row">

        <div class="col-md-6">

          <div class="card">
            <img src={Pass}></img>
            <div class="card-body">
              <h5 class="card-title">Random Password Generator</h5>
              <p class="card-text">An application that will produce a random password. Up to 128 characters, include upper
              case, numbers and symbols as options</p>
              <a href="https://github.com/AngelCooper/RandomPasswordGenerator" class="btn btn-primary"> Go to Github</a>
            </div>
          </div>
        </div>

        <div class="col-md-6">

          <div class="card">
            <img src={Note}></img>
            <div class="card-body">
              <h5 class="card-title">Note Taker Application</h5>
              <p class="card-text">An application that is good for taking notes.</p>
              <a href="https://github.com/AngelCooper/noteTaker" class="btn btn-primary"> Go to Github</a>
            </div>
          </div>
        </div>



      </div>
    </div>

    <div class="wrapper">


      <div class="row">

        <div class="col-md-6">

          <div class="card">
            <img src={Beer}></img>
            <div class="card-body">
              <h5 class="card-title">Locate nearst Brewery</h5>
              <p class="card-text">An application that will ask for your location, then it will bring up the nearest
              breweries and also will bring up a five day forecast as well.</p>
              <a href="https://github.com/reagang1997/INeedADrink" class="btn btn-primary"> Go to Github</a>
            </div>
          </div>
        </div>

        <div class="col-md-6">

          <div class="card">
            <img src={Movie}></img>
            <div class="card-body">
              <h5 class="card-title">Movie Seach API</h5>
              <p class="card-text">An appilcation to search for movies or television shows, to be able to rate them and
              comment thoughts and opinions.</p>
              <a href="https://github.com/dcastelline/Movie-Blog" class="btn btn-primary"> Go to Github</a>
            </div>
          </div>
        </div>



      </div>
    </div>


  </div>
);

export default Blog;
