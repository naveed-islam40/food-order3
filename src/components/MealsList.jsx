import { Cross, X } from "lucide-react";
import React from "react";

const MealsList = ({
  setIsOpenMeals,
  mealsTypes,
  handleMenuClick,
  active,
  mainsTypes,
  isOpenMeals,
}) => {
  return (
    <div
      className={`fixed inset-0 top-[180px] h-[calc(100vh-180px)] overflow-y-auto py-10 z-[100] bg-white transition-transform duration-300 ease-in-out transform ${
        isOpenMeals ? "translate-x-0" : "translate-x-full"
      } pt-10 px-8`}
    >
      <X
        className="h-10 w-10 cursor-pointer bg-[#0061EF] p-2 rounded-full text-white absolute top-4 right-4"
        onClick={() => setIsOpenMeals(false)}
      />
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-[#002254] text-4xl font-medium py-2">Menu</h1>
          <div className="flex flex-wrap gap-4">
            {mealsTypes.map((type) => (
              <div
                key={type}
                className={`${
                  type === active
                    ? "bg-[#B93852] text-white"
                    : "bg-[#FEEDF0] text-[#561A26]"
                } p-2 rounded-full px-4 cursor-pointer`}
                onClick={() => handleMenuClick(type)}
              >
                <h1 className="text-lg font-bold">{type}</h1>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-[#002254] text-2xl font-semibold py-2">Mains</h1>
          <div className="flex flex-wrap gap-4">
            {mainsTypes.map((type) => (
              <div
                key={type}
                className="bg-[#DBF1EB] text-[#314942] p-2 rounded-full px-4 cursor-pointer"
                onClick={() => handleMenuClick(type)}
              >
                <h1 className="text-lg font-bold">{type}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealsList;
