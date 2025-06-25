import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { DialogTrigger } from "@radix-ui/react-dialog";
import Image from "next/image";
import { useIsMobile } from "@/hooks/useMobile";

const PromotionalModal = () => {
  const isMobile = useIsMobile(640);
  return (
    <div>
      <Dialog>
        <DialogTrigger className="h-screen flex items-center justify-center w-full">
          <Button className="bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold">
            Open Promotional Modal
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-[#F4FAF8] p-0 border-none max-w-xs sm:max-w-lg text-[#2D2C2C] sm:rounded-2xl rounded-2xl max-h-[90vh] overflow-y-auto">
          <div className="relative overflow-hidden">
            {/* Macarons Image */}
            <div className="w-full overflow-hidden">
              <Image
                src={
                  isMobile
                    ? "/png/mobile_promotional.png"
                    : "/png/promotional_modal.png"
                }
                alt="Colorful macarons and desserts"
                className="w-full h-full object-cover rounded-t-2xl"
                width={500}
                height={500}
              />
            </div>

            {/* Modal Content */}
            <div className="p-6 text-center">
              <h2 className="text-4xl  font-medium text-[#002254] mb-4 font-lexend">
                Get 25% Off
              </h2>
              <p className="mb-6 leading-relaxed text-lg font-normal">
                Absolutely delicious food and drinks, and we do feel like fun
                and fizzy, and highly recommend to everyone.
              </p>

              <div>
                <Button
                  className=" bg-[#B93852] hover:bg-[#B93852] text-white py-5 rounded-full font-semibold"
                  onClick={() => setOpen(false)}
                >
                  Get your 25% OFF now!
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PromotionalModal;
