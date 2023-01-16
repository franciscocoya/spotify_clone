/*
  Warnings:

  - You are about to drop the `Album` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Artist` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AudiosOnPlaylists` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LikedAlbum` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LikedPlaylist` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LikedSong` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Playlist` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SongsOnAlbum` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Track` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "AppLanguage" AS ENUM ('es_ES', 'en');

-- CreateEnum
CREATE TYPE "PlaylistVisibility" AS ENUM ('PUBLIC', 'PRIVATE');

-- DropForeignKey
ALTER TABLE "Artist" DROP CONSTRAINT "Artist_albumId_fkey";

-- DropForeignKey
ALTER TABLE "AudiosOnPlaylists" DROP CONSTRAINT "AudiosOnPlaylists_playlistId_fkey";

-- DropForeignKey
ALTER TABLE "AudiosOnPlaylists" DROP CONSTRAINT "AudiosOnPlaylists_trackId_fkey";

-- DropForeignKey
ALTER TABLE "AudiosOnPlaylists" DROP CONSTRAINT "AudiosOnPlaylists_userId_fkey";

-- DropForeignKey
ALTER TABLE "LikedAlbum" DROP CONSTRAINT "LikedAlbum_albumId_fkey";

-- DropForeignKey
ALTER TABLE "LikedAlbum" DROP CONSTRAINT "LikedAlbum_userId_fkey";

-- DropForeignKey
ALTER TABLE "LikedPlaylist" DROP CONSTRAINT "LikedPlaylist_playlistId_fkey";

-- DropForeignKey
ALTER TABLE "LikedPlaylist" DROP CONSTRAINT "LikedPlaylist_userId_fkey";

-- DropForeignKey
ALTER TABLE "LikedSong" DROP CONSTRAINT "LikedSong_trackId_fkey";

-- DropForeignKey
ALTER TABLE "LikedSong" DROP CONSTRAINT "LikedSong_userId_fkey";

-- DropForeignKey
ALTER TABLE "Playlist" DROP CONSTRAINT "Playlist_userId_fkey";

-- DropForeignKey
ALTER TABLE "SongsOnAlbum" DROP CONSTRAINT "SongsOnAlbum_albumId_fkey";

-- DropForeignKey
ALTER TABLE "SongsOnAlbum" DROP CONSTRAINT "SongsOnAlbum_trackId_fkey";

-- DropForeignKey
ALTER TABLE "Track" DROP CONSTRAINT "Track_albumId_fkey";

-- DropForeignKey
ALTER TABLE "Track" DROP CONSTRAINT "Track_playlistId_fkey";

-- DropForeignKey
ALTER TABLE "_ArtistToTrack" DROP CONSTRAINT "_ArtistToTrack_A_fkey";

-- DropForeignKey
ALTER TABLE "_ArtistToTrack" DROP CONSTRAINT "_ArtistToTrack_B_fkey";

-- DropTable
DROP TABLE "Album";

-- DropTable
DROP TABLE "Artist";

-- DropTable
DROP TABLE "AudiosOnPlaylists";

-- DropTable
DROP TABLE "LikedAlbum";

-- DropTable
DROP TABLE "LikedPlaylist";

-- DropTable
DROP TABLE "LikedSong";

-- DropTable
DROP TABLE "Playlist";

-- DropTable
DROP TABLE "SongsOnAlbum";

-- DropTable
DROP TABLE "Track";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "USERS" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "password" TEXT NOT NULL,
    "profile_image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "USERS_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPreferences" (
    "id" TEXT NOT NULL,
    "lang" "AppLanguage" NOT NULL DEFAULT 'en',
    "userId" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserPreferences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TRACKS" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "url" TEXT NOT NULL,
    "cover" TEXT,
    "codec" TEXT DEFAULT 'mp3',
    "duration" DECIMAL(65,30),
    "bitrate" INTEGER,
    "sampleRate" REAL,
    "file_size" DECIMAL(65,30),
    "genre" TEXT NOT NULL DEFAULT 'pop',
    "explicit" BOOLEAN NOT NULL DEFAULT false,
    "tempo" INTEGER,
    "released_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "playlistId" TEXT,
    "albumId" TEXT NOT NULL,

    CONSTRAINT "TRACKS_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ARTISTS" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "biography" TEXT NOT NULL,
    "profile_image" TEXT,
    "email" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "albumId" TEXT,
    "followers" INTEGER NOT NULL DEFAULT 0,
    "genres" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "ARTISTS_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SHOW" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "date" TIMESTAMP(3),
    "place_google_maps_url" TEXT,
    "tickets_website" TEXT,
    "published_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "artistId" TEXT,

    CONSTRAINT "SHOW_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SHOW_ARTIST" (
    "main_artist" BOOLEAN NOT NULL DEFAULT false,
    "artistId" TEXT NOT NULL,
    "showId" TEXT NOT NULL,
    "confirmated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SHOW_ARTIST_pkey" PRIMARY KEY ("artistId","showId")
);

-- CreateTable
CREATE TABLE "AUDIO_PLAYLIST" (
    "trackId" TEXT NOT NULL,
    "playlistId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "added_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AUDIO_PLAYLIST_pkey" PRIMARY KEY ("trackId","playlistId")
);

-- CreateTable
CREATE TABLE "PLAYLIST" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "thumbnail" TEXT,
    "visibility" "PlaylistVisibility" NOT NULL DEFAULT 'PRIVATE',
    "userId" TEXT NOT NULL,

    CONSTRAINT "PLAYLIST_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PLAYLIST_COLLABORATOR" (
    "userId" TEXT NOT NULL,
    "playlistId" TEXT NOT NULL,

    CONSTRAINT "PLAYLIST_COLLABORATOR_pkey" PRIMARY KEY ("userId","playlistId")
);

-- CreateTable
CREATE TABLE "SONG_ALBUM" (
    "trackId" TEXT NOT NULL,
    "albumId" TEXT NOT NULL,

    CONSTRAINT "SONG_ALBUM_pkey" PRIMARY KEY ("trackId","albumId")
);

-- CreateTable
CREATE TABLE "ALBUM" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "cover" TEXT,
    "type" "AlbumType" NOT NULL DEFAULT 'SINGLE',
    "total_tracks" INTEGER,
    "release_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ALBUM_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "USER_SONG_LIKE" (
    "userId" TEXT NOT NULL,
    "trackId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "USER_SONG_LIKE_pkey" PRIMARY KEY ("userId","trackId")
);

-- CreateTable
CREATE TABLE "USER_ALBUM_LIKE" (
    "userId" TEXT NOT NULL,
    "albumId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "USER_ALBUM_LIKE_pkey" PRIMARY KEY ("userId","albumId")
);

-- CreateTable
CREATE TABLE "USER_PLAYLIST_LIKE" (
    "userId" TEXT NOT NULL,
    "playlistId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "USER_PLAYLIST_LIKE_pkey" PRIMARY KEY ("userId","playlistId")
);

-- CreateTable
CREATE TABLE "USER_ARTIST_FOLLOW" (
    "userId" TEXT NOT NULL,
    "artistId" TEXT NOT NULL,

    CONSTRAINT "USER_ARTIST_FOLLOW_pkey" PRIMARY KEY ("userId","artistId")
);

-- CreateIndex
CREATE UNIQUE INDEX "USERS_email_key" ON "USERS"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserPreferences_userId_key" ON "UserPreferences"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ARTISTS_email_key" ON "ARTISTS"("email");

-- CreateIndex
CREATE UNIQUE INDEX "PLAYLIST_userId_key" ON "PLAYLIST"("userId");

-- AddForeignKey
ALTER TABLE "UserPreferences" ADD CONSTRAINT "UserPreferences_userId_fkey" FOREIGN KEY ("userId") REFERENCES "USERS"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TRACKS" ADD CONSTRAINT "TRACKS_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "PLAYLIST"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TRACKS" ADD CONSTRAINT "TRACKS_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "ALBUM"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ARTISTS" ADD CONSTRAINT "ARTISTS_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "ALBUM"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SHOW" ADD CONSTRAINT "SHOW_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "ARTISTS"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SHOW_ARTIST" ADD CONSTRAINT "SHOW_ARTIST_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "ARTISTS"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SHOW_ARTIST" ADD CONSTRAINT "SHOW_ARTIST_showId_fkey" FOREIGN KEY ("showId") REFERENCES "SHOW"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AUDIO_PLAYLIST" ADD CONSTRAINT "AUDIO_PLAYLIST_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "TRACKS"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AUDIO_PLAYLIST" ADD CONSTRAINT "AUDIO_PLAYLIST_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "PLAYLIST"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AUDIO_PLAYLIST" ADD CONSTRAINT "AUDIO_PLAYLIST_userId_fkey" FOREIGN KEY ("userId") REFERENCES "USERS"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PLAYLIST" ADD CONSTRAINT "PLAYLIST_userId_fkey" FOREIGN KEY ("userId") REFERENCES "USERS"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PLAYLIST_COLLABORATOR" ADD CONSTRAINT "PLAYLIST_COLLABORATOR_userId_fkey" FOREIGN KEY ("userId") REFERENCES "USERS"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PLAYLIST_COLLABORATOR" ADD CONSTRAINT "PLAYLIST_COLLABORATOR_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "PLAYLIST"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SONG_ALBUM" ADD CONSTRAINT "SONG_ALBUM_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "TRACKS"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SONG_ALBUM" ADD CONSTRAINT "SONG_ALBUM_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "ALBUM"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "USER_SONG_LIKE" ADD CONSTRAINT "USER_SONG_LIKE_userId_fkey" FOREIGN KEY ("userId") REFERENCES "USERS"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "USER_SONG_LIKE" ADD CONSTRAINT "USER_SONG_LIKE_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "TRACKS"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "USER_ALBUM_LIKE" ADD CONSTRAINT "USER_ALBUM_LIKE_userId_fkey" FOREIGN KEY ("userId") REFERENCES "USERS"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "USER_ALBUM_LIKE" ADD CONSTRAINT "USER_ALBUM_LIKE_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "ALBUM"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "USER_PLAYLIST_LIKE" ADD CONSTRAINT "USER_PLAYLIST_LIKE_userId_fkey" FOREIGN KEY ("userId") REFERENCES "USERS"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "USER_PLAYLIST_LIKE" ADD CONSTRAINT "USER_PLAYLIST_LIKE_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "PLAYLIST"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "USER_ARTIST_FOLLOW" ADD CONSTRAINT "USER_ARTIST_FOLLOW_userId_fkey" FOREIGN KEY ("userId") REFERENCES "USERS"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "USER_ARTIST_FOLLOW" ADD CONSTRAINT "USER_ARTIST_FOLLOW_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "ARTISTS"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArtistToTrack" ADD CONSTRAINT "_ArtistToTrack_A_fkey" FOREIGN KEY ("A") REFERENCES "ARTISTS"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArtistToTrack" ADD CONSTRAINT "_ArtistToTrack_B_fkey" FOREIGN KEY ("B") REFERENCES "TRACKS"("id") ON DELETE CASCADE ON UPDATE CASCADE;
