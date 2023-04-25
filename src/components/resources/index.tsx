import React, { FormEvent, useEffect, useRef, useState } from "react";

import Image from "next/image";

import ResourceCard from "../common/ResourceCard";

const ITEMS_PER_PAGE = 6;

type Resource = {
  index: number;
  image: string;
  title: string;
  category: string;
  category_id: string;
  date: string;
  description: string;
};

const filterList = [
  { index: 0, name: "uk top hospitals", filter: "top_hospital" },
  { index: 1, name: "medical service tips", filter: "service_tip" },
  { index: 2, name: "health & well-being", filter: "well_being" },
  { index: 3, name: "Medical News", filter: "medical_news" },
  { index: 4, name: "Patient stories", filter: "patient_stories" },
  { index: 5, name: "other", filter: "other" },
];

const resourceData: Resource[] = [
  {
    index: 0,
    image: "card-1-image",
    title: "Breakfast is the most important meal of the day",
    category: "HealthScience",
    category_id: "top_hospital",
    date: "19/04/2023",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias maiores autem suscipit dolorum voluptatum illo incidunt quod numquam? Reiciendis aspernatur eligendi culpa exercitationem atque libero animi consequuntur vel quis est?",
  },
  {
    index: 0,
    image: "card-1-image",
    title: "Breakfast is the most important meal of the day",
    category: "HealthScience",
    category_id: "top_hospital",
    date: "19/04/2023",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias maiores autem suscipit dolorum voluptatum illo incidunt quod numquam? Reiciendis aspernatur eligendi culpa exercitationem atque libero animi consequuntur vel quis est?",
  },
  {
    index: 1,
    image: "card-2-image",
    title: "Medical Strategy",
    category: "Medical Strategy",
    date: "18/04/2023",
    category_id: "service_tip",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias maiores autem suscipit dolorum voluptatum illo incidunt quod numquam? Reiciendis aspernatur eligendi culpa exercitationem atque libero animi consequuntur vel quis est?",
  },
  {
    index: 2,
    image: "card-3-image",
    title: "News Card",
    category: "News",
    date: "17/04/2023",
    category_id: "medical_news",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias maiores autem suscipit dolorum voluptatum illo incidunt quod numquam? Reiciendis aspernatur eligendi culpa exercitationem atque libero animi consequuntur vel quis est?",
  },
  {
    index: 3,
    image: "card-4-image",
    title: "This is News Card",
    category: "News",
    date: "16/04/2023",
    category_id: "medical_news",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias maiores autem suscipit dolorum voluptatum illo incidunt quod numquam? Reiciendis aspernatur eligendi culpa exercitationem atque libero animi consequuntur vel quis est?",
  },
  {
    index: 4,
    image: "card-5-image",
    title: "Patient strories",
    category: "PatientStories",
    date: "15/04/2023",
    category_id: "patient_stories",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias maiores autem suscipit dolorum voluptatum illo incidunt quod numquam? Reiciendis aspernatur eligendi culpa exercitationem atque libero animi consequuntur vel quis est?",
  },
  {
    index: 5,
    image: "card-6-image",
    title: "Health science",
    category: "HealthScience",
    date: "12/02/2022",
    category_id: "other",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias maiores autem suscipit dolorum voluptatum illo incidunt quod numquam? Reiciendis aspernatur eligendi culpa exercitationem atque libero animi consequuntur vel quis est?",
  },
  {
    index: 6,
    image: "card-7-image",
    title: "Health science",
    category: "HealthScience",
    date: "12/02/2022",
    category_id: "other",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias maiores autem suscipit dolorum voluptatum illo incidunt quod numquam? Reiciendis aspernatur eligendi culpa exercitationem atque libero animi consequuntur vel quis est?",
  },
  {
    index: 7,
    image: "card-8-image",
    title: "Health science",
    category: "HealthScience",
    date: "12/02/2022",
    category_id: "other",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias maiores autem suscipit dolorum voluptatum illo incidunt quod numquam? Reiciendis aspernatur eligendi culpa exercitationem atque libero animi consequuntur vel quis est?",
  },
  {
    index: 8,
    image: "card-1-image",
    title: "Health science title",
    category: "HealthScience",
    date: "12/02/2022",
    category_id: "other",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias maiores autem suscipit dolorum voluptatum illo incidunt quod numquam? Reiciendis aspernatur eligendi culpa exercitationem atque libero animi consequuntur vel quis est?",
  },
  {
    index: 9,
    image: "card-2-image",
    title: "Health science title",
    category: "HealthScience",
    date: "12/02/2022",
    category_id: "other",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias maiores autem suscipit dolorum voluptatum illo incidunt quod numquam? Reiciendis aspernatur eligendi culpa exercitationem atque libero animi consequuntur vel quis est?",
  },
];

function ResourcesPage() {
  const [filteredItems, setFilteredItems] = useState<Resource[]>([]);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const resourceRef = useRef<HTMLDivElement>(null);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const itemsToDisplay =
    filteredItems.length > ITEMS_PER_PAGE
      ? filteredItems.slice(startIndex, endIndex)
      : filteredItems;

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
  };

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setSearchValue("");
  };

  useEffect(() => {
    const finalData = resourceData
      .filter(
        (item) =>
          selectedFilter === "all" ||
          selectedFilter === item.category_id ||
          selectedFilter === "other"
      )
      .filter((item) => {
        const searchRegex = new RegExp(searchValue, "gi");
        return (
          searchRegex.test(item.title) ||
          searchRegex.test(item.category) ||
          searchRegex.test(item.date) ||
          searchRegex.test(item.description)
        );
      });
    setCurrentPage(1);
    setFilteredItems(finalData);
  }, [selectedFilter, searchValue]);

  return (
    <div className="container mx-auto flex flex-col-reverse md:flex-row items-start justify-center md:justify-between gap-8 md:gap-0 px-3 md:px-0">
      <div
        className="flex flex-col justify-center items-center w-full md:w-[70%]"
        ref={resourceRef}
      >
        <div className="w-full flex flex-col items-center md:items-stretch">
          <h1 className=" font-bold  text-5xl leading-[65px] text-black">
            Resources
          </h1>
          <div className=" flex  justify-center md:mr-11">
            <ul className="flex max-w-[80%] my-4 gap-4 w-full justify-around flex-wrap">
              {filterList.map((item, index) => {
                const { name, filter } = item;
                const isActive = selectedFilter === filter;

                return (
                  <li
                    key={index}
                    className={`text-base hover:cursor-pointer capitalize ${
                      isActive ? "text-[#3A7065]" : "text-black"
                    }`}
                    onClick={() => handleFilterClick(filter)}
                  >
                    {name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap w-full">
          {filteredItems.length > 0 ? (
            itemsToDisplay.map((item, index) => {
              const { image, title, description, category, date } = item;
              return (
                <ResourceCard
                  key={index}
                  image={image}
                  category={category}
                  date={date}
                  title={title}
                  description={description}
                />
              );
            })
          ) : (
            <div className="text-2xl md:mx-5 my-8 font-bold max-w-xs  md:max-w-sm xl:max-w-2xl 2xl:max-w-4xl ">
              {searchValue.length > 0 ? (
                <p className="break-words">
                  {`No data found for search term "${searchValue}".`}
                </p>
              ) : (
                <p className="break-words">{`No data found `}</p>
              )}
            </div>
          )}
          {filteredItems.length > ITEMS_PER_PAGE && (
            <div className="flex justify-center w-full py-4">
              <nav className="inline-block">
                <ul className="flex gap-2 pl-0 rounded list-none flex-wrap">
                  {[
                    ...Array(Math.ceil(filteredItems.length / ITEMS_PER_PAGE)),
                  ].map((v, i) => (
                    <li key={i}>
                      <button
                        className={`px-3 py-1 rounded font-bold transition-colors duration-300 ${
                          currentPage === i + 1
                            ? "bg-[#419886] text-white"
                            : "bg-white text-gray-900 hover:bg-gray-200"
                        }`}
                        onClick={() => {
                          setCurrentPage(i + 1),
                            window.scrollTo({
                              top: resourceRef?.current?.offsetTop
                                ? resourceRef?.current?.offsetTop - 100
                                : 0,
                              behavior: "smooth",
                            });
                        }}
                      >
                        {i + 1}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
      <div className="w-full md:w-[30%] h-full flex flex-col-reverse md:flex-col gap-6 md:gap-8">
        <form className="flex" onSubmit={(event) => handleSearchSubmit(event)}>
          <input
            className="border-y border-l block w-full border-gray-300 outline-none py-3 px-4 rounded-l-md "
            type="text"
            name=""
            placeholder="Search for pages.."
            id=""
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className="bg-[#24403B] p-3 hover:cursor-pointer rounded-r-md">
            <Image
              src="/images/icons/search-icon.svg"
              height="35"
              width="35"
              alt="search-icon"
            />
          </button>
        </form>
        <div className="flex flex-col gap-5 px-3 xs:px-0">
          <div className="flex flex-col gap-5">
            <h1 className="uppercase font-bold text-lg">recent posts</h1>
            <div className="flex flex-col gap-5">
              {resourceData
                .sort(
                  (a, b) =>
                    new Date(b.date).getTime() - new Date(a.date).getTime()
                )
                .slice(0, 3)
                .map((item, index, arr) => {
                  const { image, title, category } = item;
                  return (
                    <React.Fragment key={index}>
                      <div className="pb-2  flex gap-4">
                        {/* image */}
                        <Image
                          src={`/images/resource-card/${image ?? ""}.png`}
                          className="object-cover rounded-md flex-shrink-0"
                          height={90}
                          width={90}
                          alt={image}
                        />
                        {/* dscription */}
                        <div className="flex flex-col justify-between ">
                          <p className="text-lg overflow-hidden line-clamp-2">
                            {title ?? ""}
                          </p>
                          <div className="flex items-center gap-1">
                            <Image
                              src="/images/icons/tag.svg"
                              height="18"
                              width="18"
                              alt="tag-logo"
                              className="-rotate-90 hover:cursor-pointer"
                            />
                            <p className="text-gray-500 hover:cursor-pointer">
                              {category ?? ""}
                            </p>
                          </div>
                        </div>
                      </div>
                      {index !== arr.length - 1 ? (
                        <hr className="border-gray-200 mx-5" />
                      ) : (
                        <hr className="border-gray-400 mt-5 mb-3" />
                      )}
                    </React.Fragment>
                  );
                })}
            </div>
          </div>
          <div className="flex flex-col gap-5 pb-10 ">
            <h1 className="uppercase  font-bold text-lg">Tags</h1>
            <div className="md:py-2">
              <button className="py-2.5  transition-all duration-300 px-5 hover:shadow-btn-shadow border rounded-[20px]  border-gray-400 inline-block font-medium">
                Booking guidance{""}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResourcesPage;
