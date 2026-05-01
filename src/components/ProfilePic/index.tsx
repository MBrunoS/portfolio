import Image, { ImageProps } from "next/image";
import profileImg from "../../assets/profile-pic.webp";

export function ProfilePic(props: Partial<ImageProps>) {
  return (
    <Image
      {...props}
      src={profileImg}
      alt="Maurício Bruno"
      placeholder="blur"
      priority
      quality={100}
      className={`animate-glow max-w-[200px] md:max-w-[400px] border-4 lg:border-8 border-primary-color rounded-full`}
    />
  );
}
