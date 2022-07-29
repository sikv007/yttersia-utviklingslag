import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { A, Heading } from '../components/Elements';
import { client } from '../utils/config';
import { getImageDimensions } from '@sanity/asset-utils';
import urlBuilder from '@sanity/image-url';

const myPortableTextComponents = {
  types: {
    image: ({ value }) => {
      const { width, height } = getImageDimensions(value);
      return (
        <div className='mb-L'>
          <Image
            className='rounded-lg mb-2XL'
            src={urlBuilder(client)
              .image(value)
              .width(800)
              .fit('max')
              .auto('format')
              .url()}
            width={width}
            height={height}
            alt={value.alt}
          />
        </div>
      );
    },
  },
  block: {
    h3: ({ children }) => (
      <h3 className='text-charlie mb-XS text-grey-9'>{children}</h3>
    ),
    normal: ({ children }) => <p className='mb-XS text-bravo text-grey-9'>{children}</p>,
  },
  marks: {
    link: ({ value, children }) => {
      const target = value.href.startsWith('http') ? '_blank' : undefined;

      return (
        <A href={value.href} target={target}>
          {children}
        </A>
      );
    },
  },
};

const Page = ({ data }) => {
  console.log(data);
  return (
    <div className='bg-grey-3'>
      <div className='container py-XL'>
        <Heading>{data.name}</Heading>
        <PortableText
          value={data.content}
          components={myPortableTextComponents}
        />
      </div>
    </div>
  );
};

export default Page;

export async function getStaticProps(context) {
  const { params } = context;
  const { title } = params;

  const formatedTitle = title[0].toUpperCase() + title.slice(1);

  const data = await client.fetch(
    `*[_type == 'page' && name == '${formatedTitle}']`
  );

  return {
    props: {
      data: data[0],
    },
    revalidate: 10, // In seconds
  };
}

export async function getStaticPaths() {
  const data = await client.fetch("*[_type == 'page']");

  const names = data.map((item) => item.name);

  const params = names.map((name) => ({
    params: { title: name },
  }));

  console.log(params);

  return {
    paths: params,
    fallback: 'blocking',
  };
}
