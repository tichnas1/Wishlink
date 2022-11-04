import { useState } from 'react';
import useSWR from 'swr';

import Chip from '../Chip';
import brandsApi from '../../api/brands';

function Brands() {
  const [selectedTags, setSelectedTags] = useState([]);

  const { data: brandsData, error: brandsError } = useSWR(
    `brands-${selectedTags.join()}`,
    selectedTags.length
      ? () => brandsApi.getBrandsByTags(selectedTags)
      : brandsApi.getAllBrands
  );

  const { data: tagsData, error: tagsError } = useSWR(
    'all-tags',
    brandsApi.getTags
  );

  const loading = (!tagsData && !tagsError) || (!brandsData && !brandsError);

  const toggleTag = (tag, active) => {
    if (tag === 'All brands') {
      if (!active) setSelectedTags([]);
      return;
    }

    let newTags = [...selectedTags];

    if (!active) {
      newTags.push(tag);
    } else {
      const index = selectedTags.indexOf(tag);
      newTags = [...newTags.slice(0, index), ...newTags.slice(index + 1)];
    }

    newTags.sort();
    setSelectedTags(newTags);
  };

  return (
    <section>
      <h2 className='brands__title'>Brands with Wishlink</h2>

      <p className='brands__description'>
        Check out the list of brands to partner with that will give you more
        profit.
      </p>

      {tagsData && (
        <div className='brands__tags-container'>
          <Chip
            label='All brands'
            active={!selectedTags.length}
            onClick={toggleTag}
          />
          {tagsData.map(tag => (
            <Chip
              key={tag}
              label={tag}
              active={selectedTags.includes(tag)}
              onClick={toggleTag}
            />
          ))}
        </div>
      )}

      {loading && <p>Loading</p>}

      {brandsData &&
        brandsData.map(brand => <p key={brand.name}>{brand.name}</p>)}
    </section>
  );
}

export default Brands;
