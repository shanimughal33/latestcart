import React, { useEffect, useRef, useState } from "react";

function Gallery() {
  const galleryRef = useRef(null);
  const platformRef = useRef(null);
  const contentAreaRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(750); // Assuming fixed width for now
  const frames = [
    {
      title: "Tiger",
      imgSrc: "https://images-na.ssl-images-amazon.com/images/I/81eJpEEQwYL._AC_SL1500_.jpg",
      description:
        "fttrdtrdry5d..",
    },
    {
      title: "Lion",
      imgSrc: "https://image.freepik.com/free-vector/cute-lion-cartoon_160606-353.jpg",
      description:
        "The lion is ajytfftyf5...",
    },
    {
      title: "Rat",
      imgSrc: "https://i.pinimg.com/originals/07/1d/d0/071dd09d7b36e49139fe2cf08ff728a8.jpg",
      description: "Rats are various medium-sized, long-tailed rodents...",
    },
    {
      title: "Owl",
      imgSrc: "https://image.freepik.com/free-vector/cartoon-owl-tree-branch_194935-43.jpg",
      description:
        "Owls are birds from the order Strigiformes, which includes over 200 species...",
    },
  ];

  const limit = { start: 0, end: frames.length - 1 };

  useEffect(() => {
    if (galleryRef.current) {
      setWidth(galleryRef.current.offsetWidth);
    }
    const handleKeyUp = (e) => {
      if (e.keyCode === 39 && index < limit.end) next();
      if (e.keyCode === 37 && index > limit.start) prev();
    };

    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [index]);

  const setPlatformStyle = (newIndex) => {
    platformRef.current.style.right = width * newIndex + "px";
  };

  const next = () => {
    const newIndex = index + 1;
    if (newIndex <= limit.end) {
      setIndex(newIndex);
      setPlatformStyle(newIndex);
    }
  };

  const prev = () => {
    const newIndex = index - 1;
    if (newIndex >= limit.start) {
      setIndex(newIndex);
      setPlatformStyle(newIndex);
    }
  };

  const gotoFrame = (gotoIndex) => {
    let newIndex = gotoIndex === "end" ? limit.end : parseInt(gotoIndex);
    setIndex(newIndex);
    setPlatformStyle(newIndex);
  };

  return (
    <div>
      <div className="text-xl font-bold m-5 text-center">
        Use Keyboard Arrow Keys To Go Left And Right
      </div>

      <div
        className="gallery border-2 rounded mx-auto m-5 bg-white"
        ref={galleryRef}
        style={{ width: "750px" }}
      >
        <div className="top flex p-2 border-b select-none">
          <div className="heading text-gray-800 w-full pl-3 font-semibold my-auto">
            {frames[index].title}
          </div>
          <div className="buttons ml-auto flex text-gray-600 mr-1">
            <svg
              onClick={prev}
              className="w-7 border-2 rounded-l-lg p-1 cursor-pointer border-r-0"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <svg
              onClick={next}
              className="w-7 border-2 rounded-r-lg p-1 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>

        <div className="content-area w-full h-96 overflow-hidden" ref={contentAreaRef}>
          <div className="platform shadow-xl h-full flex" ref={platformRef}>
            {frames.map((frame, idx) => (
              <div
                key={idx}
                className="each-frame border-box flex-none h-full"
                style={{ width: width + "px" }}
                title={frame.title}
              >
                <div className="main flex w-full p-8">
                  <div className="sub w-4/6 my-auto">
                    <img className="w-full p-8" src={frame.imgSrc} alt={frame.title} />
                  </div>
                  <div className="sub w-full my-auto">
                    <div className="head text-3xl font-bold mb-4">{frame.title}</div>
                    <div className="long-text text-lg">{frame.description}</div>
                    {idx === 0 && (
                      <div
                        className="goto border border-gray-400 text-sm font-semibold inline-block mt-2 p-1 px-2 rounded cursor-pointer"
                        onClick={() => gotoFrame(2)}
                      >
                        Goto Third Frame
                      </div>
                    )}
                    {idx === 0 && (
                      <div
                        className="goto border border-gray-400 text-sm font-semibold inline-block mt-2 p-1 px-2 rounded cursor-pointer"
                        onClick={() => gotoFrame("end")}
                      >
                        Goto Last Frame
                      </div>
                    )}
                    {idx === 3 && (
                      <div
                        className="goto border border-gray-400 text-sm font-semibold inline-block mt-2 p-1 px-2 rounded cursor-pointer"
                        onClick={() => gotoFrame(0)}
                      >
                        Goto First Frame
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
