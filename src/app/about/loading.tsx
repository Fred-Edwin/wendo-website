export default function AboutLoading() {
  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Hero Skeleton */}
      <section className="relative h-[500px] flex items-center justify-center bg-gray-200 animate-pulse">
        <div className="space-y-4 text-center">
          <div className="w-64 h-12 bg-gray-300 rounded mx-auto" />
          <div className="w-96 h-6 bg-gray-300 rounded mx-auto" />
        </div>
      </section>

      {/* Story Section Skeleton */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image Skeleton */}
            <div className="h-[500px] bg-gray-200 rounded-2xl animate-pulse" />

            {/* Text Skeleton */}
            <div className="space-y-6">
              <div className="h-10 bg-gray-200 rounded animate-pulse w-3/4" />
              <div className="space-y-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-full" />
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6" />
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-4/5" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section Skeleton */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="h-10 bg-gray-200 rounded animate-pulse w-96 mx-auto mb-4" />
            <div className="h-6 bg-gray-200 rounded animate-pulse w-64 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-cream rounded-2xl p-6 space-y-4"
              >
                <div className="w-16 h-16 bg-gray-200 rounded-full animate-pulse" />
                <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4" />
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-full" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-4/5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section Skeleton */}
      <section className="bg-beige py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="h-10 bg-gray-200 rounded animate-pulse w-64 mx-auto mb-4" />
            <div className="h-6 bg-gray-200 rounded animate-pulse w-96 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 space-y-4"
              >
                <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse" />
                <div className="h-8 bg-gray-200 rounded animate-pulse w-3/4" />
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-full" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-4/5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
