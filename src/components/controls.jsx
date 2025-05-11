import { SketchPicker } from "react-color";

export default function Controls({ register, watch, setValue }) {
  const fontColor = watch("fontColor");

  return (
    <div className=" p-4 rounded shadow space-y-4">
      <div>
        <label>Font Style</label>
        <select {...register("fontFamily")} className="input">
          <option className="text-black" value="sans-serif">
            Sans Serif
          </option>
          
          <option className="text-black" value="cursive">
            Cursive
          </option>
          <option className="text-black" value="monospace">
            Monospace
          </option>
        </select>
      </div>

      <div>
        <label>Font Size</label>
        <input type="range" min="20" max="100" {...register("fontSize")} />
      </div>

      <div>
        <label>Text Alignment</label>
        <select {...register("textAlign")} className="input">
          <option className="text-black">center</option>
          <option className="text-black">left</option>
          <option className="text-black">right</option>
        </select>
      </div>

      <div>
        <label>Font Color</label>
        <SketchPicker
          color={fontColor}
          onChangeComplete={(color) => setValue("fontColor", color.hex)}
        />
      </div>
    </div>
  );
}
