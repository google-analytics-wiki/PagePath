function getPagePathLevel1() {
  var path = document.location.pathname;
  var pathArray = path.split('/');

  if (pathArray.length <= 1) {
    return '/';
  } else if (pathArray[1] === 'sp') {
    return pathArray[2] ? '/' + pathArray[2] + '/' : '/';
  } else {
    return pathArray[1] ? '/' + pathArray[1] + '/' : '/';
  }
}