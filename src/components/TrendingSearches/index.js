import React, { useState, useEffect, useRef } from "react"
import getTrendingTerms from "../../services/trendingTermsService"
import Category from "../Category"

const TrendingSearches = () => {
  const [trends, setTrends] = useState([])

  useEffect(() => {
    getTrendingTerms()
      .then((data) => 
        setTrends(data)
      )
  }, [])

  return <Category name={'Tendencias'} options={trends} />
}

const LazyTrendingSearches = () => {
  const [isNearScreen, setNearScreen] = useState(false)
  const elementRef = useRef()

  // Create observer only when first loading
  useEffect(() => {
    const onObserved = (entries, observer) => {
      const element = entries[0]
      console.log(element)
      if (element.isIntersecting) {
        setNearScreen(true)
        observer.disconnect()
      }
    }
    
    // Observe element to be lazy-loaded
    const observer = new IntersectionObserver(onObserved, {
      rootMargin: '100px'
    })
    observer.observe(elementRef.current)

    // Disconnect when de-rendering component
    return () => observer && observer.disconnect()
  })

  return <div ref={elementRef}>
    {isNearScreen ? <TrendingSearches /> : null}
  </div>
}

export default LazyTrendingSearches