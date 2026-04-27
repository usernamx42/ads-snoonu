import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-black text-off-black tracking-tighter">404</h1>
      <p className="mt-4 text-muted">Page not found.</p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-red text-white px-6 py-3 text-sm font-bold hover:bg-brand-red/90 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
