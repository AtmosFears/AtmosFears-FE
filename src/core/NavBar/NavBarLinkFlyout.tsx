interface NavBarLinkFlyoutProps {
  text: string;
}

export default function NavBarLinkFlyout({ text }: NavBarLinkFlyoutProps) {
  return (
    <article className='absolute-top-center left-20 bg-gray-800 px-3 py-2 rounded-md w-max shadow-lg opacity-0 invisible translate-x-3 transition-all group-hover:opacity-100 group-hover:visible group-hover:translate-x-0'>
      <div className='absolute-top-center border-transparent border-t-gray-800 border-l-gray-800 border-8 -rotate-45 -left-2' />
      <p className='text-white'>{text}</p>
    </article>
  );
}
