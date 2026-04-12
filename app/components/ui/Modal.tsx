import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/*Overlay*/}
      <div className="absolute inset-0 bg-black/50" onClick={onClose}>
        {/*Modal Content*/}
        <div className="relative bg-white rounded-xl shadow-lg w-full max-w-md p-6 z-10">
          {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}
          {children}
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-black"
            onClick={onClose}
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
};
