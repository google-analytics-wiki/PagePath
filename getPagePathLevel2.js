function getPagePathLevel2() {
  var path = document.location.pathname;
  var pathArray = path.split('/');

  if (pathArray.length <= 1) {
    return '/';
  } else if (pathArray[1] === 'sp') {
    if (pathArray.length <= 3) {
      return pathArray[2] ? '/' + pathArray[2] + '/' : '/';
    } else {
      return pathArray[3] ? '/' + pathArray[3] + '/' : '/';
    }
  } else {
    if (pathArray.length <= 2) {
      return pathArray[1] ? '/' + pathArray[1] + '/' : '/';
    } else {
      return pathArray[2] ? '/' + pathArray[2] + '/' : '/';
    }
  }
}