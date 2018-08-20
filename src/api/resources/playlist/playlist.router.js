import express from 'express';
import passport from 'passport';
import playlistController from './playlist.controller';

export const playListRouter = express.Router();
// const userPolicy = [passport.authenticate('jwt', { session: false })]

playListRouter
  .route('/')
  .post(
    passport.authenticate('jwt', { session: false }),
    playlistController.create
  )
  .get(
    passport.authenticate('jwt', { session: false }),
    playlistController.findAll
  );
