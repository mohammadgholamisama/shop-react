import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function StarRating({starRating}) {
  return (
    <Stack spacing={1}>
      <Rating name="size-small" size="small" defaultValue={starRating} />
    </Stack>
  );
}