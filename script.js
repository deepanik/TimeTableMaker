let headersSet = false; // Flag to track whether headers are set

function createHeaders() {
    // Check if headers are already set
    if (headersSet) {
        alert("Headers are already set.");
        return;
    }

    const periodicInput = document.getElementById('period').value;
    const classInput = document.getElementById('class').value;

    const periodicHeading = document.getElementById('periodic-heading');
    const classHeading = document.getElementById('class-heading');

    periodicHeading.innerHTML = `<h2 style="color: #3366cc;">PERIODIC - ${periodicInput}</h2>`;
    classHeading.innerHTML = `<h4 style="color: #3366cc;">CLASS - ${classInput}</h4>`;

    headersSet = true; // Set the flag
}

function createTimetable() {
    const date = document.getElementById('date').value;
    const day = document.getElementById('day').value;
    const subject = document.getElementById('subject').value;

    const table = document.getElementById('timetable-table');

    // Check if the headers are set
    if (!headersSet) {
        alert("Please set Periodic and Class before adding entries.");
        return;
    }

    // Check for null inputs
    if (!date || !day || !subject) {
        alert("Please provide values for Date, Day, and Subject.");
        return;
    }

    // Add a new row with user-provided values
    const newRow = table.insertRow(-1);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    cell1.innerHTML = `<div>${date}</div>`;
    cell2.innerHTML = `<div>${day}</div>`;
    cell3.innerHTML = `<div>${subject}</div>`;

    // Clear input fields
    document.getElementById('date').value = '';
    document.getElementById('day').value = '';
    document.getElementById('subject').value = '';
}

// function deleteCell(row) {
//     const index = row.rowIndex;
//     const table = document.getElementById('timetable-table');
//     table.deleteRow(index);

//     // Check if there are still rows in the table
//     if (table.rows.length === 1) {
//         headersSet = false;
//         // Clear the periodic and class headings
//         document.getElementById('periodic-heading').innerHTML = '';
//         document.getElementById('class-heading').innerHTML = '';
//     }
// }

function saveAsImage() {
    const timetableContainer = document.querySelector('.timetable-container');

    // Use html2canvas to capture the timetable container as an image
    html2canvas(timetableContainer).then(canvas => {
        // Convert the canvas to a data URL representing a JPEG image
        const imageData = canvas.toDataURL('image/jpeg');

        // Create a link element and trigger a download of the image
        const downloadLink = document.createElement('a');
        downloadLink.href = imageData;
        downloadLink.download = 'timetable.jpg';
        downloadLink.click();
    });
}

