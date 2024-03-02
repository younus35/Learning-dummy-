exports.getContactUs = (req, res, next) =>{
     res.render('feedback',
     {pageTitle:'Contact Us',
      path:'/contactus'
    });
}

exports.postContactUs = (req, res, next) =>{
     res.redirect('/success');
}

exports.getSuccess = (req, res, next) =>{
     res.render('success',
     {pageTitle:'Success',
      path:'/success'
     })
}