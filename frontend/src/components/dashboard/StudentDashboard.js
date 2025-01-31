import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MentorList from '../mentors/MentorList';
import SessionList from '../sessions/SessionList';

const StudentDashboard = () => {
  const [mentors, setMentors] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: { 'x-auth-token': token }
        };

        const [mentorsRes, sessionsRes] = await Promise.all([
          axios.get('http://localhost:5000/api/mentors', config),
          axios.get('http://localhost:5000/api/sessions', config)
        ]);

        setMentors(mentorsRes.data);
        setSessions(sessionsRes.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.msg || 'Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-400 p-4">
        <p className="text-red-700">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Student Dashboard
          </h2>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
          Your Upcoming Sessions
        </h3>
        <SessionList sessions={sessions} />
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
          Available Mentors
        </h3>
        <MentorList mentors={mentors} />
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
          Your Progress
        </h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Total Sessions
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {sessions.length}
              </dd>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Completed Sessions
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {sessions.filter(s => s.status === 'completed').length}
              </dd>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Different Mentors
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {new Set(sessions.map(s => s.mentorId)).size}
              </dd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
