const baseUrl = 'http://localhost:3000';

export interface Koncert {
    id: number;
    artist: string;
    start: Date;
    duration: number;
    cancelled: boolean;
}

export const getKoncerts = async (): Promise<Koncert[]> => {
    const response = await fetch(`${baseUrl}/koncert`);
    return await response.json();
}

export const getKoncert = async (id: number): Promise<Koncert> => {
    const response = await fetch(`${baseUrl}/koncert/${id}`);
    return await response.json();
}

export const addKoncert = async (koncert: Omit<Koncert, "id">): Promise<Koncert> => {
    const response = await fetch(`${baseUrl}/koncert`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(koncert),
    });
    return await response.json();
};


export const updateKoncert = async (koncert: Koncert): Promise<Koncert> => {
    const response = await fetch(`${baseUrl}/koncert/${koncert.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(koncert),
    });
    return await response.json();
}

export const deleteKoncert = async (id: number): Promise<void> => {
    await fetch(`${baseUrl}/koncert/${id}`, {
        method: 'DELETE',
    });
}

export const cancelKoncert = async (id: number): Promise<Koncert> => {
    const koncert = await getKoncert(id);
    koncert.cancelled = true;
    return await updateKoncert(koncert);
}
