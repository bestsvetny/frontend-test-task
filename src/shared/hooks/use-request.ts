import { useCallback, useEffect, useState } from 'react';
import { AxiosError, AxiosResponse } from 'axios';

export function useRequest<T>(request: () => Promise<AxiosResponse<T>>): {
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: string | undefined;
    data: T | undefined;
    refetch: () => void;
} {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);
    const [data, setData] = useState<T>();

    const fetch = useCallback(async () => {
        setIsLoading(true);

        try {
            const response = await request();

            setData(response.data);
            setIsLoading(false);
        } catch (e: unknown) {
            console.error(e);

            if (e instanceof AxiosError) {
                setError(e.message);
            } else {
                setError('Something went wrong');
            }

            setIsError(true);
            setIsLoading(false);
        }
    }, [request]);

    useEffect(() => {
        void fetch();
    }, [fetch]);

    return { refetch: fetch, isLoading, isError, error, data, isSuccess: Boolean(data && !isLoading && !isError) };
}
