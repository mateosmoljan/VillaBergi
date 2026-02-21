interface IFrameMapsProps {
  className?: string;
}

function IFrameMaps({ className }: IFrameMapsProps) {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8192.98849341799!2d13.906568271046911!3d45.14261437336305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477cb3007145b5e3%3A0x31913527a073cc7!2sVilla%20Bergi!5e0!3m2!1sen!2shr!4v1771700990715!5m2!1sen!2shr"
      className={`w-full h-full ${className}`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

export default IFrameMaps;
