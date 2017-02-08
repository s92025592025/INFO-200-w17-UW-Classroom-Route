# UW-Classroom-Route
A node module that contains building information in University of Washington Campus.

## Getting Started
### How to install
Clone this repository to your working directory
``` bash
$ git clone https://gitlab.com/s92025592025/UW-Classroom-Route.git
```
Then require it from it's directory
```javascript
require({/*YOUR DIRECTORY*/} + '/UW-Classroom-Route/UW-route.js');
```

### Sample Code
You will need to create a UWRoute object and pass in your API key as constructor first.
```javascript
const UWRoute = require({/*YOUR DIRECTORY*/} + '/UW-Classroom-Route/UW-route.js');

var route = new UWRoute({/*YOUR API KEY*/});
```

## Current Issue
The UW building is not up-to-date, a lot of them are still missing absolute location, and some of them might point to somewhere else. The missing information is in `./data/building_list_missing_location.json`, please feel free to update it.