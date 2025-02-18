import React from "react";
import { X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  position: "left" | "right";
  children: React.ReactNode;
  title?: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  position,
  children,
  title,
}) => {
  // Effect to disable/enable body scroll
  React.useEffect(() => {
    if (isOpen) {
      // Disable scrolling on the body when the sidebar is open
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling when the sidebar is closed
      document.body.style.overflow = "auto";
    }

    // Cleanup to ensure overflow is reset when the component is unmounted or when sidebar is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 ${position}-0 w-[290px] h-full bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen
            ? "translate-x-0"
            : position === "left"
            ? "-translate-x-full"
            : "translate-x-full"
        }`}
      >
        <div
          className={`flex h-6 w-full justify-between p-3 ${
            position === "left" ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <button
            onClick={onClose}
            className={`text-gray-500 hover:text-gray-700`}
            aria-label="Close sidebar"
          >
            <X size={24} />
          </button>
          <div className="text-base font-bold">{title}</div>
        </div>
        <div className="p-2 mt-6 overflow-y-auto h-full">{children}</div>
      </div>
    </>
  );
};

export default Sidebar;
