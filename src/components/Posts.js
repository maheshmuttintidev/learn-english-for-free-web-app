import React from 'react';
import Layout from "./layout/Layout"
import Image1 from '../assets/subjects_words.png'
import Image2 from '../assets/pronounciation_sample_pic.jpg'
const Posts = () => {
  return (
    <Layout>
      <main className="posts">
        <h1 className="post-title">Gallery</h1>
        <div className="grid">
          <article className="card">
            <img loading="lazy" decoding="async" src={Image1} alt="" />
          </article>
          <article className="card">
            <img loading="lazy" decoding="async" src={Image2} alt="" />
          </article>
        </div>
      </main>
    </Layout>
  )
}

export default Posts
