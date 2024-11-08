function calculateCircleProperties(radius) {
    if (radius <= 0) {
        console.log("Please enter a positive radius value.");
        return;
    }
    
    const pi = Math.PI;
    const area = pi * Math.pow(radius, 2);
    const circumference = 2 * pi * radius;

    console.log(`For a circle with radius ${radius}:`);
    console.log(`Area: ${area.toFixed(2)}`);
    console.log(`Circumference: ${circumference.toFixed(2)}`);
}

// Example usage:
const radius = 5; // Replace with desired radius
calculateCircleProperties(radius);
