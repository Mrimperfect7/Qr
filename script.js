const qrCodeInput = document.getElementById('qr-code-input');
const generateQrCodeButton = document.getElementById('generate-qr-code-button');
const qrCodeContainer = document.getElementById('qr-code-container');

const generateQRCode = () => {
  const qrCodeData = qrCodeInput.value;
  if (qrCodeData) {
    const qrCode = new QRCode(qrCodeContainer, {
      text: qrCodeData,
      width: 200,
      height: 200,
      colorDark: '#000',
      colorLight: '#fff',
      correctLevel: QRCode.CorrectLevel.H
    });
  }
};

generateQrCodeButton.addEventListener('click', generateQRCode);
