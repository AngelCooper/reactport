import React from "react";

const Contact = () => (
  <div class="container">

    <div class="jumbotron">
      <h1>Contact</h1>
      <h3>If you wish to conact me, please fill out the forms below</h3>


    </div>

    <div class="row">

      <div class="col-md-6">

        <div class="md-3">

        <label for="exampleFormControlInput1" class="form-label">
        Name
        </label>
        <input ype="name" class="form-control" id="exampleFormControlInput1" placeholder="Name"></input>
        </div>

        <div class="md-3">

        <label for="exampleFormControlInput1" class="form-label">
        Email Address
        </label>
        <input ype="name" class="form-control" id="exampleFormControlInput1" placeholder="Name"></input>
        </div>

        <div class="md-3">

        <label for="exampleFormControlInput1" class="form-label">
        Message
        </label>
        <input ype="name" class="form-control" id="exampleFormControlInput1" placeholder="Name"></input>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
