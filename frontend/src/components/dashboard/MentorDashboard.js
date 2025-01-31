import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SessionList from '../sessions/SessionList';
import ResourceList from '../resources/ResourceList';

const MentorDashboard = () => {
  const [sessions, setSessions] = useState([]);
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: { 'x-auth-token': token }
        };

        const [sessionsRes, resourcesRes] = await Promise.all([
          axios.get('http://localhost:5000/api/sessions', config),
          axios.get('http://localhost:5000/api/resources', config)
        ]);

        setSessions(sessionsRes.data);
        setResources(resourcesRes.data);
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
            Mentor Dashboard
          </h2>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
            Upcoming Sessions
          </h3>
          <SessionList sessions={sessions} />
        </div>

        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
            Your Resources
          </h3>
          <ResourceList resources={resources} />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
          Analytics
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
                Resources Shared
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {resources.length}
              </dd>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Completion Rate
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {sessions.length > 0
                  ? Math.round(
                      (sessions.filter((s) => s.status === 'completed').length /
                        sessions.length) *
                        100
                    )
                  : 0}
                %
              </dd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDashboard;
