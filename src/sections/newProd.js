import Image from 'next/image'
import Link from 'next/link'
import Button from "../components/button";

export default function NewProd(){
    return (
        <section className="flex justify-between items-center w-full">
            <div className="mr-1.5 flex justify-center items-end w-2/4 relative">
                <Image src="/pro_1.png" alt="product" width={875} height={602} />
                <div className="w-full absolute flex justify-center items-center mb-32">
                    <Button link="/shop" value="shop all" />
                </div>
            </div>
            <div className="ml-1.5 flex justify-center items-end w-2/4 relative">
                <Image src="/pro_2.png" alt="product" width={875} height={602} />
                <div className="w-full absolute absolute flex justify-center items-center mb-32">
                    <Button link="/shop" value="new arrival" />
                </div>
            </div>
        </section>
    )
}
