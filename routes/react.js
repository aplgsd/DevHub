exports.get = function(req, res, app) {
  console.log('/');

  res.render('react',{
    locals:{
      title_name: app.get('title_name'),
      menu_links: app.get('menu_links')
    }
  });
}
