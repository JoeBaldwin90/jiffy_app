// Personal app API key taken from giphy developer website
const API_KEY = 'o7IyuSKkLiR728rSCOE3Pov4refIv10F'

// Elements
const clearEl = document.querySelector('.search-clear')
const searchEl = document.querySelector('.search-input')
const video_container = document.querySelector('.videos')
const hintEl = document.querySelector('.search-hint')

// Randon number generator code taken from stackoverlow
// https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
const randomChoice = arr => {
  const randIndex = Math.floor(Math.random() * arr.length)
  return arr[randIndex]
}

// Create video element
const createVideo = src => {
  const video = document.createElement('video')
  // Set video element attributes
  video.src = src
  video.autoplay = true
  video.loop = true
  video.setAttribute('class', 'video')
  return video
}

// Toggle the page loading state between loading and not loading
const toggleLoading = state => {
  // if our loading state is true, add a "loading" class
  if (state) {
    document.body.classList.add('loading')
    searchEl.disabled = true // Disable search input
  } else {
    // else, remove "loading" class
    document.body.classList.remove('loading')
    searchEl.disabled = false 	// Enable search input again
    searchEl.focus()
  }
}

// Create search function for fetch using the searchTerm variable
const searchGiphy = searchTerm => {
  toggleLoading(true) // Set loading state as "true"

  // Template literals used to embed API_KEY and searchTerm variables into the API endpoint URL
  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=50&offset=0&rating=PG-13&lang=en`
  )
    .then(response => {
      return response.json() // Parse API JSON into JS Object
    })
    .then(json => { // Use API data
      const gif = randomChoice(json.data) // Random object index from API data
      const src = gif.images.original.mp4 // Select mp4 link from random object
      const video = createVideo(src) // Pass src link into createVideo function
      video_container.appendChild(video) // Add video item to video container

      // Only show video element once the data has loaded by adding a "visible" class
      video.addEventListener('loadeddata', event => {
        video.classList.add('visible')
        toggleLoading(false) // Set loading state to false
        document.body.classList.add('has-results') // Triggers CSS selectors to control element opacity
        hintEl.innerHTML = `Hit enter to search more ${searchTerm}`
      })
    })
    .catch(error => { // handle errors
    	toggleLoading(false)
    	hintEl.innerHTML = `Nothing found for ${searchTerm}`
    })
}

// Capture user's search term and store it as a variable for other functions
const doSearch = event => {
  const searchTerm = searchEl.value // Save user's search term

  if (searchTerm.length > 2) {
    // Show hint to run search
    hintEl.innerHTML = `Hit enter to search ${searchTerm}`
    document.body.classList.add('show-hint')
  } else {
    document.body.classList.remove('show-hint')
  }

  // Only run search when search term that is longer than 2 characters & user hits enter
  if (event.key === 'Enter' && searchTerm.length > 2) {
    // Call API search function and pass in user's search term.
    searchGiphy(searchTerm)
  }
}

// Clear search results
const clearSearch = event => {
  document.body.classList.remove('has-results') // Reset content in the video_container and hint elements
  video_container.innerHTML = ''
  hintEl.innerHTML = ''
  searchEl.value = ''
  searchEl.focus() // Focus the input cursor to search element
}

// Listen for global "Esc" keyup events to fire clearSearch function
document.addEventListener('keyup', event => {
  if (event.key === 'Escape') {
    clearSearch()
  }
})

// Run function every time a user presses a key
searchEl.addEventListener('keyup', doSearch)
// Run function when use clicks the clearSearch element
clearEl.addEventListener('click', clearSearch)
