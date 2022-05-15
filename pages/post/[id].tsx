import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { PostType } from '../../models'

const PostDetails = () => {
  const [data, setData] = useState({} as PostType)
  const router = useRouter()

  const { id } = router.query;

  // to do: make context to prevent unnecessary api hit
  useEffect(() => {
    id && fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(json => {
      console.log("Fetched");
      setData(json)
    })
  }, [id])

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <h1>Hi, </h1>
      </div>
      <div>
        <p>userId: {data.userId}</p>
        <p>id: {data.id}</p>
        <p>title: {data.title}</p>
        <p>bodyL {data.body}</p>
      </div>
    </div>
  )
}

export default PostDetails
