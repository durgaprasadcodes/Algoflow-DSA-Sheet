import React from "react";
import errorGif from "../assets/error.gif";
import "./all_css_codes/Notfound.css";

export default function Notfound() {
    return (
        <section className="nf-container">
            <div className="nf-card">
                <img
                    src={errorGif}
                    alt="Page not found"
                    className="nf-image"
                />

                <h1 className="nf-title">404</h1>

                <p className="nf-text">
                    Oops! The page you are looking for does not exist.
                </p>

                <button
                    className="nf-button"
                    onClick={() => window.history.back()}
                >
                    ← Go Back
                </button>
            </div>
        </section>
    );
}