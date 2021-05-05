import React from 'react';
import Layout from "./layout/Layout"
const Home = () => {
    return (
        <Layout>
            <section className="hero auto-height">
                <h1 className="hero-title">Free Spoken English for Poor</h1>
                <p className="big-p1 hero-p s-1">You're in free space</p>
            </section>
            <section className="trainer auto-height">
                <div className="trainer-sub-wrapper">
                    <h1 className="hero-title">Trainer</h1>
                    <p className="big-p1 hero-p colorized">Mrs. Persis Anand</p>
                    <p className="big-p2 hero-p">21 years of Experience into teaching</p>
                </div>
            </section>
            <section className="courses auto-height">
                <h1 className="hero-title ml-2 courses-title">Courses</h1>
                <ul className="courses-list">
                    <li>
                        Communication and Personal Development
                        </li>
                    <li>
                        IELTS - International English Language Testing System
                        </li>
                </ul>
            </section>
        </Layout>
    )
}

export default Home
