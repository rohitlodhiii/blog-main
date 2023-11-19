import { Button } from '@material-tailwind/react'
import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';

function Comment({ addComment, commentText, setcommentText, allComment, fullName, setFullName }) {
  const context = useContext(myContext);
  const { mode } = context;
  const isEnabled = fullName.length >0 && commentText.length > 0 ;
   
  return (
    <section className=" py-8 lg:py-16">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg lg:text-2xl font-bold font-avi underline decoration-red-500" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
            Comments
          </h2>
        </div>
        {/* Comment Form  */}
        <form className="mb-6">
          {/* Full Name Input  */}
          <div
            className="py-2 px-4 mb-4 
            border-2 border-black "
            style={{
              background: mode === 'dark'
                ? '#353b48'
                : 'white',
                border: mode === 'dark'
                ? '2px solid white'
                : '2px solid black',
            }}>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type='text'
              placeholder='Your Name'
              className="checker font-avi px-0 w-full text-sm  focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 "
             
              style={{
                background: mode === 'dark'
                  ? '#353b48'
                  : 'transparent',
                   color: mode === 'dark'
                      ? 'white'
                      : 'black',
                    
                          
                 
              }}
            required="required"/>
          </div>

          {/* Text Area  */}
          <div
            className="py-2 px-4 mb-4  font-avi "
            style={{
              background: mode === 'dark'
                ? '#353b48'
                : 'white',
                 color: mode === 'dark'
                      ? 'white'
                      : 'black',
                      border: mode === 'dark'
                      ? '2px solid white'
                      : '2px solid black',
            }}
          >
            <label htmlFor="comment" className="sr-only">Your comment</label>
            <textarea
              value={commentText}
              onChange={(e) => setcommentText(e.target.value)}
              id="comment" rows={6}
             
              className=" checker px-0 w-full text-sm border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 " style={{ background: mode === 'dark' ? '#353b48' : 'transparent' }} placeholder="Comment Here" required defaultValue={""} />
          </div>
          {/* Button  */}
          <div className="">
            <Button
           disabled={!isEnabled}
           className='disabled:bg-red-400 enabled:bg-green-500'
              onClick={addComment}
              style={{
                
                color: mode === 'dark'
                  ? 'rgb(30, 41, 59)'
                  : 'rgb(226, 232, 240)'
              }}
            >
              Post comment
            </Button>
          </div>
        </form>
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg lg:text-2xl font-bold font-avi underline decoration-red-500" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
            All Comments
          </h2>
        </div>
        {/* Bottom Item  */}
        <article className="p-6 mb-6 text-base rounded-lg font-avi" style={{ background: mode === 'dark' ? '#353b48' : 'rgb(226, 232, 240)' }}>
          {allComment.map((item, index) => {
            console.log(item)
            const {fullName, commentText, date} = item;
            return (
              <>
              <div className='bg-gray-500 mb-2 py-4 px-6 rounded-md'>
                <footer className="flex justify-between items-center ">
                  <div className="flex justify-between w-full my-2 px-2  rounded-lg ">
                    <p className="inline-flex items-center mr-3 text-lg font-avi underline" style={{ color: mode === 'dark' ? 'black' : 'black' }}
                    >
                      {fullName}
                    </p>
                    <p className="text-xs my-auto" style={{ color: mode === 'dark' ? 'black' : 'black' }}
                    >
                      {date}
                    </p>
                  </div>
                </footer>
                <p className="text-gray-500 dark:text-gray-400 text-md font-rohit px-2" style={{ color: mode === 'dark' ? 'white' : 'black' }}>{commentText}</p>
                </div>
              </>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default Comment