import styled from "styled-components";
import { Product } from "../../../types/product";
import MovieCard from "./MovieCard";

const Grid = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(272px, 1fr));
    grid-column-gap: 16px;
    grid-row-gap: 24px;
`;

const MovieList = ({ movieList }: { movieList: Product[] }) => {
    return (
        <Grid>
            {movieList.map(movie => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                />
            ))}
        </Grid>
    );
}

export default MovieList;