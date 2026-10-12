import { UpdateProfileForm } from "../components/UpdateProfileForm";
import { useGetProfile } from "../hooks/useGetProfile";

export function PersonalInformation() {
    const { profile, loading, error } = useGetProfile();

    if (loading) return <p>Carregando...</p>;
    if (error || !profile) return <p>{error}</p>;

    return (
        <>
            <h1 className="text-xl">Seus dados</h1>
            <UpdateProfileForm profile={profile} />
        </>
    )
}