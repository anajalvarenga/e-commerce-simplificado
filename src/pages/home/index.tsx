import MovieList from "./components/MovieList";
import Empty from "../../components/Empty";
import LoadingSpinner from "../../components/LoadingSpinner";
import useFetch from "../../hooks/useFetch";

const Home = () => {
    const { data: products, isPending, error } = useFetch('http://localhost:8000/products');

    return (
        <>
            {error && <Empty action="reload" />}
            {isPending && <LoadingSpinner />}
            {products && <MovieList movieList={products} />}
        </>
    );
}

export default Home