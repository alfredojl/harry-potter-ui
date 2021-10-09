export const getData = async () => {
    const url = 'http://localhost:3001/students'

    const resp = await fetch( url );
    const data  = await resp.json();
    return data;
}
