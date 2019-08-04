# Jiffy 
Jiffy is a javascript application that allows users to search the Giphy API and generate random GIFs related to their search term. 

## Goal
To understand how to work with JSON data parsed from an API endpoint using Javascript and AJAX. 

#### Timeframe
One week

## Features
- User-defined search terms for the Giphy API.
- NSFW filter for GIFs.
- Toggling application loading states. 
- Event listeners which respond to user inputs.
- Transition effects. 

## Technologies used
- HTML5 / CSS
- Javascript
- AJAX

## Setup
To get this application running locally, please clone a copy of this repository and open the `index.html` file in your web browser. 

## Process
I started by reading through the `fetch` API blog written by David Walsh. I then created a developer account with [Giphy](https://developers.giphy.com/explorer), created an app which gave me an API key to access the endpoint URL. I played around with Giphy's URL parameters to create the exact URL that I wanted to use with `fetch` and started to build my App. 

## Lessons learned
- How to write [fetch requests](https://davidwalsh.name/fetch) and parse JSON data. 
- How to manipulate the query of an API endpoint URL using user-defined variables. 
- How to access information in a Javascript object.
- How to build a [random number generator](https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array). 

## Challenges
Pretty much every part of this project was challenging. Deciding how to structure and isolate my functions took a long time and figuing out when and where to call my `toggleLoading` function was especially tricky. 

## Wins
The two biggest wins for this project were;
- isolating and separating javascript functions so they perform very specific tasks. 
- creating a dynamic search query for my API request based on what the user types into the search-input field. 

## Future development
- Make sure the app works seamlessly on mobile devices too by incorporating touch event listeners too. 
