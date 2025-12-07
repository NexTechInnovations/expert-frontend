import React from "react";

interface NoDataWithMessageProps {
  icon: React.ReactNode;
  title: string;
  message: string;
  actionLink?: {
    href: string;
    text: string;
  }
}

const NoDataWithMessage = ({ icon, title, message, actionLink }: NoDataWithMessageProps) => {
  return (
    <div className="text-center p-6 flex flex-col items-center justify-center h-full">
      <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <p className="font-semibold text-gray-700">{title}</p>
      <p className="text-sm text-gray-500 mt-1">{message}</p>
      {actionLink && (
        <a href={actionLink.href} className="text-sm font-semibold text-blue-600 hover:underline mt-4">
          {actionLink.text} →
        </a>
      )}
    </div>
  );
};

export default NoDataWithMessage;