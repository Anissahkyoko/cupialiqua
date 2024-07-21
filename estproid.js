function legendTitleOffset(item, entry, title, anchor, y, lr, noBar) {
    // Example logic for calculating the offset
    let offset = 0;

    // Adjust offset based on the 'anchor' parameter
    if (anchor === 'start') {
        offset = 10;
    } else if (anchor === 'middle') {
        offset = 20;
    } else if (anchor === 'end') {
        offset = 30;
    }

    // Further adjust offset based on the 'y' parameter
    offset += y;

    // If 'noBar' is true, apply additional offset
    if (noBar) {
        offset += 5;
    }

    // Example usage of 'lr' parameter for left-right alignment
    if (lr === 'left') {
        offset -= 10;
    } else if (lr === 'right') {
        offset += 10;
    }

    // Print the title and calculated offset (or return the value)
    console.log(`Title: ${title}, Offset: ${offset}`);

    return offset; // Return the calculated offset
}

// Example usage
const item = {};  // Placeholder value
const entry = {}; // Placeholder value
const title = 'Legend Title';
const anchor = 'middle';
const y = 15;
const lr = 'right';
const noBar = true;

const offset = legendTitleOffset(item, entry, title, anchor, y, lr, noBar);
console.log(`Calculated Offset: ${offset}`);
