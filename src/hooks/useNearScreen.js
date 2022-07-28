import { useState, useEffect, useRef } from "react"

const useNearScreen = ({ distance = '100px' } = {}) => {
  const [isNearScreen, setNearScreen] = useState(false)
  const fromRef = useRef()

  // Create observer only when first loading
  useEffect(() => {
    const onObserved = (entries, observer) => {
      const element = entries[0]
      if (element.isIntersecting) {
        setNearScreen(true)
        observer.disconnect()
      }
    }
    
    // Observe element to be lazy-loaded
    const observer = new IntersectionObserver(onObserved, {
      rootMargin: distance
    })
    observer.observe(fromRef.current)

    // Disconnect when de-rendering component
    return () => observer && observer.disconnect()
  })

  return {isNearScreen, fromRef}
}

export default useNearScreen