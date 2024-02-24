function generateQR() {
    // Get the text input value
    const textInput = document.getElementById('text-input').value;

    // Check if there is input
    if (!textInput) {
        alert('Please enter text to generate QR code.');
        return;
    }

    // Clear existing QR code
    document.getElementById('qrcode').innerHTML = '';

    // Create QR code using a library (e.g., qrious)
    const qr = new QRious({
        element: document.getElementById('qrcode'),
        value: textInput,
        size: 200,
    });
}
