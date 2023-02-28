import { atom } from "recoil";
import { Restaurant } from "@/types/restaurant";

const detailState = atom<Restaurant | null>({
	key: "detailState",
	default: null,
});

export { detailState };
