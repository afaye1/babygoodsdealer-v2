export default function Loading() {
  return (
    <div className="min-h-screen bg-cream-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated logo/loader */}
        <div className="relative mb-6">
          {/* Outer ring */}
          <div className="w-16 h-16 border-4 border-sage-100 rounded-full animate-pulse" />

          {/* Inner spinning ring */}
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-sage-500 rounded-full animate-spin" />

          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-sage-400 rounded-full animate-pulse" />
          </div>
        </div>

        {/* Loading text */}
        <p className="text-charcoal-500 text-sm animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  )
}
