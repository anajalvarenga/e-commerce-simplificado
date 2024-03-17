import MovieList from "./components/MovieList";
import useFetch from "../../hooks/useFetch";

const Home = () => {
    const { data: products, isPending, error } = useFetch('http://localhost:8000/products');

    return (
        <main>
            {error && <p>{error}</p>}
            {isPending && <p>Loading movies...</p>}
            {products && <MovieList movieList={products} />}
        </main>
    );
}

export default Home