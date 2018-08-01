import userServices from './user.services';
import User from './user.model';
import jwt from '../../helpers/jwt';

export default {
  async signUp(req, res) {
    try {
      const { value, error } = userServices.validateSignUp(req.body);
      if (error) {
        return res.status(400).json(error);
      }
      const encryptPass = userServices.encryptPassword(value.password);
      const user = await User.create({
        email: value.email,
        firstName: value.firstName,
        lastName: value.lastName,
        password: encryptPass,
        role: value.role || STANDARD_ROLE
      });
      res.json({ success: true });
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  },
  async login(req, res) {
    try {
      const { value, error } = userServices.validateLogin(req.body);
      if (error) {
        return res.status(400).json(error);
      }
      const user = await User.findOne({ email: value.email });
      if (!user) {
        return res.status(401).json({ err: 'unauthorized' });
      }
      const authenticated = userServices.comparePassword(
        value.password,
        user.password
      );
      if (!authenticated) {
        return res.status(401).json({ err: 'unauthorized' });
      }
      const token = jwt.issue({ id: user._id }, '1d');
      return res.json(token);
    } catch (err) {
      const token = jwt.issue({ id: user._id }, '1d');
      return res.json({ token });
    }
  },
  authenticate(req, res) {
    return res.json(req.user);
  },
};
