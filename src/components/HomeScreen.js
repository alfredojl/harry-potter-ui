import { CardGrid } from './CardGrid';
import { HeaderFavs } from './HeaderFavs';
import { useFetchData } from '../hooks/useFetchData';


export const HomeScreen = () => {
    
    const { data, loading } = useFetchData();

    return (
        <>
            <HeaderFavs />
            <div className="img__top">
                <img
                    src='./hpLogo.png'
                    alt='logoHP'
                    className="img__logo"    
                />
            </div>
            <div className="container">
                <h2 className="container__text">Selecciona tu filtro</h2>
                <div className="btn__inline">
                    <button className="btn btn-filter">ESTUDIANTES</button>
                    <button className="btn btn-filter">STAFF</button>
                </div>
                { loading ? 'Loading...' : null }
                <CardGrid data={ [ ...data ] }/>
            </div>
        </>
    )
}
