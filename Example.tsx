import React from 'react';
import Dropdown from 'react-native-input-select';

export default function Example() {
  const [country, setCountry] = React.useState();

  return (
    <Dropdown
      label="Country"
      placeholder="Select an option..."
      options={[
        { label: 'Nigeria', value: 'NG' },
        { label: 'Åland Islands', value: 'AX' },
        { label: 'Algeria', value: 'DZ' },
        { label: 'American Samoa', value: 'AS' },
        { label: 'Andorra', value: 'AD' },
      ]}
      selectedValue={country}
      onValueChange={(value) => setCountry(value)}
      primaryColor={'green'}
      isSearchable={true}
    />
  );
}