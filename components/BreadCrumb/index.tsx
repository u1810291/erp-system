import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

type BreadCrumbType = {
  id: string,
  value: string,
  link: string,
  isCurrentPage: boolean
}

export const BreadCrumb = ({ data }: { data: Array<BreadCrumbType> }) => {
  return (
    <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
      home
      {data.map(({ id, value, link, isCurrentPage }: BreadCrumbType) => (
        <BreadcrumbItem key={id} isCurrentPage={isCurrentPage}>
          <BreadcrumbLink href={link}>{value}</BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  )
}