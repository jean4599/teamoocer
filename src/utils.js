import React from 'react'
export function toArray(obj) {
  if (!obj) return []

  var arr = Object.keys(obj).map(function (key, index) { 
    var result  = clone(obj[key]);
    result.key = key
    return result; 
  });
  return arr
}
export function getMarks(obj, getkeys, values){
  var result = {};
  Object.keys(obj).map(function (key, index){
    var r_key=obj[key][getkeys].toFixed(2)
    var r_value=obj[key][values];
    if(result[r_key]!=null){
      console.log(result[r_key]['value'])
      r_value = result[r_key]['value']+' ,'+ r_value;
    }
    result[r_key] = '';
  })
  return result
}
export function retrieveData(obj, key1, key2, key3, val1, val2, val3){
  var result = Object.keys(obj).map(function(key, index){
    var r = {};
    if(key1!=null){
      var value1 = obj[key][val1];
      r[key1] = value1;
    }
    if(key2!=null){
      var value2 = obj[key][val2];
      r[key2] = value2;

    }
    if(key3!=null){
      var value3 = obj[key][val3];
      r[key3] = value3;
    }
    return r
  })
  return result
}

function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}