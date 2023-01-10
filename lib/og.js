const availableProperties = {
  title: 'og:title',
  type: 'og:type',
  image: 'og:image',
  description: 'og:description',
};

const og = ({ ...properties }) => {
  let metadata = [];

  let i = 0;
  for (let prop in properties) {
    if (prop !== undefined) {
      metadata.push(generateMetadataTag(availableProperties[prop], prop, i++));
    }
  }

  return <>{...metadata}</>;
};

const generateMetadataTag = (property, content, key) => {
  return <meta property={property} content={content} key={key} />;
};

export default og;
