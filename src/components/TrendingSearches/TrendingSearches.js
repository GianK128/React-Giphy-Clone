import React, { useState, useEffect } from "react"
import getTrendingTerms from "services/trendingTermsService"
import Category from "components/Category"

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

export default TrendingSearches