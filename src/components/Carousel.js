import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./slideButtons";
import { useEmblaCarousel } from "embla-carousel/react";
import { mediaByIndex } from "./media/mediaindex.js";
import "./embla.css";


const EmblaCarousel = ({ slides }) => {
    const [viewportRef, embla] = useEmblaCarousel({
        dragFree: true,
        containScroll: "trimSnaps"
    });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    const onSelect = useCallback(() => {
        if (!embla) return;
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
    }, [embla]);

    useEffect(() => {
        if (!embla) return;
        embla.on("select", onSelect);
        onSelect();
    }, [embla, onSelect]);


    return (
        <div className="embla">
            <div className="embla__viewport" ref={viewportRef}>
                <div className="embla__container">
                    {slides.map(index => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__inner">
                                <iframe
                                    className="embla__slide__img"
                                    src={mediaByIndex(index)}
                                    width="300" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"
                                >
                                    </iframe>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
            <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </div>
    );
};

export default EmblaCarousel;
