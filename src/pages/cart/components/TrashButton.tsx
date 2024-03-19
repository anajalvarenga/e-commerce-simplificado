import TrashIcon from "../../../assets/icons/TrashIcon";
import { ButtonIcon } from "../../../components/ButtonIcon";
import { useCartContext } from "../../../context/CartContext";

const TrashButton = ({ id }: { id: number }) => {
    const { removeAllCartItem } = useCartContext();

    return (
        <ButtonIcon onClick={() => removeAllCartItem(id)}>
            <TrashIcon />
        </ButtonIcon>
    );
}

export default TrashButton;