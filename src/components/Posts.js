import React from 'react';
import Layout from "./layout/Layout"
import Image1 from '../assets/subjects_words.png'
import Image2 from '../assets/pronounciation_sample_pic.jpg'
const Posts = () => {
  return (
    <Layout>
      <main className="flex-column-center auto-height posts">
        <h2>Posts</h2>
        <article className="card">
          <img loading="lazy" decoding="async" src={Image1} alt="" />
          <h4>Sub Heading</h4>
          <p style={{paddingBottom: ".5rem"}}>lorem ipsum dolor sit amet, consectetur...</p>
        </article>
        <article className="card">
          <img loading="lazy" decoding="async" src={Image2} alt="" />
          <h4>Sub Heading</h4>
          <p style={{paddingBottom: ".5rem"}}>lorem ipsum dolor sit amet, consectetur...</p>
        </article>
      </main>
    </Layout>
  )
}

export default Posts
