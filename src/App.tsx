import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Movie from '../src/pages'

function App() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const getMovies = async () => {
    try {
        const records = await axios.get(
          'https://swapi.dev/api/films/?format=json'
        )
        setLoading(false)
        let rec = records.data.results
        let poster = ''
        for(let i = 0;i < rec.length;i++) {
          poster = await axios.get(
            'http://www.omdbapi.com/?apikey=b9a5e69d&t='+rec[i].title
          )
          // Setting the poster object
          rec[i].poster = poster
          let stars = [],
            sources = rec[i].poster.data.Ratings,
            ratingSources = [],
            ratePercent = [],
            rateCalc, imdVal, rotenVal, metaVal

          for(let i = 0;i < sources.length;i++) {
            imdVal = sources[0] ? Number((sources[0].Value.split('/')[0])) * 10 : 0
            rotenVal = sources[1] ? parseInt((sources[1].Value).replace('%','')) : 0
            metaVal = sources[2] ? parseInt((sources[2].Value.split('/')[0])) : 0
            ratePercent.push(imdVal)
            ratePercent.push(rotenVal)
            ratePercent.push(metaVal)
            if(imdVal && rotenVal && metaVal) {
              rateCalc = Math.round((imdVal + rotenVal + metaVal) / 30)
            } else {
              rateCalc = Math.round(parseInt(sources[0].Value))
            }
            ratingSources.push(<span className="rating-sources">{sources[i].Source}: {ratePercent[i]}%</span>)
            ratingSources.push('      ')
          }
          // Setting rating sources
          rec[i].ratingsSources = ratingSources

          if(rateCalc) {
            for(let i = 0;i < 10;i++) {
              if (rateCalc - 1 < i) {
                stars.push(<span>☆</span>)
              } else {
                stars.push(<span className="movie-rating-list">★</span>)
              }
            }
          } else {
            stars = []
          }
          // Setting calculate rating for sorting
          rec[i].rateCalc = rateCalc
          // Setting stars for rating
          rec[i].starRatings = stars
        }
        setMovies(rec)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div className="App">
        <Movie movies={movies} loading={loading} />
    </div>
  )
}

export default App
