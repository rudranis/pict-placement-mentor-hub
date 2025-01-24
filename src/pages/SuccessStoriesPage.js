import React from "react";

const SuccessStoriesPage = () => {
  const stories = [
    {
      id: 1,
      title: "Landing a Job at Google",
      author: "Aditi Sharma",
      content:
        "I joined PICT Mentor Hub to improve my interview skills. With consistent practice and guidance from experienced mentors, I aced my Google interviews and am now a Software Engineer at Google. The personalized mentorship and resources were key to my success!",
      image: "https://via.placeholder.com/400x200",
    },
    {
      id: 2,
      title: "Switching Careers to Data Science",
      author: "Rahul Deshpande",
      content:
        "Coming from a non-tech background, I always thought Data Science was out of my reach. But the mentors at PICT Mentor Hub helped me bridge the gap and guided me through a structured learning path. I now work as a Data Scientist at a leading startup!",
      image: "https://via.placeholder.com/400x200",
    },
    {
      id: 3,
      title: "Starting My Own Tech Company",
      author: "Megha Kulkarni",
      content:
        "The entrepreneurial guidance I received from mentors here was invaluable. With their help, I was able to turn my app idea into a successful startup. PICT Mentor Hub truly empowers aspiring entrepreneurs!",
      image: "https://via.placeholder.com/400x200",
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-500 mb-8">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="text-xl font-bold text-yellow-400 mb-2">
                {story.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">By {story.author}</p>
              <p className="text-sm text-gray-300">{story.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesPage;
