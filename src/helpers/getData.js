export const getData = async () => {
    const url = 'http://hp-api.herokuapp.com/api/characters/'
    // let data = [];
    // try {
        const resp = await fetch( url );
        const data  = await resp.json();
    // }
    // catch (err) {
    //     console.log('no se hizo el fetch');
    //     data = [];
    // }

    // console.log('get', data)

    return data;
}
