interface ActiveLinkIndicatorProps {
  activeLinkIndex: number;
  linksCount: number;
}

export default function ActiveLinkIndicator({
  activeLinkIndex,
  linksCount
}: ActiveLinkIndicatorProps) {
  return (
    <div className='absolute h-full w-1 left-0 bg-primary rounded-r-lg pt-2 pb-10'>
      <div className='relative h-full'>
        <div
          className='absolute h-8 w-1.5 left-1 bg-white rounded-r-xl -z-1 transition-all'
          style={{
            top: `${(activeLinkIndex / (linksCount - 1)) * 100}%`
          }}
        />
      </div>
    </div>
  );
}
