import { Dialog, DialogPanel } from "@headlessui/react";
import { CardModalProps } from "../types/GameTypes";

function CardModal({ isOpen, setIsOpen, children }: CardModalProps) {
    function close() {
        setIsOpen(false);
    }
    return (
        <>
            <Dialog
                open={isOpen}
                as="div"
                className="relative z-10 focus:outline-none"
                onClose={close}
            >
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/80">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 flex justify-center items-center flex-col"
                        >
                            <div className="text-3xl font-bold text-white mb-4">
                                Choose your Stat
                            </div>
                            {/* Full Size Card */}
                            {children}
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    );
}
export default CardModal;
