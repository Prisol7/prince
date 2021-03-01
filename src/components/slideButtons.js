import React from "react";
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import { IconButton } from "@material-ui/core";

export const PrevButton = ({ enabled, onClick }) => (
    <button
        className="embla__button embla__button--prev"
        onClick={onClick}
        disabled={!enabled}
    >
        <SkipPreviousIcon/>
    </button>
);

export const NextButton = ({ enabled, onClick }) => (
    <button
        className="embla__button embla__button--next"
        onClick={onClick}
        disabled={!enabled}
    >
       <SkipNextIcon/>
    </button>
);
