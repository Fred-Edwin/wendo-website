export default function MenuLoading() {
  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Hero Skeleton */}
      <section className="relative h-[400px] flex items-center justify-center bg-gray-200 animate-pulse">
        <div className="w-64 h-12 bg-gray-300 rounded" />
      </section>

      {/* Menu Content Skeleton */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs Skeleton */}
          <div className="flex overflow-x-auto gap-3 mb-12 pb-4">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="h-12 w-32 bg-gray-200 rounded-full animate-pulse flex-shrink-0"
              />
            ))}
          </div>

          {/* Menu Items Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-md"
              >
                {/* Image Skeleton */}
                <div className="w-full h-64 bg-gray-200 animate-pulse" />

                {/* Content Skeleton */}
                <div className="p-6 space-y-4">
                  <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-full" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3" />
                  <div className="h-8 bg-gray-200 rounded animate-pulse w-1/2 mt-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
