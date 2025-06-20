import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

async function getPosts(id) {

    const response = await fetch(`http://localhost:3000/json/post-${id}.json`)

    return await response.json()
}

const PostsDetails = () => {

    const [post, setPost] = useState({})

    const { id } = useParams()

    useEffect(() => {

        async function fetchData() {
            const post = await getPosts(id)
            setPost(post.data)
        }

        fetchData()
    }, [])

    return (
        <section>

            <Link to='/'>Voltar para os posts</Link>

            <div>

                <Link to={`/post/${post.id}`}>

                    <img src={post.image} alt={post.title} />

                    <h2>{post.title}</h2>

                    <p>{post.text}</p>

                </Link>

            </div>

        </section>
    )
}

export { PostsDetails }