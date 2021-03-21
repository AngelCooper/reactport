import React from "react";
import './about.css'

function About () {
  return (

    <div class="container">

      <div class="jumbotron">
        <h1>About Me</h1>

      </div>

      <div class="wrapper">

      <div class="row">

        <div class="col-md-3">
          <img src="https://pbs.twimg.com/profile_images/1291995454071341057/FnrlfRn2_400x400.jpg" alt="imgOfMe"
            class="img-thumbnail">
          </img>
        </div>

        <div class="row">

          <div class="col-md-12">
          <p>
            <b>A bit about me and my hobbies:</b><br></br>
            Although I'm entering into the world of web development I do prefer to be outdoors soaking up the sun. I would consider myself a very active person, if not playing pickup games of soccer at either my local park or at a indoor facility, I can be also be found at the gym either lifting weights or doing some type of cardio exercise.  
            I have a great deal of wanderlust, I love to travel. I have had the opporunity to travel and to visit some amazing places. I would love to see as much of the world while I can.  
            When home I enjoy the Culinary arts, I cook my own meals often. Along with that I read quit a bit.

          </p>
          </div>
        </div>

      </div>

      </div>


    </div>


  );
};

export default About;
