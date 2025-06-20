import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Posts } from './posts'
// import { Post } from "./post"
import { PostsDetails } from "../components/post"


const AppRoutes = () => (

    <BrowserRouter>

        <Routes>

            <Route exact path='/' element={<Posts />} />
            <Route exact path='/post/:id' element={<PostsDetails />} />

        </Routes>

    </BrowserRouter>
)

export { AppRoutes }