# Treehouse FSJS Project 7

### Project set up correctly using Create React App
- No warnings or errors in the console about unused/missing assets
- Running `npm start` successfully launches the app

### UI Components
- App is broken up into components

### Matching the Mockup 
- Provided CSS is used and important aspects of the app generally resembles the mockup
- **Blue theme changed to green**
- **Introduced grey background with a white container**

### Routing
- React Router implemented correctly
- URLs correctly match routes
- Clicking a nav link, back/forward button, and entering URL navigates the user to the new route and displays correct data on the page
- **(EE)** Forward/Back buttons navigate search history, including URL changes and data
- **(EE)** Includes 404-like error route when URL doesn't match an existing route

### Data Fetching
- Uses Flickr API. API keys and proper photo URLs
- Data fetched from a container (PhotoLogic.js) passes down to presentation component (PhotoList.js) via props
- **(EE)** App displays loading indicator when app is fetching new data

### Displaying Data
- No console errors or warnings about key props
- Key props passed to images

### Search Field
- Submitting search data returns & displays results
- **(EE)** If no matches are found, app includes appropriate message
