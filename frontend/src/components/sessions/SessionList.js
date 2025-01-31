import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

const SessionList = ({ sessions }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'scheduled':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (!sessions.length) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No sessions found</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {sessions.map((session) => (
          <li key={session.id}>
            <div className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <p className="truncate text-sm font-medium text-indigo-600">
                    {session.mentor?.user?.name || 'Unknown Mentor'}
                  </p>
                  <span
                    className={`ml-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(
                      session.status
                    )}`}
                  >
                    {session.status}
                  </span>
                </div>
                <div className="ml-2 flex flex-shrink-0">
                  <p className="text-sm text-gray-500">
                    {format(new Date(session.date), 'PPp')}
                  </p>
                </div>
              </div>
              <div className="mt-2 sm:flex sm:justify-between">
                <div className="sm:flex">
                  <p className="flex items-center text-sm text-gray-500">
                    Duration: {session.duration} minutes
                  </p>
                </div>
                {session.meetingLink && (
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <a
                      href={session.meetingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Join Meeting
                    </a>
                  </div>
                )}
              </div>
              {session.notes && (
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{session.notes}</p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

SessionList.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
      meetingLink: PropTypes.string,
      notes: PropTypes.string,
      mentor: PropTypes.shape({
        user: PropTypes.shape({
          name: PropTypes.string,
        }),
      }),
    })
  ).isRequired,
};

export default SessionList;
