[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=franciscocoya_spotify_clone&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=franciscocoya_spotify_clone) [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=franciscocoya_spotify_clone&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=franciscocoya_spotify_clone)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=franciscocoya_spotify_clone&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=franciscocoya_spotify_clone) [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=franciscocoya_spotify_clone&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=franciscocoya_spotify_clone)

Spotify web player currently developed under React Framework. This streamming platform allows you to listen all music in the world and it also has lots of engineering behind it.

## Getting Started

First, run the development server:

```
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## External libraries using for this project

- [Recoil JS](https://recoiljs.org/docs/introduction/getting-started): For state management. Very simple to use.
- [Heroicons](https://heroicons.com/). An icon library compatible with NextJS. By creators of Tailwind CSS framework.
- [Firebase](https://firebase.google.com/). To store the songs with their Cloud storage functionallity
- [Prisma](https://www.prisma.io/). An NodeJS ORM.

## Features

### Song player

One of the most important parts of the application. It has implemented as aesthetic and identical as posible.

![image](https://user-images.githubusercontent.com/56480356/212466286-a1259a21-1ca1-4e20-ad75-718eb4a7dd61.png)

### Autocomplete text input for music genres

This component reads all music genres from a JSON file using the getStaticProps (NextJS) function. To increase usability, a suggestion counter and a delete button have been created. The design is our own.

<img src="https://user-images.githubusercontent.com/56480356/214149011-e6192977-9d41-492e-918e-00205d4aa68a.png" alt="Autocomplete music genres text input" width="400px" height="auto" />

![image](https://user-images.githubusercontent.com/56480356/214149659-cef80949-8d79-4af6-b80e-a8f9314fb235.png)

## Responsive Design

To improve user experience, player and volume control are fully responsive. The next snapshot shows the artist page on tablet devices.

<img src="https://user-images.githubusercontent.com/56480356/213693172-1c8e2830-777c-4b54-8438-9a8148c1d944.png" alt="App on tablet devices" width="400px" height="auto"/>

## Pages

### Upload a track

Available for artist role only.

<img src="https://user-images.githubusercontent.com/56480356/214150052-136b2442-95a5-4aa1-8002-ab1a14f1b8d9.png" alt="Upload a track page snapshot" width="90%" height="auto"/>

<br />

_The original design and logo are the property of Spotify. The project is for personal and academic purposes only. [© 2023 Spotify AB](https://open.spotify.com/)_
