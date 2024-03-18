import MovieList from "./components/MovieList";
import Container from "../../components/Container";
import useFetch from "../../hooks/useFetch";

const Home = () => {
    const { data: products, isPending, error } = useFetch('http://localhost:8000/products');

    return (
        <Container>
            {error && <p>{error}</p>}
            {isPending && <p>Loading movies...</p>}
            {products && <MovieList movieList={products} />}
        </Container>
    );
}

export default Home