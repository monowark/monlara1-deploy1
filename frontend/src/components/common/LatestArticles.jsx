import React, { useEffect, useState } from 'react'
import BlogImg from '../../assets/images/construction3.jpg';
import { apiUrl, fileUrl } from './http';
import { Link } from 'react-router-dom';

const LatestArticles = () => {
    const [articles, setArticles] = useState([]);
    const fetchLatestArticle = async () => {
        const res = await fetch(apiUrl+'get-latest-articles?limit=3',{
        method : 'GET'
        });
        const result = await res.json();
        console.log(result);
        if (result.status == true) {
        setArticles(result.data)
        }
    }
    //to run the fetchLatestArticle method I must use useEffect function/ method
    useEffect(() => {
        fetchLatestArticle()
    },[]);

  return (
          <section className='section-6 bg-light py-5'>
          <div className='container'>
            <div className='section-header text-center'>
                <span>Blog & News</span>
                <h2>Artical and Blog Post</h2>
                <p>We offer a diverse array of construction services, spanning residential, 
                  commercial, and industrial projects.
                </p>
            </div>
            <div className='row pt-3 justify-content-md-center'>
              {
                articles && articles.map(article =>{
                  return (
                    <div key={`article-${article.id}`} className='col-md-4'>
                      <div className='card shadow border-0'>
                        <div className='card-img-top'>
                          <img src={`${fileUrl}uploads/articles/small/${article.image}`} alt='' className='w-100'></img>
                        </div>
                        <div className='card-body p-4'>
                          <div className='mb-3'>
                            <Link to={`/blog/${article.id}`} className='title'>{article.title} </Link>
                          </div>
                            <Link to={`/blog/${article.id}`} className='btn btn-primary small'>Read More</Link>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
      </section>
  )
}
export default LatestArticles