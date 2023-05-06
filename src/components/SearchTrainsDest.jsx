import React from 'react'
import { Autocomplete, Option } from "chakra-ui-simple-autocomplete";
import SearchTrainsSrc from "./SearchTrainsSrc";
import {Box} from '@chakra-ui/react'

const options = [
  { value: "javascript", label: "Javascript" },
  { value: "chakra", label: "Chakra" },
  { value: "react", label: "React" },
  { value: "css", label: "CSS" },
];

const AutocompleteWrapper = () => {
  const [result, setResult] = React.useState([]);

  return React.createElement(
    Box,
    { maxW: "md" },
    React.createElement(Autocomplete, {
      options: options,
      result: result,
      setResult: (options) => setResult(options),
      placeholder: "Autocomplete",
    })
  );
};

export default SearchTrainsSrc;