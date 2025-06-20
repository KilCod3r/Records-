const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to handle form submissions
app.post('/submit-marks', (req, res) => {
    const { studentName, regNumber, courseTitle, units } = req.body;

    const getGrade = (mark) => {
        if (mark >= 70) return 'A';
        if (mark >= 60) return 'B';
        if (mark >= 50) return 'C';
        if (mark >= 40) return 'D';
        return 'F';
    };

    let totalMarks = 0;
    const unitsWithGrades = units.map(unit => {
        const mark = parseFloat(unit.mark);
        totalMarks += mark;
        return { ...unit, mark, grade: getGrade(mark) };
    });

    const averageMarks = totalMarks / units.length;
    const overallGrade = getGrade(averageMarks);

    const results = {
        studentName,
        regNumber,
        courseTitle,
        units: unitsWithGrades,
        totalMarks,
        averageMarks: averageMarks.toFixed(2),
        overallGrade
    };
    
    console.log('Processed results:', results);
    res.json(results);
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 