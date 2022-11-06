const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');


let account = {
  mode: "development",
  watch: true,
  entry: {
    'js/login/login.js': './account/resources/js/login/login.js',
    'js/logout/logout.js': './account/resources/js/logout/logout.js',
    'js/register/register.js': './account/resources/js/register/register.js',
  },
  output: {
    filename: '[name]',
    path: path.resolve(__dirname, './account/static/account/dist'),
  }
};


let catalog = {
  mode: "development",
  watch: true,
  entry: {
    'js/detail/detail.js': './catalog/resources/js/detail/detail.js',
    'js/manage/manage.js': './catalog/resources/js/manage/manage.js',
    'js/table/delete.js': './catalog/resources/js/table/delete.js',
  },
  output: {
    filename: '[name]',
    path: path.resolve(__dirname, './catalog/static/catalog/dist'),
  }
};


let core = {
  mode: "development",
  watch: true,
  entry: {
  },
  output: {
    filename: '[name]',
    path: path.resolve(__dirname, './core/static/core/dist'),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        // bootstrap
        { from: './node_modules/bootstrap/dist/css/bootstrap.min.css', to: './vendors/bootstrap/bootstrap.min.css' },
        { from: './node_modules/bootstrap/dist/css/bootstrap.min.css.map', to: './vendors/bootstrap/bootstrap.min.css.map' },
        { from: './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', to: './vendors/bootstrap/bootstrap.bundle.min.js' },
        { from: './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js.map', to: './vendors/bootstrap/bootstrap.bundle.min.js.map' },

        // jquery
        { from: './node_modules/jquery/dist/jquery.min.js', to: './vendors/jquery/jquery.min.js' },
        { from: './node_modules/jquery/dist/jquery.min.map', to: './vendors/jquery/jquery.min.map' },

        // loader
        { from: './node_modules/gasparesganga-jquery-loading-overlay/dist/loadingoverlay.min.js', to: './vendors/loadingoverlay/loadingoverlay.min.js' },
        { from: './node_modules/gasparesganga-jquery-loading-overlay/dist/loadingoverlay.min.js.map', to: './vendors/loadingoverlay/loadingoverlay.min.map' },

        // js cookie
        { from: './node_modules/js-cookie/dist/js.cookie.js', to: './vendors/js-cookie/js.cookie.js' },
      ]
    })
  ]
};

let order = {
  mode: "development",
  watch: true,
  entry: {
    'js/cart/cart.js': './order/resources/js/cart/cart.js',
    'js/list/buyer/list.js': './order/resources/js/list/buyer/list.js',
    'js/list/seller/list.js': './order/resources/js/list/seller/list.js',
    'js/list/staff/list.js': './order/resources/js/list/staff/list.js',
  },
  output: {
    filename: '[name]',
    path: path.resolve(__dirname, './order/static/order/dist'),
  }
};

module.exports = [
  account,
  catalog,
  core,
  order
]
