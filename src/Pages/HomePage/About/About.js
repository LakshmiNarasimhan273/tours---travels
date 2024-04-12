import React from "react";

function About() {
  const aboutData = [
    {
      id: 1,
      title: "Discover Your Next Adventure",
      content:
        "Embark on a journey of a lifetime with our diverse range of thrilling destinations and immersive experiences.",
    },
    {
      id: 2,
      title: "Tailored Itineraries, Unmatched Flexibility",
      content:
        "Experience the freedom to customize your adventure with our flexible itineraries. Whether you crave adrenaline-pumping activities or serene escapes, we cater to your unique interests and preferences.",
    },
    {
      id: 3,
      title: "Expert Guides, Seamless Exploration",
      content:
        "Travel with confidence alongside our knowledgeable guides who share their passion for adventure and deep understanding of each destination.",
    },
    {
      id: 4,
      title: "Memories That Last a Lifetime",
      content:
        "Create unforgettable memories as you immerse yourself in the culture, history, and natural wonders of each destination.",
    },
  ];
  return (
    <div id="about">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1">
              Adventure Tours & Travels
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Master Cleanse Reliac Heirloom
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Embark on unforgettable journeys with Adventure Tours & Travels,
              where every destination is a new chapter waiting to be explored.
              From thrilling expeditions to serene getaways, our curated tours
              promise an experience beyond the ordinary. Discover the world's
              wonders with expert guides and personalized itineraries tailored
              to your sense of adventure.
            </p>
          </div>
          <div className="flex flex-wrap">
            {aboutData.map((data) => (
              <div
                key={data.id}
                className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l border-gray-300 border-opacity-60"
              >
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  {data.title}
                </h2>
                <p className="leading-relaxed text-base mb-4">{data.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
