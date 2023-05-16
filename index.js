// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius
    }
    get diameter() {
        return this.radius * 2
    }
    get circumference (){
        return Math.PI * this.diameter
    }
    get area (){
        return Math.PI * (this.radius * this.radius)
    }
    set diameter(newDiameter){
       return this.radius = newDiameter / 2
    }
    set circumference(newCumferrnc){
       return this.radius = (newCumferrnc/ Math.PI) / 2
    }
    set area(newArea){
       return this.radius = Math.sqrt((newArea / Math.PI))
    }
}

const circle = new Circle(6)
circle.area = 28.27
console.log(circle.radius)


helpers.js

