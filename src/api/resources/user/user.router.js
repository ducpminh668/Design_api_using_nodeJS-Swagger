import express from 'express';
import userController from './user.controller';
export const userRouter = express.Router();
import passport from 'passport';

userRouter.post('/signup', userController.signUp);
userRouter.post('/login', userController.login);
userRouter.get(
  '/me',
  passport.authenticate('jwt', { session: false }),
  userController.authenticate
);
