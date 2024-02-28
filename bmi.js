function bmiCalculator (weight, height) {
    // Calculate Body Mass Index
    var bmi = weight / (height * height);

    // Initialize the 'interpretation' variable
    var interpretation;

    // Function that outputs (returns) a different message depending on the BMI.
    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    } else if (bmi > 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }
    return interpretation;
}