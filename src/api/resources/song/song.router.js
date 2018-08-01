import express from 'express';
import songController from './song.controller';
import passport from 'passport';
import { isArtist } from '../../middlewares/is-artist';

export const songRouter = express.Router();
const artistPolicy = [passport.authenticate('jwt', { session: false }), isArtist]

songRouter
  .route('/')
  .post(artistPolicy, songController.create)
  .get(passport.authenticate('jwt', { session: false }), songController.findAll);

songRouter
  .route('/:id')
  .get(passport.authenticate('jwt', { session: false }), songController.findOne)
  .delete(artistPolicy, songController.delete)
  .put(artistPolicy, songController.update);
