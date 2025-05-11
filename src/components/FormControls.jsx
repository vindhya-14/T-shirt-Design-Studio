export default function FormControls({ register }) {
  return (
    <div className="p-8 rounded-xl shadow-xl space-y-6 w-full max-w-md mx-auto bg-opacity-70">
      {/* Height */}
      <div>
        <label htmlFor="height" className="block text-sm font-medium">
          Height (cm)
        </label>
        <input
          id="height"
          type="number"
          {...register("height", { valueAsNumber: true })}
          className="mt-2 block w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:outline-none transition-all duration-200"
          placeholder="Enter height in cm"
          defaultValue={180}
        />
      </div>

      {/* Weight */}
      <div>
        <label htmlFor="weight" className="block text-sm font-medium">
          Weight (kg)
        </label>
        <input
          id="weight"
          type="number"
          {...register("weight", { valueAsNumber: true })}
          className="mt-2 block w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:outline-none transition-all duration-200"
          placeholder="Enter weight in kg"
          defaultValue={80}
        />
      </div>

      {/* Build */}
      <div>
        <label htmlFor="build" className="block text-sm font-medium">
          Build
        </label>
        <select
          id="build"
          {...register("build")}
          className="mt-2 block w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:outline-none transition-all duration-200"
          defaultValue="Athletic"
        >
          <option value="Lean">Lean</option>
          <option value="Regular">Regular</option>
          <option value="Athletic">Athletic</option>
          <option value="Big">Big</option>
        </select>
      </div>
    </div>
  );
}
