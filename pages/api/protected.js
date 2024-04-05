import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    // Your user search logic here
}));

export default function handler(req, res) {
  passport.authenticate('jwt', { session: false }, function(err, user, info) {
    if (err) { return res.status(500).json({ message: err.message }); }
    if (!user) { return res.status(401).json({ message: 'Unauthorized' }); }

    // If authentication was successful, you can proceed with handling the request
    res.status(200).json({ message: 'You are authenticated!' });
  })(req, res);
}
