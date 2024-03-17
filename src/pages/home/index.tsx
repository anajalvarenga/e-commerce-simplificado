import useFetch from "../../hooks/useFetch";

const Home = () => {
    const { data: products, isPending, error } = useFetch('http://localhost:8000/products');

    return (
        <section>
            {error && <p>{error}</p>}
            {isPending && <p>Loading users...</p>}
            {products && <div>Home</div>}
        </section>
    );
}

export default Home