import MovieList from "./components/MovieList";
import useFetch from "../../hooks/useFetch";

const Home = () => {
    const { data: products, isPending, error } = useFetch('http://localhost:8000/products');

    return (
        <>
            {error && <p>{error}</p>}
            {isPending && <p>Loading movies...</p>}
            {products && <MovieList movieList={products} />}
        </>
    );
}

export default Home