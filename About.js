import React from "react";

function About() {
  return (
    <div className="page">
      <h1>🎬 About UNDs Review System</h1>

      <p>
        <b>UNDs Review System</b> is a modern Movie Review Web Application
        developed using <b>ReactJS</b> and <b>AJAX (Fetch API)</b>.
      </p>

      <p>
        This application allows users to search for movies using a live API,
        view detailed movie information, and share their personal reviews and
        ratings.
      </p>

      <h2>🚀 Features</h2>
      <ul>
        <li>🔍 Search movies using OMDb API</li>
        <li>🎬 View movie details (plot, rating, genre)</li>
        <li>⭐ Add star-based ratings</li>
        <li>✍️ Write and store reviews</li>
        <li>💾 Reviews saved using localStorage</li>
        <li>📱 Fully responsive UI</li>
      </ul>

      <h2>🛠 Technologies Used</h2>
      <ul>
        <li>ReactJS (SPA architecture)</li>
        <li>AJAX / Fetch API (dynamic data)</li>
        <li>CSS (Responsive + modern UI)</li>
        <li>OMDb API (movie database)</li>
      </ul>

      <h2>🎯 Objective</h2>
      <p>
        The goal of this project is to demonstrate the implementation of a
        Single Page Application using modern web technologies, dynamic data
        fetching, and user interaction through forms and state management.
      </p>
    </div>
  );
}

export default About;