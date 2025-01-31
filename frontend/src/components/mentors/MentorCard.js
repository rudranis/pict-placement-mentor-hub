import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MentorCard = ({ mentor }) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center">
            <span className="text-xl font-medium text-indigo-700">
              {mentor.user.name.charAt(0)}
            </span>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">{mentor.user.name}</h3>
            <p className="text-sm text-gray-500">{mentor.position} at {mentor.company}</p>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-2 text-sm text-gray-500">{mentor.user.department}</span>
          </div>

          <div className="mt-2 flex items-center">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-2 text-sm text-gray-500">
              {mentor.experience} years experience
            </span>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-900">Expertise</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {mentor.expertise.split(',').map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
              >
                {skill.trim()}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <Link
            to={`/book-session/${mentor.id}`}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Book Session
          </Link>
          {mentor.linkedinProfile && (
            <a
              href={mentor.linkedinProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              LinkedIn Profile
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

MentorCard.propTypes = {
  mentor: PropTypes.shape({
    id: PropTypes.number.isRequired,
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    experience: PropTypes.number.isRequired,
    expertise: PropTypes.string.isRequired,
    linkedinProfile: PropTypes.string,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      department: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MentorCard;
