import { useEffect, useRef } from "react";

export default function PreviewCanvas({ imageFile, text }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();

    const url =
      imageFile && imageFile.length > 0
        ? URL.createObjectURL(imageFile[0])
        : "./placeholder.jpg";

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the image
      ctx.drawImage(img, 0, 0);

      // Draw text (up to 3 lines)
      const lines = text.split("\n").slice(0, 3);
      ctx.font = "78px sans-serif";
      ctx.textAlign = "center";
      ctx.shadowColor = "rgba(0, 0, 0, 0.7)";
      ctx.shadowBlur = 4;
      ctx.fillStyle = "#ffffff";

      lines.forEach((line, i) => {
        ctx.fillText(line, canvas.width / 2, canvas.height - 100 + i * 40);
      });
    };

    img.src = url;

    return () => {
      if (imageFile && imageFile.length > 0) {
        URL.revokeObjectURL(url);
      }
    };
  }, [imageFile, text]);

  return (
    <div className="flex justify-center mt-8">
      <canvas
        ref={canvasRef}
        style={{
          maxWidth: "100%",
          height: "auto",
          border: "2px solid #e5e7eb", 
          borderRadius: "12px",
          padding: "12px",
          background: "#f9fafb", 
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      />
    </div>
  );
}
