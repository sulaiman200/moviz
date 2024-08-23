// import React, { useState } from 'react'
// import { useEffect } from 'react'
// import './App.css'
// import SearchIcon from './search.svg'
// import Card from './MovieCard'
// export const App = () => {
// 	//const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";
// 	const [movies, setMovies] = useState([])
// 	const [searchTerm, setsearchTerm] = useState('')

// 	const API_URL = 'http://www.omdbapi.com?apikey=b6003d8a'
// 	const searchMovies = async (title) => {
// 		const response = await fetch(`${API_URL}&s=${title}`)
// 		const data = await response.json()
// 		setMovies(data.Search)
// 	}

// 	useEffect(() => {
// 		searchMovies('batman')
// 	}, [])
// 	return (
// 		<div className="App">
// 			<h1>MOVIE LAND</h1>
// 			<div className="search">
// 				<input
// 					placeholder="search movie"
// 					value={searchTerm}
// 					onChange={() => setsearchTerm(e.terget.value)}
// 				/>
// 				<img
//                 src={SearchIcon}
//                 alt="search"
//                 onClick={() => searchMovies(searchTerm)} />
// 			</div>
// 			{movies?.length > 0 ? (
// 				<div className="container">
// 					{movies.map((movie) => {
// 						;<Card movie={movie} />
// 					})}
// 				</div>
// 			) : (
// 				<div className="empty">
// 					<h2>NO MOVIES FOUND</h2>
// 				</div>
// 			)}
// 		</div>
// 	)
// }

import React, { useState, useEffect } from 'react'
import './App.css'
import SearchIcon from './search.svg'
import { MovieCard } from './MovieCard'

export const App = () => {
	const [movies, setMovies] = useState([])
	const [searchTerm, setSearchTerm] = useState('')

	const API_URL = 'http://www.omdbapi.com?apikey=b6003d8a'

	const searchMovies = async (title) => {
		try {
			const response = await fetch(`${API_URL}&s=${title}`)
			const data = await response.json()
			if (data.Search) {
				setMovies(data.Search)
			} else {
				setMovies([])
			}
		} catch (error) {
			console.error('Error fetching movies:', error)
			setMovies([])
		}
	}

	useEffect(() => {
		searchMovies('')
	}, [])

	return (
		<div className="App">
			<h1>👀MOVIZ✨</h1>
			<div className="search">
				<input
					placeholder="Search movie"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
			</div>
			{movies?.length > 0 ? (
				<div className="container">
					{movies.map((movie) => (
						<MovieCard key={movie.imdbID} movie={movie} />
					))}
				</div>
			) : (
				<div className="empty">
					<h2>NO MOVIES FOUND</h2>
				</div>
			)}
		</div>
	)
}
