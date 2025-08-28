"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const CoreFeatures = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // Prev/Next button logic
  const usePrevNextButtons = (emblaApi) => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

    const onPrevButtonClick = useCallback(() => {
      if (!emblaApi) return;
      emblaApi.scrollPrev();
    }, [emblaApi]);

    const onNextButtonClick = useCallback(() => {
      if (!emblaApi) return;
      emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback((emblaApi) => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
    }, []);

    useEffect(() => {
      if (!emblaApi) return;
      onSelect(emblaApi);
      emblaApi.on("reInit", onSelect).on("select", onSelect);
    }, [emblaApi, onSelect]);

    return {
      prevBtnDisabled,
      nextBtnDisabled,
      onPrevButtonClick,
      onNextButtonClick,
    };
  };

  // Arrow buttons
  const PrevButton = (props) => (
    <button
      className="embla__button embla__button--prev p-2 bg-white rounded-full shadow disabled:opacity-30"
      type="button"
      {...props}
    >
      <svg className="w-6 h-6" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
        />
      </svg>
    </button>
  );

  const NextButton = (props) => (
    <button
      className="embla__button embla__button--next p-2 bg-white rounded-full shadow disabled:opacity-30"
      type="button"
      {...props}
    >
      <svg className="w-6 h-6" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
        />
      </svg>
    </button>
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  // Features Data
  const features = [
    {
      icon: "/Icons/smartTagging.png",
      title: "Smart Tagging",
      text: "Use predefined labels (Room, Damage, Material) or AI-suggested tags to keep images organized.",
    },
    {
      icon: "/Icons/legalGradeMetaData.png",
      title: "Legal-Grade Metadata",
      text: "Every photo includes timestamp, GPS location, and user ID for legal compliance.",
    },
    {
      icon: "/Icons/legalGradeMetaData.png",
      title: "Offline Mode",
      text: "Capture photos anywhere — they sync automatically when you’re back online.",
    },
    {
      icon: "/Icons/legalGradeMetaData.png",
      title: "Instant Capture & Sync",
      text: "Field photos auto-upload to the correct job or claim in real-time.",
    },
     {
      icon: "/Icons/smartTagging.png",
      title: "Smart Tagging",
      text: "Use predefined labels (Room, Damage, Material) or AI-suggested tags to keep images organized.",
    },
     {
      icon: "/Icons/legalGradeMetaData.png",
      title: "Legal-Grade Metadata",
      text: "Every photo includes timestamp, GPS location, and user ID for legal compliance.",
    },
     {
      icon: "/Icons/legalGradeMetaData.png",
      title: "Offline Mode",
      text: "Capture photos anywhere — they sync automatically when you’re back online.",
    },
    {
      icon: "/Icons/legalGradeMetaData.png",
      title: "Instant Capture & Sync",
      text: "Field photos auto-upload to the correct job or claim in real-time.",
    },
  ];

  return (
    <section
      className="py-10 px-0 relative"
      style={{
        backgroundImage: "url('/Images/CoreFeatures.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "45rem",
      }}
    >
      {/* Row 1 - Heading + Subtext */}
      <div className="text-left mb-10" style={{ margin: "35px" }}>
        <h2
          style={{
            fontSize: "50px",
            fontWeight: "500",
            color: "white",
            maxWidth: "47%",
            zIndex: "2",
            lineHeight: "1.3",
            textAlign: "left",
          }}
        >
          Core Features <br /> & Key Advantages
        </h2>
        <p className="text-white mt-2" style={{ fontSize: "15px" }}>
          Capture, tag, and sync inspection photos <br />
          with courtroom-ready accuracy — instantly.
        </p>
      </div>

      {/* Arrows - between row 1 and row 2 */}
      <div className="flex justify-between gap-6 mb-6 px-4">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>

      {/* Row 2 - Carousel */}
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex-[0_0_80%] sm:flex-[0_0_40%] md:flex-[0_0_30%] lg:flex-[0_0_25%] p-4"
            >
              <div
                className="rounded-[20px] text-left"
                style={{
                  background: "#FFFFFF33",
                  backdropFilter: "blur(10px)",
                  padding: "35px",
                  minHeight: "230px",
                }}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 mb-4"
                />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white" style={{fontSize:"13px"}}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
