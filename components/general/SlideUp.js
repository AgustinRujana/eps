import { Transition } from '@headlessui/react';

export default function SlideUp(props) {
  const { show, children } = props;
	
  return (
    <Transition
      show={show}
      enter="transform transition ease-out duration-[2000ms]"
      enterFrom="opacity-0 translate-y-full"
      enterTo="opacity-100 translate-y-0"
      leave="transform transition ease-out duration-[2000ms"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-full"
    >
      {children}
    </Transition>
  );
}