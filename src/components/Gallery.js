import React from 'react';
import Layout from "./layout/Layout"
import Image1 from '../assets/sample-1.jpeg'
import Image2 from '../assets/sample-2.jpeg'
import Image3 from '../assets/sample-3.jpeg'

const Gallery = () => {
  const disableDrag = (e) => {
    e.preventDefault()
    return false
  }
  return (
    <Layout>
      <main className="posts">
        <h1 className="post-title">Gallery</h1>
        <div className="grid">
          <article className="card">
            <img onDragStart={disableDrag} loading="lazy" decoding="async" src={Image1} alt="" />
          </article>
          <article className="card">
            <img onDragStart={disableDrag} loading="lazy" decoding="async" src={Image2} alt="" />
          </article>
          <article className="card">
            <img onDragStart={disableDrag} loading="lazy" decoding="async" src={Image3} alt="" />
          </article>
        </div>
      </main>
    </Layout>
  )
}

export default Gallery
