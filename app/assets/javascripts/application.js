//= require webpack-bundle

function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}

var isStorageSupported = supports_html5_storage();

//function stateToStorage(){
//  if (isStorageSupported)
//    (alert("ALERT")
//}
