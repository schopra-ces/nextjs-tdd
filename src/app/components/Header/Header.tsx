export default function Header({ title }: { title: string }) {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 z-10">
      <div className="max-w-xl mx-auto sm:px-4 flex justify-between">
        <h1 className="text-3xl font-bold mb-0 text-white">{title}</h1>
      </div>
    </nav>
  );
}
