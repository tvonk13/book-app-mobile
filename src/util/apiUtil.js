import { useQuery, useMutation } from "@tanstack/react-query";

const baseEndpoint = 'https://book-api-image-2l4n4hnuga-uk.a.run.app';
const readsEndpoint = baseEndpoint + '/reads';
const booksEndpoint = baseEndpoint + '/books';
const authorsEndpoint = baseEndpoint + '/authors';
const seriesEndpoint = baseEndpoint + '/series';
const gcpBucketBaseEndpoint = `https://storage.googleapis.com/storage/v1/b/book-app-covers/o`;

const fetchData = (method, endpoint, body) =>
    fetch(endpoint, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }).then(async (response) => {
        const res = await response.json();
        return res.data;
    }).catch((err) => console.log("There's an error!: ", err));

const useCustomMutation = () => {
    const mutationFn = variables => {
        let fullEndpoint = variables.endpoint;
        if (!!variables.id) fullEndpoint += `/${variables.id}`;
        if (!!variables.queryParams) fullEndpoint += `?${variables.queryParams}`;
        return fetchData(variables.method, fullEndpoint, variables.data);
    };
    return useMutation({ mutationFn });
};

const useGetReads = () => useQuery({
    queryKey: ['reads'],
    queryFn: () => fetchData('GET', readsEndpoint)
});

const useGetBooks = () => useQuery({
    queryKey: ['books'],
    queryFn: () => fetchData('GET', booksEndpoint)
});

const useGetBookCovers = () => useQuery({
    queryKey: ['covers'],
    queryFn: () => fetch(`${gcpBucketBaseEndpoint}?delimiter=/`, { method: "GET" }).then((response) => response.json().then((res) => res)),
});

export {
    useGetReads,
    useGetBooks,
    useGetBookCovers,
    useCustomMutation,
    authorsEndpoint,
    seriesEndpoint
}