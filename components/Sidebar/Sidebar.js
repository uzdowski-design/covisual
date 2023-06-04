'use client';

import { useEffect, useState } from 'react';

const Sidebar = () => {
  //   const [isVisible, setIsVisible] = useState(false);
  //   const [right, setRight] = useState('right-0');

  //   useEffect(() => {
  //     if (isVisible) {
  //       setRight('right-0');
  //     } else {
  //       setRight('-right-[100vw]');
  //     }
  //     setTimeout(() => {
  //       setIsVisible((prev) => !prev);
  //     }, 4000);
  //   }, [isVisible]);
  const isVisible = true;
  const right = isVisible ? 'right-0' : '-right-[100vw]';
  return (
    <div
      className={`fixed h-[90vh] w-[80vw] text-center vertical_light_gradient ${right} top-[5vh] z-[100] overflow-scroll rounded-l-lg transition-all`}
    >
      <h2>World info</h2>
      <ul className="">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </div>
  );
};

export default Sidebar;
