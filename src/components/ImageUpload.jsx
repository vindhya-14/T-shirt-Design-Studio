import { useEffect, useState } from "react";

export default function ImageUpload({ register, imageFile }) {
  const [preview, setPreview] = useState("./img1.png");

  useEffect(() => {
    if (imageFile && imageFile.length > 0) {
      const file = imageFile[0];
      const url = URL.createObjectURL(file);
      setPreview(url);
      return () => URL.revokeObjectURL(url);
    }
  }, []);

  return (
    <div className="w-full">
      <label
        htmlFor="imageFile"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Upload Design (JPG, PNG, or SVG)
      </label>
      <div
        className="border-2 border-dashed border-gray-300 hover:border-gray-500 p-6 rounded-md cursor-pointer transition-all duration-200 ease-in-out"
        onClick={() => document.getElementById("file-input").click()}
      >
        <input
          id="file-input"
          type="file"
          {...register("imageFile")}
          className="hidden"
          accept="image/*"
        />
        <p className="text-gray-500">Drag and drop or click to select a file</p>
      </div>

      
      <div className="mt-4 w-full">
        <img
          src={preview}
          alt="Design Preview"
          className="w-full object-contain max-h-96 rounded-lg shadow-md border-2 border-gray-300"
        />
      </div>
    </div>
  );
}
