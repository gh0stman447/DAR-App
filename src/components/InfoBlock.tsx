import React, { FC, ReactNode } from 'react';

interface InfoBlockProps {
  title: string;
  info: string | Record<string, ReactNode>;
}

const InfoBlock: FC<InfoBlockProps> = ({ title, info }) => {
  const renderInfo = () => {
    if (typeof info === 'object' && !Array.isArray(info)) {
      return (
        <div>
          {Object.entries(info).map(([key, value], index) => (
            <div key={index}>
              <span>{key}: </span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      );
    } else {
      return <div>{info}</div>;
    }
  };

  return (
    <div className='divide-y bg-white'>
      <div className='px-6 py-4'>{title}</div>
      <div className='p-6'>{renderInfo()}</div>
    </div>
  );
};

export default InfoBlock;
