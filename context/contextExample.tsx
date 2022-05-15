import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { MovieType, PostType, RandomUser } from '../models'

export const MyContext = createContext({} as ContentExampleProps)

export const useMyContext = () => useContext(MyContext)

interface ContentExampleProps {
  data: any,
  user: RandomUser,
  movies: MovieType,
  handleSelectedPost: any,
  selectedPost: PostType | undefined
} 

export interface ContextProviderProps {
  children: ReactNode
}

export const ContextExampleProvider: React.FC<ContextProviderProps> = ({children}) => {
  const [data, setData] = useState([])
  const [selectedPost, setSelectedPost] = useState<PostType>()
  const [user, setUser] = useState({} as RandomUser)
  const [movies, setMovies] = useState({} as MovieType)

  const handleSelectedPost = (post: any) => setSelectedPost(post)

  useEffect(() => {
    fetch(`https://randomuser.me/api`)
    .then(response => response.json())
    .then(json => {
      setUser(json)
    })
  }, [])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
      setData(json)
    })
  }, [])

  const getMovieDetail = async () => {
    const url = `http://www.omdbapi.com/?i=tt1877830&apikey=64fee452`
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson) {
      setMovies(responseJson);
    } 
  }
  useEffect(() => {
    getMovieDetail()
  }, [])

  const value= {
    user,
    movies,
    data,
    handleSelectedPost,
    selectedPost
  }

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  )
}
