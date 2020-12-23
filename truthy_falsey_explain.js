/** True vs Truthy */
//----------------
// True - compare both type and value ===
// Truthy - compare only value ==

/** False vs Falsey */
//----------------
// False - compare both type and value ===
// Falsey - compare only value ==

/** Falsey */ 
//----------------
// Empty string: ""
// 0
// null
// undefined
// NaN

/** Truthy */ 
//----------------
// Object: {}
// Array: []
// Not empty string: "anything"
// Number other than zero: 3.14
// Date: new Date();

/** Double exclamation mark !! */
// Cast to Truthy to True boolean
// เครื่องมือในการ cast Truthy เป็น boolean เพื่อใช้ compare แบบ === ได้่ทั้ง value และ type

var something = 1;
console.log(typeof something)
if (something == true) {
  console.log('Something');
} else {
  console.log('Nothing');
}

// www.codemobiles.com