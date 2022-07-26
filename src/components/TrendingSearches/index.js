import React, { Suspense } from "react"
import useNearScreen from "hooks/useNearScreen"
import Loader from "components/Loader"

// Load component dinamically
const TrendingSearches = React.lazy(
  () => import('./TrendingSearches')
)

const LazyTrendingSearches = () => {
  const {isNearScreen, fromRef} = useNearScreen()

  return <div ref={fromRef}>
    <Suspense fallback={<Loader />}>
      {isNearScreen ? <TrendingSearches /> : <Loader />}
    </Suspense>
  </div>
}

export default LazyTrendingSearches