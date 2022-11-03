//Area of rectangle.
function areaRectangle(length, breadth){
    area = length * breadth;
}
const answer = areaRectangle(5, 7);
console.log("Area of Rectangle is = "+ area);


// Area of traiangle.
function areaTriangle(base, height){
    area = (base * height) / 2;
}
const answer1 = areaTriangle(6, 9);
console.log("Area of Triangle is  = " + area);


// Area of Circle
function areaCircle(radius){
    area = Math.PI * radius * radius;
}
const answer2 = areaCircle(8);
console.log(area);