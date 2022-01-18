import React, { FC } from "react";

interface IProps {
  nameCard: string;
  valueCard: string;
  iconCard: string;
  backGroundCard?: string;
  textColor?: string;
  styles?: string;
  secondaryStyles?:string;
}
const MetricCard: FC<IProps> = ({
  nameCard,
  valueCard,
  iconCard,
  backGroundCard,
  styles,
  textColor,
  secondaryStyles
}) => {
  return (
    <>
      <div className="w-full md:w-1/2 xl:w-1/3 p-6">
        <div className={`${styles} rounded-lg shadow-xl p-5`}>
          <div className="flex flex-row items-center">
            <div className="flex-shrink pr-4">
              <div className={`${backGroundCard} rounded-full p-5`}>
                <i className={iconCard}></i>
              </div>
            </div>
            <div className="flex-1 text-right md:text-center">
              <h2 className="font-bold uppercase text-gray-600">{nameCard}</h2>
              <p className="font-bold text-3xl">
                {valueCard}{" "}
                <span className={textColor}>
                  <i className={secondaryStyles}></i>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MetricCard;
