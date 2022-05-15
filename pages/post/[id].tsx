import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useMyContext } from '../../context'
import { PostType } from '../../models'

const PostDetails = () => {
  const [data, setData] = useState({} as PostType)
  const { selectedPost } = useMyContext()

  const router = useRouter()

  const { id } = router.query;

  // to do: make context to prevent unnecessary api hit
  useEffect(() => {
    if (!selectedPost) {
      id && fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(json => {
        console.log("Fetched");
        setData(json)
      })
    }
  }, [id, selectedPost])

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <h1>Hi, </h1>
      </div>
      <div>
        <p>userId: {selectedPost ? selectedPost.userId : data.userId}</p>
        <p>id: {selectedPost ? selectedPost.id: data.id}</p>
        <p>title: {selectedPost ? selectedPost.title: data.title}</p>
        <p>body: {selectedPost ? selectedPost.body: data.body}</p>
      </div>
    </div>
  )
}

export default PostDetails
