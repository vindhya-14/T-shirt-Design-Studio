export default function TextInput({ register, printText }) {
  return (
    <div className="bg-white px-10 py-12 mt-10 rounded-xl shadow-lg space-y-5 max-w-lg mx-auto">
      <label className="block text-lg font-semibold text-black">
        Text to Print (max 3 lines)
      </label>
      <textarea
        {...register("printText")}
        maxLength={150}
        rows={3}
        className="w-full text-black p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
        placeholder="Enter up to 3 lines..."
      />

      <div className="text-sm text-gray-600 mt-2">
        <span className="font-semibold">Preview:</span>
        <div className="mt-2 p-4 border-2 border-dashed border-gray-200 rounded-md bg-gray-50 text-black space-y-1">
          {printText
            ?.split("\n")
            .slice(0, 3)
            .map((line, idx) => (
              <div key={idx} className="truncate">
                {line}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
