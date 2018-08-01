import { ARTIRST_ROLE } from '../resources/user/user.model';

export const isArtist = (req, res, next) => {
  if (req.user.role !== ARTIRST_ROLE) {
    return res.json({ err: 'unauthorized, not an artist' });
  }
  next();
};
