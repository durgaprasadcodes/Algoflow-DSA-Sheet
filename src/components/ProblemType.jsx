import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../data/data'
import Navbar from '../components/Navbar'
import leetcode from '../assets/leetcode.png'
import gfg from '../assets/GeeksForGeeks.png'
import './all_css_codes/ProblemType.css'

export default function ProblemType() {
    const { slug } = useParams()
    const problems = data[slug] || null;

    // Store checked problem IDs
    const [checkedItems, setCheckedItems] = useState({})
    const [checkedProblems, setCheckedProblems] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [completed, setCompleted] = useState(0);
    const normalizedSearch = searchTerm.toLowerCase();

    useEffect(() => {
        const savedData = localStorage.getItem(`checkedProblemsIDS-${slug}`)

        if (savedData) {
            setCheckedItems(JSON.parse(savedData))
        }
    }, [slug])

    useEffect(() => {
        const completed = JSON.parse(localStorage.getItem('completed')) || 0;
        if (completed) {
            setCompleted(completed)
        }
        const checkedProblems = JSON.parse(localStorage.getItem('checkedProblems')) || [];
        if (checkedProblems) {
            setCheckedProblems(checkedProblems)
        }
    }, [])

    const handleCheckboxChange = (id, name) => {
        const isCurrentlyChecked = checkedItems[id];
        const updatedCheckedItems = {
            ...checkedItems,
            [id]: !isCurrentlyChecked,
        }

        const nextCompleted = isCurrentlyChecked ? completed - 1 : completed + 1;
        setCompleted(nextCompleted);

        const nextCheckedProblems = isCurrentlyChecked
            ? checkedProblems.filter((problem) => problem !== name)
            : [...checkedProblems, name];
        setCheckedProblems(nextCheckedProblems);

        setCheckedItems(updatedCheckedItems)

        // Save to localStorage
        localStorage.setItem('checkedProblems', JSON.stringify(nextCheckedProblems))
        localStorage.setItem('completed', JSON.stringify(nextCompleted))
        localStorage.setItem(`checkedProblemsIDS-${slug}`, JSON.stringify(updatedCheckedItems))
    }

    console.log(completed, checkedProblems)
    return (
        <div className="problem_list">
            <Navbar />
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search problems..."
                className="search-bar"
            />
            {
                problems ? (
                    problems.filter((problem) => problem.searchable.includes(normalizedSearch)).map((problem) => (
                        <div className="problem" key={problem.id}>


                            <input
                                type="checkbox"
                                id={`problem-${problem.id}`}
                                checked={checkedItems[problem.id] || false}
                                onChange={() => handleCheckboxChange(problem.id, problem.problem_name)}
                            />

                            <h1>{problem.problem_name}</h1>
                            <p>{problem.topic}</p>
                            <p>{problem.difficulty}</p>

                            <a
                                href={problem.leetcode}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={leetcode}
                                    alt={problem.problem_name}
                                />
                            </a>

                            <a
                                href={problem.gfg}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={gfg}
                                    alt={problem.problem_name}
                                />
                            </a>

                        </div>
                    ))
                ) : (
                    <p>Problems not found</p>
                )
            }
        </div>
    )
}