const router = require('express').Router();
const passport = require('passport');

router.get('/', function(req, res) {
    res.redirect('/user');
  });

  router.get('/google', passport.authenticate(
    'google',
    { scope: ['profile'] 
    // 'email'] 
  }
  ));
  
  // router.get('/oauth2callback', passport.authenticate(
  //   'google',
  //   {
  //     successRedirect : '/pins',
  //     failureRedirect : '/pins'
  //   }
  // ));

  router.get('/login/success', (req, res) => {

    if(req.user) {
      res.status(200).json({
        success:true,
        message: "successfull",
        user:req.user,
        // cookie: req.cookies
        // jwt
      })

    }

  })

  router.get('/login/failed', (req, res) => {
    res.status(401).json({
      success:false,
      message: "failure"
    })
  })

  router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('http://localhost:3000/')
  })

  router.get('/google/callback', passport.authenticate('google',{
    successRedirect: 'http://localhost:3000/',
    failureRedirect: '/login/failed'
  }))
  
  router.get('/logout', function(req, res){
    req.logout(()=> {
      res.redirect('/user/login');
    });
  });
  
  module.exports = router