// const passport = require('passport')
// // Check documentation for specific platform in passsport js
// const User = require('../models/User');
// // const GoogleStrategy = require('passport-google-oauth20').OAuth2Strategy;
// const GoogleStrategy = require('passport-google-oauth20').Strategy;

// passport.use(new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_SECRET,
//     callbackURL: process.env.GOOGLE_CALLBACK
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOne({ googleId: profile.id }, function(err, user) {
//       if (err) return cb(err);
//       if (user) {
//         return cb(null, user);
//       } else {
//         // we have a new user via OAuth!
//         var newUser = new User({
//           name: profile.displayName,
//           email: profile.emails[0].value,
//           googleId: profile.id
//         });
//         newUser.save(function(err) {
//           if (err) return cb(err);
//           return cb(null, newUser);
//         });
//       }
//     });
//   }
// ));

// passport.serializeUser(function(user, done){
//     done(null, user.id)
// });

// passport.deserializeUser(function(id, done) {
//     User.findById(id, function(err, user){
//         done(err, user);
//     })
// })

// // ** Google OAuth is set up on localhost:3001 in Google Dev Console
// // Passport is NOT set up