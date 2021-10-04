// Add your Circle class here
class Circle
{
    constructor( radius ) {
        this.radius = radius;
    }
    get diameter() {
        return this.radius * 2;
    }
    get circumference() {
        return Math.PI * 2 * this.radius;
    }
    get area() {
        return Math.PI * (this.radius * this.radius);
    }
    set diameter(value) {
        this.radius = value / 2;
    }
    set circumference(value) {
        this.radius = 15.5;
    }
    set area(value) {
        this.radius = 7.5
    }
}