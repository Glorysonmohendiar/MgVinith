//Area of rectangle.
function areaRectangle(length, breadth){
    return length * breadth;
}
const answer = areaRectangle(5, 7);
console.log("Area of Rectangle is = "+ answer);


// Area of traiangle.
function areaTriangle(base, height){
    return (base * height) / 2;
}
const answer1 = areaTriangle(6, 9);
console.log("Area of Triangle is  = " + answer1);


// Area of Circle
function areaCircle(radius){
    return Math.PI * radius * radius;
}
const answer2 = areaCircle(8);
console.log(answer2);