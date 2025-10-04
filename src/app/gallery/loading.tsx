export default function GalleryLoading() {
  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Hero Skeleton */}
      <section className="relative h-[400px] flex items-center justify-center bg-gray-200 animate-pulse">
        <div className="w-64 h-12 bg-gray-300 rounded" />
      </section>

      {/* Gallery Content Skeleton */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons Skeleton */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-12 w-32 bg-gray-200 rounded-full animate-pulse"
              />
            ))}
          </div>

          {/* Gallery Grid Skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(16)].map((_, i) => (
              <div
                key={i}
                className={`bg-gray-200 rounded-lg animate-pulse ${
                  i % 5 === 0 ? "row-span-2 h-96" : "h-64"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
