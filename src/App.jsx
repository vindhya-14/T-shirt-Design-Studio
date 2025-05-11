import { useForm } from "react-hook-form";
import { useEffect, useState, useContext } from "react";
import Controls from "./components/controls";
import ImageUpload from "./components/ImageUpload";
import Canvas2DPreview from "./components/Canvas2DPreview";
import ThreeDPreview from "./components/ThreeDPreview";
import FormControls from "./components/FormControls";
import TextInput from "./components/TextInput";
import { ThemeContext } from "./components/ThemeContext"; 

export default function App() {
  const { register, watch, setValue } = useForm({
    defaultValues: {
      fontFamily: "sans-serif",
      fontColor: "#ffffff",
      fontSize: 40,
      textAlign: "center",
      printText: "",
      imageFile: null,
    },
  });

  const text = watch("printText");
  const imageFile = watch("imageFile");
  const fontFamily = watch("fontFamily");
  const fontSize = watch("fontSize");
  const fontColor = watch("fontColor");
  const textAlign = watch("textAlign");

  const [generated, setGenerated] = useState(null);

  const { currentTheme } = useContext(ThemeContext); // ✅ Access current theme

  useEffect(() => {
    const canvas = document.querySelector("canvas");
    if (canvas) {
      const dataURL = canvas.toDataURL("image/png");
      setGenerated(dataURL);
    }
  }, [text, imageFile, fontFamily, fontSize, fontColor, textAlign]);

  return (
    <div className={`min-h-screen p-6 ${currentTheme} transition-colors`}>
      <h1 className="text-3xl font-bold mb-6 text-center">
        T-shirt Design Studio
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <ImageUpload register={register} imageFile={imageFile} />
        <Controls register={register} watch={watch} setValue={setValue} />
        <FormControls register={register} />
      </div>

      <TextInput register={register} text={text} />

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-3">2D Design Preview</h2>
        <Canvas2DPreview
          imageFile={imageFile}
          text={text}
          style={{ fontFamily, fontSize, fontColor, textAlign }}
        />
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-3">3D T-shirt Preview</h2>
        {generated ? (
          <ThreeDPreview imageUrl={generated} />
        ) : (
          <p className="text-gray-600">Generate a preview first...</p>
        )}
      </div>
    </div>
  );
}
