import React, { Children, ReactElement, ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ModalProps {
  isOpen?: boolean;
  trigger: string | ReactElement;
  title: string;
  children?: ReactNode;
}
const Modal = ({ isOpen, trigger, title, children }: ModalProps) => {
  if (!isOpen) {
    return <div>{trigger}</div>;
  }
  return (
    <div>
      {isOpen && (
        <Dialog>
          <DialogTrigger>{trigger}</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{children}</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Modal;
