import { Transition } from '@headlessui/react';
import { classNames } from '../../helpers/classNames';

export default function SlideUp(props) {
  const { show, children } = props;

  return (
    <div
      className={classNames(
        show ? 'opacity-100' : 'opacity-0 translate-y-full',
        'transition-all ease-in-out duration-[2000ms]'
      )}
    >
      {children}
    </div>
  );
}
