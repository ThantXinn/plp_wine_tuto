/** @format */

import { ContentType } from "@/type/contentType";
import { PortableText } from "@portabletext/react";

interface Props {
  contents: ContentType[];
  icons: JSX.Element;
}
const Content = ({ contents, icons }: Props) => {
  return (
    <div className='flex w-full h-52 justify-items-start'>
      {contents.map((item) => (
        <div
          key={item.title}
          className='flex flex-col w-full px-4 items-center justify-center'>
          <div className='ml-32 max-lg:ml-0'>
            <h1 className='font-semibold text-3xl italic flex items-center gap-2'>
              {icons}
              {item.title}
            </h1>
            <div className='font-thin text-lg w-3/4 max-lg:w-full leading-7'>
              <PortableText value={item.description} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
