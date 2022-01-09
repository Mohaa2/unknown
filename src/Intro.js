import {useState, useEffect} from 'react'
import {AiFillHeart} from 'react-icons/ai'

const Intro = () => {
  const [name, setName] = useState('')
  useEffect(() => {
    localStorage.setItem("name", name)
  }, [name])

  const [page,setPage] = useState(1)
  const [disPage,setDisPage] = useState('grid')

  useEffect(() => {
    if(page === 0 ){
      setPage(1)
      console.log('asdf')
    }
    if(page > 5){
      setDisPage('none')
      localStorage.setItem('disPage','none')
    }
  }, [page])

  useEffect(() => {
    setDisPage(localStorage.getItem('disPage'))
  }, [])

  return (
    <div className='overlay' style={{display: disPage}}>
      {page === 1 && <>
          <div className='MSG1'>
            <h1>لازم تكتب اسمك هنا عشان اعرف انت صاحبي ولا مش صاحبي </h1>
            <input type="text" value={name} placeholder='اكتب اسمك الحقيقي يا خول' onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div>
            <button onClick={()=> name ? setPage(page + 1) : null}>&gt;</button>
          </div>
        </>
      }
      {page === 2 && <>
          <div className='MSG2'>
            <h1>اهلا بصاحبي النجس الرساله دي مش هتظهرلك غير اول مره بس  <span style={{color:'red'}}>افتكر اني قولتلك بلاش وانت مصر تكمل</span>  </h1>
          </div>
          <div>
            <button onClick={()=> setPage(page - 1)}>&lt;</button>
            <button onClick={()=> setPage(page + 1)}>&gt;</button>
          </div>
        </>
      }
      {page === 3 && <>
          <div className='MSG3'>
            <h1>عاش يا صاحبي انت نجحت ف الاختبار ودلوقت جه وقت الههههههه</h1>
            <div>
              <button onClick={()=> setPage(page - 1)}>&lt;</button>
              <button onClick={()=> setPage(page + 1)}>&gt;</button>
            </div>
          </div>
        </>
      }
      {page === 4 && <>
          <div className='MSG4'>
            <h1>لو عايز الموقع يشغل صور رجاله دوس علي القلب</h1>
            <div>
              <AiFillHeart size='50px' color='red' onClick={()=> setPage(page + 1)}>&gt;</AiFillHeart>
            </div>
          </div>
        </>
      }
      {page === 5 && <>
        <h1>خخخخخخخخخ يابني انت خول ولا اي نظامك بتدوس ليه
        <h5>لو عايز نسوان دوس قلب</h5>
        </h1>
        <AiFillHeart size='50px' color='red' onClick={()=> setPage(page + 1)}>&gt;</AiFillHeart>

      </>
      }
    </div>
  )
}

export default Intro
