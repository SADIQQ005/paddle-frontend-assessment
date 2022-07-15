import React from "react";

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

function github({ data }) {
  const { items } = data;

  return (
    <div className="bg-[#160133] text-white overflow-hidden xl:mx-24 px-12 py-6 text-gray-500">
      <h2 className="text-center py-8 text-2xl font-semibold">
        Trending Repos
      </h2>
      {items &&
        items.map((item) => {
          const { name, full_name, open_issues, stargazers_count, owner } =
            item;

          return (
            <div
              key={owner.id}
              className="flex space-x-8 my-3 bg-white shadow-md rounded-xl p-6 "
            >
              <div>
                <img
                  className="rounded-xl w-28"
                  src={owner.avatar_url}
                  alt="Picture of the author"
                />
              </div>
              <div>
                <h2 className="text-xl capitalize font-semibold">{name}</h2>
                <p>{full_name}</p>
                <div className="md:flex space-y-3 md:space-y-0 space-x-6 mt-3">
                  <p className="py-1 px-2 bg-[#271ac1] shadow-md rounded-md">
                    {stargazers_count}
                  </p>
                  <p className="py-1 px-2 bg-[#271ac1] shadow-md rounded-md">
                    {open_issues}
                  </p>
                  <p>
                    Submitted 30 days ago by{" "}
                    <span className="capitalize font-semibold">{name}</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default github;
