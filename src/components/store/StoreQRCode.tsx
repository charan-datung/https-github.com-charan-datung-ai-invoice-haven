import { useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Download, Printer } from 'lucide-react';

interface StoreQRCodeProps {
  storeId: string;
  storeName: string;
}

const StoreQRCode = ({ storeId, storeName }: StoreQRCodeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const storeUrl = `${window.location.origin}/store/${storeId}`;

  const handleDownload = () => {
    const svg = containerRef.current?.querySelector('svg');
    if (!svg) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const img = new Image();
    img.onload = () => {
      const padding = 40;
      const textHeight = 50;
      canvas.width = img.width + padding * 2;
      canvas.height = img.height + padding * 2 + textHeight;

      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.drawImage(img, padding, padding);

      ctx.fillStyle = '#3D2C1E';
      ctx.font = 'bold 18px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(storeName, canvas.width / 2, img.height + padding + 30);

      ctx.fillStyle = '#888888';
      ctx.font = '12px sans-serif';
      ctx.fillText('I-scan para bumisita sa Kanto', canvas.width / 2, img.height + padding + 48);

      const link = document.createElement('a');
      link.download = `kanto-qr-${storeId}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };

  const handlePrint = () => {
    const svg = containerRef.current?.querySelector('svg');
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>QR Code - ${storeName}</title>
          <style>
            body {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              margin: 0;
              font-family: sans-serif;
            }
            h1 { font-size: 24px; color: #3D2C1E; margin-bottom: 8px; }
            p { font-size: 14px; color: #888; margin-top: 12px; }
          </style>
        </head>
        <body>
          <h1>${storeName}</h1>
          ${svgData}
          <p>I-scan para bumisita sa Kanto</p>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
      <h3 className="text-lg font-bold text-kanto-brown mb-4">QR Code ng Tindahan</h3>

      <div
        ref={containerRef}
        className="inline-flex flex-col items-center bg-white p-6 rounded-xl border-2 border-dashed border-kanto-cream"
      >
        <QRCodeSVG
          value={storeUrl}
          size={200}
          bgColor="#ffffff"
          fgColor="#3D2C1E"
          level="M"
          includeMargin={false}
        />
        <p className="mt-3 text-sm font-semibold text-kanto-brown">{storeName}</p>
        <p className="text-xs text-kanto-gray mt-1">I-scan para bumisita sa Kanto</p>
      </div>

      <div className="flex items-center justify-center gap-3 mt-5">
        <button
          onClick={handleDownload}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-kanto-orange text-white text-sm font-semibold rounded-lg hover:bg-kanto-orange/90 transition-colors"
        >
          <Download className="w-4 h-4" />
          I-download ang QR
        </button>
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-kanto-cream text-kanto-brown text-sm font-semibold rounded-lg hover:bg-kanto-cream/80 transition-colors"
        >
          <Printer className="w-4 h-4" />
          I-print
        </button>
      </div>
    </div>
  );
};

export default StoreQRCode;
