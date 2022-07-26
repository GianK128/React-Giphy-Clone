import React from "react"
import TrendingSearches from "./TrendingSearches"
import useNearScreen from "hooks/useNearScreen"

const LazyTrendingSearches = () => {
  const {isNearScreen, fromRef} = useNearScreen()

  return <div ref={fromRef}>
    {isNearScreen ? <TrendingSearches /> : null}
  </div>
}

export default LazyTrendingSearches