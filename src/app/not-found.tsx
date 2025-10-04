import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        {/* 404 Number */}
        <h1 className="font-[family-name:var(--font-playfair)] font-bold text-[150px] sm:text-[200px] text-accent leading-none">
          404
        </h1>

        {/* Message */}
        <h2 className="font-[family-name:var(--font-playfair)] font-bold text-3xl sm:text-4xl text-primary mb-4">
          Page Not Found
        </h2>

        <p className="text-secondary text-lg mb-8">
          Oops! The page you're looking for seems to have wandered off. Perhaps
          it went for a coffee break?
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-accent/90 transition-all hover:shadow-lg"
          >
            <HomeIcon className="w-5 h-5" />
            Back to Home
          </Link>
          <Link
            href="/menu"
            className="inline-block bg-transparent border-2 border-accent text-accent px-8 py-3 rounded-full font-semibold hover:bg-accent hover:text-white transition-all hover:shadow-lg"
          >
            View Menu
          </Link>
        </div>

        {/* Coffee ASCII Art */}
        <div className="mt-12 text-secondary font-mono text-xs opacity-50">
          <pre>
{`    (  )   (   )  )
     ) (   )  (  (
     ( )  (    ) )
     _____________
    <_____________> ___
    |             |/ _ \\
    |    Wendo   | | | |
    |_____________|_| |_|`}
          </pre>
        </div>
      </div>
    </div>
  );
}
