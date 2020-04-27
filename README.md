![Astronaut_Crowd](https://www.amny.com/wp-content/uploads/2019/12/Astronaut.jpg)


# BEAT BOX

# PROJECT 2 README <!-- omit in toc -->

- [Project Planning](#Project-Planning)
  - [Overview](#Overview)
  - [Wireframes](#Wireframes)
  - [MVP](#MVP)
    - [Goals](#Goals)
    - [Libraries](#Libraries)
    - [Data](#Data)
    - [Component Hierarchy](#Component-Hierarchy)
    - [Component Breakdown](#Component-Breakdown)
    - [Component Estimates](#Component-Estimates)
    - [Helper Functions](#Helper-Functions)
  - [Post-MVP](#Post-MVP)
- [Project Delivery](#Project-Delivery)
  - [Code Showcase](#Code-Showcase)
  - [Code Issues & Resolutions](#Code-Issues--Resolutions)

## Project Planning

### Overview

_**BEAT_BOX** A music player app that enables the user to take control and create their own DJ name and custom playlist. ._

<br>

### Wireframes

- Mobile Wireframe

![Mobile_Wireframe](https://i.imgur.com/BqpT3m9.png)

- Tablet Wireframe

![Tablet_Wireframe](https://i.imgur.com/JNbusc2.png)

- Desktop Wireframe

![Desktop_Wireframe](https://i.imgur.com/Cibr4hg.png)



<br>

### MVP

#### Goals

- _Get your own DJ name_
- _Search different tracks by aritst or song name_
- _Use API to render the tracks to the screen_
- _Use Storybook to create 6 components_
- _Create a search button for artist or song_

<br>

#### Libraries


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   |  |


<br>

#### Data


|    API     | Quality Docs? | Website       | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| lastfm API |      yes      | _lastfm.com_ | _http://ws.audioscrobbler.com/2.0/?method=track.search&track=Believe&api_key=9357323b21f3ac3a16289e7e62479e88&format=json_ |

<br>

#### Component Hierarchy

```
src
|__ assets/
      |__ storybook components
      |__ fonts
      |__ images
      |__ wireframes
|__ components/
      |__ App.jsx
      |__ Header.jsx
      |__ Name.jsx
      |__ Searchbar.jsx
      |__ Playlist.jsx
      |__ Searchbutton.jsx
      |__ Footer.jsx
```

<br>

#### Component Breakdown


|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
| Header        | functional |   n   |   n   | _The header will contain the logo and project name._               |
| DJ Name       | functional |   n   |   n   | _The DJ Name will display custom name for each User._       |
| Search Bar    | functional |   y   |   y   | _The Search Bar will take user input by song or artist._      |
| Play List     | class      |   y   |   y   | _The play list will render the songs via props._                 |
| Search Button | functional |   n   |   n   | _The search buton will be the event handler to generate song results._ |
| Footer        | functional |   n   |   n   | _The footer will show my name and copyright._ |
 
<br>

#### Component Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Pseudocode          |    M     |     2 hrs      |     TBD       |     TBD     |
| Nav Bar             |    L     |     1 hr       |     TBD       |     TBD     |
| Footer              |    L     |     1 hr       |     TBD       |     TBD     |
| Basic React Code    |    H     |     6 hrs      |     TBD       |     TBD     |
| Add Clickable Buttons |  M     |     4 hrs      |     TBD       |     TBD     |
| Basic CSS Styling   |    M     |     6 hrs      |     TBD       |     TBD     |
| Button Styling      |    H     |     4 hrs      |     TBD       |     TBD     |
| Add Playlist        |    H     |     6 hrs      |     TBD       |     TBD     |
| Playlist Styling    |    H     |     5 hrs      |     TBD       |     TBD     |
| Name Creater w .json|    H     |     6 hrs      |     TBD       |     TBD     |
| Working with API    |    H     |     6 hrs      |     TBD       |     TBD     |
| Storybook component |    H     |     8 hrs      |     TBD       |     TBD     |
| TOTAL               |          |     55 hrs     |     TBD       |     TBD     |

<br>

#### Helper Functions


|  Function  | Description                                |
| :--------: | :----------------------------------------- |
|  | __ |

<br>

### SWOT-Analysis

My plan to come over weakness is to review notes, google, use houston-we-have-a-problem channel, get help from classmates and overall take breaks when necessary.

### Post-MVP

- _Have playlist play directly from app_
- _Make user profile_
- _Save multiple playlists_
- _Have a favorite artist list_
- _Have a favorite song list_



<br>

***

## Project Delivery

### Code Showcase

N/A

### Code Issues & Resolutions

N/A
