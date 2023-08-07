import React from "react";

const SkeletonTable: React.FC = () => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="py-3 px-6 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
          <th className="py-3 px-6 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
          <th className="py-3 px-6 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {[...Array(5)].map((_, index) => (
          <tr key={index}>
            <td className="py-4 px-6 bg-white"></td>
            <td className="py-4 px-6 bg-white"></td>
            <td className="py-4 px-6 bg-white"></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SkeletonTable;
