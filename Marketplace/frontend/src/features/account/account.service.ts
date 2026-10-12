import { http } from "../../core/config/https";
import type { Profile } from "./account.types";
import type { ChangePasswordData } from "./schemas/changePasswordSchema";
import type { UpdateProfileData } from "./schemas/updateProfileSchema";

export async function updateProfile(data: UpdateProfileData) : Promise<Profile> {
    const response = await http.put<Profile>("/users/me", data);
    return response.data;
}

export async function changePassword(data: ChangePasswordData) : Promise<void> {
    await http.put('/users/me/password', data);
}

export async function getProfile() : Promise<Profile> {
    const response = await http.get<Profile>("/users/me")
    return response.data;
}

