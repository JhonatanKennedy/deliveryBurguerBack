import { getRepository } from 'typeorm';
import Checkout from '../../models/Checkout';
import Item from '../../models/Item';
import Address from '../../models/Address';


interface Request {
    id_user:string;
}


class ShowCheckoutService {

    public async execute({ id_user }: Request): Promise<any> {
        const checkoutRepository = getRepository(Checkout);
        const itemsRepository = getRepository(Item);
        const addressRepository = getRepository(Address);

        const checkoutList = await checkoutRepository.find({
            where: {id_user, inProgress:true}
        });

        //fazer um if para pegar os que tao sendo feito agr if (flag do front) 

        var history = []
        for await (let checkout of checkoutList){
            const id_checkout = checkout.id;
            const id_address = checkout.id_address;
            const items = await itemsRepository.find({
                where: {id_checkout}
            });
            const address = await addressRepository.findOne({
                where: {id:id_address}
            });

            history.push({checkout,items,address})
        }
        return history;


    }

}

export default ShowCheckoutService;