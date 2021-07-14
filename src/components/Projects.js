import React, { useState, useEffect } from 'react'
import ProjectNav from './ProjectNav'
import { projects } from './data'
import { GoFileCode } from 'react-icons/go'
import { CgScreen } from 'react-icons/cg'

const Projects = () => {
    // remove duplicates
    const newCategories = [...new Set(projects.map((item) => item.category))]

    const [projectsList, setProjectsList] = useState(projects);
    const [categories, setCategories] = useState(newCategories);
    const [value, setValue] = useState(0);


    const filterCategories = (category) => {
        const newCategory = projects.filter((item) => item.category === category);
        setProjectsList(newCategory);
    }

    // on load, only display highlighted tab's projects
    useEffect(() => {
        const javascript = projects.filter((item) => item.category === 'javascript')
        setProjectsList(javascript)
    }, [])

    return (
        <section id='projects'>
            <div className="container">
                <h2>Projects</h2>
                <ProjectNav value={value} setValue={setValue} categories={categories} filterCategories={filterCategories} />
                <div className="projects-grid">
                    {projectsList.map((item) => {
                        const { id, image, description, category, url, code } = item;
                        return <div key={id} className="card" style={{ backgroundImage: `url(${image})` }}>
                            <div className="card-overlay">
                                <div className="card-icon">
                                    <a href={url} target='_blank'><CgScreen className='icon' /></a>
                                    <a href={code} target='_blank'><GoFileCode className='icon' /></a>
                                </div>
                                <div className="card-text">
                                    <h2>
                                        <a className='card-a' href={url} target='_blank'>
                                            {description}
                                        </a>
                                        <div className="card-p">{description}</div>
                                    </h2>
                                    <p>{category}</p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Projects