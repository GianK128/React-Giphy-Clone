import { useState, useEffect, useRef } from "react"

const useNearScreen = ({ distance = '100px', externalRef, once = true } = {}) => {
  const [isNearScreen, setNearScreen] = useState(false)
  const fromRef = useRef()

  // Create observer only when first loading
  useEffect(() => {
    const element = externalRef ? externalRef.current : fromRef.current

    const onObserved = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setNearScreen(true)
        once && observer.disconnect()
      } else {
        !once && setNearScreen(false)
      }
    }
    
    // Observe element to be lazy-loaded
    const observer = new IntersectionObserver(onObserved, {
      rootMargin: distance
    })
    element && observer.observe(element)

    // Disconnect when de-rendering component
    return () => observer && observer.disconnect()
  })

  return {isNearScreen, fromRef}
}

export default useNearScreen