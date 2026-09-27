import images from "./images.json"
import { ResponseData } from "@/types"

/** Retrieves the locally maintained list of gallery images. */
export const getImages = async (): Promise<ResponseData[]> => images
