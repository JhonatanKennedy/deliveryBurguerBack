import { getRepository } from 'typeorm';
import Checkout from '../../models/Checkout';
import Item from '../../models/Item';

interface Request {
    id_user:string;
    id_address: string;
    inProgress:Boolean;
    estimated_time: number;
    items: Item[];
}


class CreateCheckoutService {
    public async execute ({ id_user, id_address, inProgress, estimated_time, items}: Request): Promise<any> {
        const checkoutRepository = getRepository(Checkout);
        const itemRepository = getRepository(Item);

        const newCheckout = checkoutRepository.create({
            id_user,
            id_address,
            inProgress,
            estimated_time
        });

        await checkoutRepository.save(newCheckout);

        items.map(async (element) => {
            const item = new Item();
            item.id_checkout = newCheckout.id;
            item.product_name = element.product_name;
            item.price = element.price;
            item.quantity = element.quantity;
            item.notes = element.notes;

                if (!element.extra_names){
                    item.extra_names = 'Nenhum'
                } else {
                    item.extra_names = element.extra_names;
                }

            const newItem = itemRepository.create(item);
            await itemRepository.save(newItem);
        });

    }
}

export default CreateCheckoutService;