import React, { useContext, useEffect } from 'react'
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import { useNavigate } from 'react-router';
import { Button } from '@material-tailwind/react';

function AllBlogs() {
    const context = useContext(myContext);
    const { mode, getAllBlog } = context;

    // console.log(getAllBlog) 

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)
 }, [])

    return (
        <Layout>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto max-w-7xl ">
                    {/* Top Heading  */}
                    <div className="mb-5">
                        <h1 className=' text-center text-2xl font-bold font-rohit underline decoration-red-500'
                            style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                            All Blogs
                        </h1>
                    </div>
                    {/* Main Content  */}
                    <div className="flex flex-wrap justify-center -m-4 mb-5">
                        {/* Card 1  */}
                        {getAllBlog.length > 0
                            ?
                            <>
                                {getAllBlog.map((item, index) => {
                                    console.log(item);
                                    const {thumbnail, date, id} = item;
                                    return (
                                        <div key={index} className="p-4 md:w-1/3" >
                                            <div
                                                style={{
                                                    background: mode === 'dark'
                                                        ? 'rgb(30, 41, 59)'
                                                        : 'white',
                                                   
                                                }}
                                                className={`h-full drop-shadow  transition-all duration-300 cursor-pointer
               
                                                rounded-xl overflow-hidden`}
                                            >
                                                {/* Blog Thumbnail  */}
                                                <img 
                                                onClick={()=> navigate(`/bloginfo/${id}`)}
                                                className=" w-full" src={thumbnail} alt="blog" />

                                                {/* Top Items  */}
                                                <div className="p-6">
                                                    {/* Blog Date  */}
                                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{
                                                        color: mode === 'dark'
                                                            ? 'rgb(226, 232, 240)'
                                                            : ' rgb(30, 41, 59)'
                                                    }}>
                                                        {date}
                                                    </h2>

                                                    {/* Blog Title  */}
                                                    <h1 className="title-font text-lg font-bold font-avi text-gray-900 mb-3" style={{
                                                        color: mode === 'dark'
                                                            ? 'rgb(226, 232, 240)'
                                                            : ' rgb(30, 41, 59)'
                                                    }}>
                                                        {item.blogs.title}
                                                    </h1>

                                                    {/* Blog Description  */}
                                                    <p className="leading-relaxed mb-3" style={{
                                                        color: mode === 'dark'
                                                            ? 'rgb(226, 232, 240)'
                                                            : ' rgb(30, 41, 59)'
                                                    }}>
                                                         <Button onClick={()=> navigate(`/bloginfo/${id}`)} className='bg-red-500 font-avi border-2 border-black rounded-3xl text-white'>Read MOre</Button>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </>
                            :
                            <>
                                <h1 className='font-avi font-bold'>Nothing Uploaded Yet,Stay Tuned !</h1>
                            </>
                        }


                    </div>
                </div>
            </section >
        </Layout >
    )
}

export default AllBlogs