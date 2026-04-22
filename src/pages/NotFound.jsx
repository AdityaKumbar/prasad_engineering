import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center text-center px-4 bg-[#307db5] section-transition">
      <div className="space-y-4">
        <p className="text-7xl font-display font-bold text-white/45">404</p>
        <h1 className="text-3xl font-display font-bold text-white">Page Not Found</h1>
        <p className="text-white/80">The page you're looking for doesn't exist.</p>
        <Link to="/" className="inline-flex mt-4 px-6 py-3 rounded-xl bg-white text-[#225f8e] font-semibold hover:bg-blue-50 transition-colors">Go Back Home</Link>
      </div>
    </section>
  );
}
