import { http } from "@/core/config/https";
import type { StoreData } from "./store.schema";
import type { Store } from "./store.types";

export async function createStore(data: StoreData) : Promise<Store> {
    const response = await http.post<Store>("/stores", data);
    return response.data;
}