/*
Class for managing loader
*/
class Loader
{
  // show loader for element <body>
  showBodyLoader()
  {
    $("body").LoadingOverlay("show", {
      background  : "rgba(232, 232, 232, 0.5)"
    });
  }

  // hide loader for element <body>
  hideBodyLoader()
  {
    $("body").LoadingOverlay("hide", true);
  }
}

export default new Loader;
