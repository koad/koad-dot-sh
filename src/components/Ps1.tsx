import React from 'react';
import config from '../../config.json';

export const Ps1 = () => {
  return (
    <div>
      <span className="text-light-yellow dark:text-dark-yellow">{config.ps1_username}</span>
      <span className="text-light-gray dark:text-dark-gray"> in </span>
      <span className="text-light-yellow dark:text-dark-yellow">{config.ps1_hostname}</span>
      <span className="text-light-gray dark:text-dark-gray"> with </span>
      <span className="text-light-yellow dark:text-dark-yellow">{config.ps1_entity}</span>
      <span className="text-light-gray dark:text-dark-gray"> ~/ </span>
{/*      <br />
      <span className="text-light-yellow dark:text-dark-gray">00:00:00:00:00:00</span>*/}
      <span className="text-light-gray dark:text-dark-gray">> </span>
    </div>
  );
};

export default Ps1;
