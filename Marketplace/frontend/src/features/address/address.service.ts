import { http } from "@/core/config/https";
import type { AddressData } from "./address.schema";
import type { Address } from "./address.types";

export async function createAddress(data : AddressData) : Promise<Address> {
    const response = await http.post<Address>("/addresses", data);
    return response.data;
}

export async function getAddresses() : Promise<Address[]> {
    const response = await http.get<Address[]>("/addresses")
    return response.data;
}

export async function getAddressById(addressId : string) : Promise<Address> {
    const response = await http.get<Address>(`/addresses/${addressId}`);
    return response.data;
}

export async function updateAddress(addressId : string, data : AddressData) : Promise<void> {
    await http.put<Address>(`/addresses/${addressId}`, data)
}