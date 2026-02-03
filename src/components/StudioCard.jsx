import React from 'react';
import { Link } from 'react-router-dom';

export default function StudioCard({ title, description, link }) {
    return (
        <Link to={link} className="studio-card group">
            <div className="card-content">
                <div className="card-header">
                    <h3 className="card-title">
                        {title}
                    </h3>
                </div>

                <p className="card-desc">
                    {description}
                </p>

                <div className="card-action">
                    <span className="enter-badge">
                        [ENTER]
                    </span>
                </div>
            </div>

            <div className="corner-accent"></div>
        </Link>
    );
}
