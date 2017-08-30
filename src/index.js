const library = (function module() {
  function each(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i])
    }
    return arr
  }

  return {
    each: each,
    map: function(arr, callback) {
      const newArray = []

      each(arr, function(element) {
        newArray.push(callback(element))
      })

      return newArray
    },
    filter: function(arr, callback) {
      const newArr = []

      for (let i = 0; i < arr.length; i++) {
        const el = arr[i]
        if (callback(el)) newArr.push(el)
      }

      return newArr
    },
    find: function find(arr, callback) {
      let returnVal
      for (let i = 0; i < arr.length; i++) {
        returnVal = arr[i]
        if (callback(returnVal) === true) {
        break
        }
      }

      return returnVal
    },
    reduce: function reduce (array, callback, initialValue) {
      let acumulator = initialValue ? initialValue : array[0];
      let i = initialValue ? 0 : 1;

      for (; i < array.length; i++) {
        acumulator = callback(acumulator, array[i])
      }
      return acumulator
    },
    sortBy: function sortBy (arr, iterator) {
      let newarr = []
      if (typeof iterator === "function"){
        for (let i = 0; i < arr.length; i++){
          let el = arr[i]
          let modified = iterator(el)
          newarr.push(modified)
        }
      } else {
        for (let i = 0; i < arr.length; i++){
          newarr.push(arr[i][iterator])
        }
      }
      for (var j = arr.length-1; j>=0; j--){
        for (let i = 0; i < arr.length; i++){
          // debugger
          if (newarr[i] > newarr[i+1]){
            var temp = newarr[i];
            newarr[i] = newarr[i+1];
            newarr[i+1] = temp;
            var temp1 = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp1;
          }
        }
      }
      return arr
    },
    size: function size (arr) {
      let newarr = Object.values(arr)
      return newarr.indexOf(newarr.slice(-1)[0]) + 1
    },
    first: function first (arr) {
      return arr[0]
    },
    last: function last (arr) {
      return arr.slice(-1)[0]
    },
    compact: function compact (arr) {
      let new_arr = []
      for(let i = 0; i < arr.length; i++ ){
        if (arr[i]){
          new_arr.push(arr[i])
        }
      }
      return new_arr
    },
    flatten: function flatten (arr) {
      // let newArray = []
      // for (let i = 0; i<arr.length; i++){
      //     // if (!Array.isArray(arr[i])){
      //     let nestedArr = arr[i]
      //     // }
      //     debugger
      //     let shallow = false
      //     while (!shallow){
      //       if (Array.isArray(nestedArr)){
      //         if (!Array.isArray(nestedArr[0]) && nestedArr.length !== 0){
      //           newArray.push(nestedArr[0])
      //           nestedArr.shift()
      //         }
      //       } else {
      //       newArray.push(nestedArr)
      //       shallow = true
      //       }
      //     }
      //   }
      // return newArray
      return arr.reduce((a,b)=>a.concat(Array.isArray(b)? flatten(b):b),[])
    },
    uniq: function uniq (arr) {
      let newArr = []
      for (let i = 0; i<arr.length; i++){
        if (!newArr.includes(arr[i])){
          newArr.push(arr[i])
        }
      }
      return newArr
    },
    bind: function(funct, obj, arg){
       obj.funct = funct;
       return function(){return obj.funct(arg)};
    },
    keys: function keys (object) {
      return Object.keys(object)
    },
    values: function values (object) {
      return object.values
    },
    functions: function functions (object) {
      return Object.keys(object.constructor(this))
    },

  }
})()
