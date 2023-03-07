import * as ToastPrimitive from '@radix-ui/react-toast';
import { User, X } from 'phosphor-react';
import { ComponentProps } from 'react';
import {
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewPort,
} from './styles';
// import { ToastContainer, ToastFallback, ToastImage } from './styles';

export interface ToastProps extends ComponentProps<typeof ToastPrimitive.Root> {
  title: string;
  description?: string;
}

export const Toast = ({ title, description, ...props }: ToastProps) => {
  return (
    <ToastPrimitive.Provider>
      <ToastRoot {...props}>
        <ToastTitle>{title}</ToastTitle>
        {description && <ToastDescription>{description}</ToastDescription>}
        <ToastClose>
          <X />
        </ToastClose>
      </ToastRoot>

      <ToastViewPort />
    </ToastPrimitive.Provider>
  );
};

Toast.displayName = 'Toast';
