
import React from 'react'
import css from './ArticlePage.module.css';
import {useSelector} from 'react-redux'
import {  useLocation,useNavigate } from 'react-router-dom';
import Back from '../../assests/images/back.png'



const ArticlePage = () => {
 const {articles} = useSelector(state=>state.articles)
  const navigate = useNavigate();
  const location = useLocation()
  const id = location.pathname.split('/')[1]

  const art = articles.filter(el => el.id=== +id)
    

  
  return (
   <div style={{backgroundColor:" #f4efef", height:'100vh'}}>
          <header className={css.header}>
          </header>
      <div className={css.text}>
        <h2 className={css.title}>{art[0]?.title }</h2>
        <p className={css.text_second}>{art[0]?.summary}</p>
        <p className={css.text_second}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quaerat? Soluta beatae ad maiores voluptates minus, nobis fuga pariatur a dolorem aliquam illo incidunt adipisci sapiente, consectetur excepturi asperiores. Aliquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, rem explicabo placeat alias enim laboriosam blanditiis, dolor soluta distinctio dolore veritatis adipisci perspiciatis dicta! In tempora magnam atque eveniet alias?</p>
        <p className={css.text_second}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia magnam perspiciatis similique, blanditiis dignissimos quae rerum neque? Nemo, sapiente ducimus, et officia facilis quasi quod accusamus excepturi temporibus, minus eligendi.</p>
        <div className={css.div}>
          <img width='12px' height='10px' src={Back} alt="ccd" />
          <button className={css.button} onClick={()=>navigate( '/')}>Back to homepage</button>
      </div>
      </div>
    </div>
  )
}

export default ArticlePage
