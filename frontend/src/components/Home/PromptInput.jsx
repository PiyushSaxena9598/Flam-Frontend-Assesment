export default function PromptInput({ value, onChange }) {
  return (
    <textarea
      rows={10}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Example: Explain React Hooks with examples..."
      className="w-full rounded-xl border border-slate-700 bg-slate-800 p-5 text-white outline-none resize-none focus:border-blue-500"
    />
  );
}