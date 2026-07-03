import { useEffect, useState } from "react";
import './all_css_codes/Pagination.css'
export default function Pagination() {
    const [completed, setCompleted] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const allowedProblems = 5;

    useEffect(() => {
        const completed = JSON.parse(localStorage.getItem('checkedProblems')) || [];
        if (completed) {
            setCompleted(completed)
        }
    }, [])

    const lastItemIndex = currentPage * allowedProblems;
    const firstItemIndex = lastItemIndex - allowedProblems;
    const thispageItems = completed.slice(firstItemIndex, lastItemIndex)
    const pages = []

    for (let i = 1; i <= Math.ceil(completed.length / allowedProblems); i++) {
        pages.push(i);
    }
    return (
        <>
            {
                thispageItems.length > 0 ? (
                    <div className="pagination">
                        <div className="pagination-list">
                            {
                                thispageItems.map((item, idx) => {
                                    return (
                                        <div className="activity" key={idx}>
                                            <p>{item}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="pagination-controls">
                            {
                                pages.map((page, idx) => {
                                    return (
                                        <button key={idx} onClick={() => setCurrentPage(page)}>{page}</button>
                                    )
                                })
                            }
                        </div>
                    </div>
                ) : (
                    <p className="no-tasks">No problems solved yet!</p>
                )
            }
        </>
    )
}
