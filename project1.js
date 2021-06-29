function getRandomStr(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * characters.length ));
   }
   return result;
}

function isOnlyNumbers(str) {
   for ( var i = 0; i < str.length; i++ ) {
      if (str.charAt(i) <= '0' || str.charAt(i) >= '9') {
        return false;
      }
   }
   return true; 
}

function hasZero(str) {
   for ( var i = 0; i < str.length; i++ ) {
      if (str.charAt(i) === '0') {
        return true;
      }
   }
   return false; 
}

function isPolindrom(str) {
   for ( var i = 0; i < Math.floor(str.length / 2); i++ ) {
      if (str.charAt(i) !== str.charAt(str.length-i-1)) {
        return false;
      }
   }
   return true; 
}

function getStyles(str) {
  var classes = '';
  if (hasZero(str)) {
    return 'hidden';  
  }
  if (isPolindrom(str)) {
    classes += 'polindrom '; 
  }
  if (isOnlyNumbers(str)) {
    classes += 'only-numbers '; 
  }
  return classes;
}

setInterval(function () {
  let str = getRandomStr(5);
  console.log('string:'+str+' styles:'+getStyles(str));
}, 3000);
