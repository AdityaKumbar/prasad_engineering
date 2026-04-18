import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center text-center px-4">
      <div className="space-y-4">
        <p className="text-7xl font-display font-bold text-brand-500/40">404</p>
        <h1 className="text-3xl font-display font-bold text-white">Page Not Found</h1>
        <p className="text-steel-400">The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn-primary inline-flex mt-4">Go Back Home</Link>
      </div>
    </section>
  );
}
