document.getElementById('marksForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const unitEntries = document.querySelectorAll('.unit-entry');
    const units = [];
    unitEntries.forEach(entry => {
        units.push({
            name: entry.querySelector('.unit-name').value,
            mark: entry.querySelector('.unit-mark').value
        });
    });

    const formData = {
        studentName: document.getElementById('studentName').value,
        regNumber: document.getElementById('regNumber').value,
        courseTitle: document.getElementById('courseTitle').value,
        units: units
    };

    try {
        const response = await fetch('/submit-marks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const results = await response.json();
        
        let unitsHtml = '';
        results.units.forEach(unit => {
            unitsHtml += `<p><strong>${unit.name}:</strong> ${unit.mark} (Grade: ${unit.grade})</p>`;
        });

        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = `
            <h2>Results</h2>
            <p><strong>Student Name:</strong> ${results.studentName}</p>
            <p><strong>Registration Number:</strong> ${results.regNumber}</p>
            <p><strong>Course Title:</strong> ${results.courseTitle}</p>
            <hr>
            ${unitsHtml}
            <hr>
            <p><strong>Total Marks:</strong> ${results.totalMarks}</p>
            <p><strong>Average Marks:</strong> ${results.averageMarks}</p>
            <p><strong>Overall Grade:</strong> ${results.overallGrade}</p>
        `;

    } catch (error) {
        console.error('Error submitting form:', error);
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = `<p>There was an error processing your request. Please try again.</p>`;
    }
}); 