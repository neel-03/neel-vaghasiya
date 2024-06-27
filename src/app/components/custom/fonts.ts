import { Kanit } from "next/font/google";
import { Overpass } from "next/font/google";

export const heading = Kanit({
    weight: "700",
    subsets: [
        "latin"
    ],
});

export const content = Overpass({
    weight: "400",
    subsets: [
        "latin"
    ],
})