// features/account/hooks/useGetProfile.ts
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getProfile } from '../account.service';
import type { Profile } from '../account.types';

export function useGetProfile() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await getProfile();
        setProfile(data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message ?? 'Erro ao carregar o perfil');
        } else {
          setError('Erro ao carregar o perfil');
        }
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return { profile, loading, error };
}