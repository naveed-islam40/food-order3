import { DialogTrigger } from "@radix-ui/react-dialog";
import Image from "next/image";
import { Button } from "./ui/button";
import { Dialog, DialogContent } from "./ui/dialog";
import { ArrowRight, MapPin, Phone } from "lucide-react";

const OrderModal = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger className="h-screen flex items-center justify-center w-full">
          <Button className="bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold">
            Open Order Modal
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-[#F4FAF8] p-0 border-none max-w-xs sm:max-w-sm text-[#2D2C2C] sm:rounded-2xl rounded-2xl font-lexend max-h-[90vh] overflow-y-auto">
          <div className="relative">
            {/* Macarons Image */}
            <div className="w-full overflow-hidden">
              <Image
                src="/png/order-modal.png"
                alt="Colorful macarons and desserts"
                className="w-full h-full object-cover rounded-t-2xl"
                width={500}
                height={500}
              />
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4">
              <h2 className="text-xl  font-bold text-[#1D242D] font-lexend">
                Wildwood Rushden Lakes
              </h2>
              <p className="text-start text-[#2D2C2C] text-lg font-normal">
                Unit R1 Boardwalk, Rushden Lakes, Rushden, NN10 6FH
              </p>
              <span className="text-[#0049B3] flex gap-3 text-base font-semibold">
                <MapPin color="#0061EF" size={20} />
                15 km from NN3 9ML
              </span>
              <Button
                variant="link"
                size="sm"
                className="p-0 h-auto text-[#232222] text-lg font-bold hover:text-[#232222]"
              >
                Get directions
                <div className="bg-[#0061EF] rounded-full p-1">
                  <ArrowRight className="w-8 h-8  text-white" color="white" />
                </div>
              </Button>
              <div className="grid grid-cols-2 gap-4">
                <Button className="rounded-full bg-[#B93852] hover:bg-[#B93852] py-5 px-8">
                  <Image
                    src="/svg/spon.svg"
                    alt="Order Icon"
                    width={20}
                    height={20}
                  />
                  Order
                </Button>
                <Button className="rounded-full bg-[#0061EF] hover:bg-[#0061EF] py-5 px-8">
                  <Image
                    src="/svg/bike.svg"
                    alt="Order Icon"
                    width={20}
                    height={20}
                  />
                  Book
                </Button>
              </div>
              <Button className="border border-[#0049B3] rounded-full text-base font-semibold w-full py-6 bg-transparent hover:bg-transparent text-[#002254]">
                <Phone color="#002254" fill="#002254" />
                Call to book 078234566586
              </Button>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  className=" bg-transparent hover:bg-transparent border border-[#0049B3] text-[#002254] text-base py-5 rounded-full font-semibold"
                  onClick={() => setOpen(false)}
                >
                  Menu
                </Button>
                <Button
                  className=" bg-transparent hover:bg-transparent border border-[#0049B3] text-[#002254] text-base py-5 rounded-full font-semibold"
                  onClick={() => setOpen(false)}
                >
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OrderModal;
