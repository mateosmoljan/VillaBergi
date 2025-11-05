interface IFrameMapsProps {
  className?: string;
}

function IFrameMaps({ className }: IFrameMapsProps) {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18929.89561482413!2d13.911426225766641!3d45.14769392198045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477cb3bc5e7548a5%3A0x22d1645170babb4c!2sVilla%20Damiana!5e0!3m2!1sen!2shr!4v1762367401215!5m2!1sen!2shr"
      className={`w-full h-full ${className}`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

export default IFrameMaps;
