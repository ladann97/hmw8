class Circle {
	constructor(R){
		this.radius = R
	}
	getArea() { return Math.PI * Math.pow(this.radius,2) }
	getPerimeter() { return 2 * Math.PI * this.radius }
}

let circle = new Circle(4.44);
console.log(circle.getArea()); 
console.log(circle.getPerimeter())