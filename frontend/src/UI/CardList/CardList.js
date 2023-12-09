import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from '../Cards/Cards';
import image1 from '../../assets/netsol.jpg';
import image2 from '../../assets/askaribank.png';
import image3 from '../../assets/packages.png';
import image4 from '../../assets/ffc.png';
import image5 from '../../assets/shell.png';
import image6 from '../../assets/arbisoft.png';
import image7 from '../../assets/nestle.png';
import image8 from '../../assets/lottechem.png';
import image9 from '../../assets/ici.png';
import Classes from './CardList.css';

export default function MasonryImageList() {
  return (
    <div className={Classes.body}>
      <Box sx={{ width: 1200, height: '100%', margin: 'auto', padding: '5em' }}>
        <ImageList variant="masonry" cols={3} gap={1}>
          {NewsData.map((item, key) => (
            <ImageListItem key={item+key}>
              {item}
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  );
}

const NewsData =
  [
    <Card head="Netsol Technologies Limited stock decreased by 2% last week." image={image1}
      news="Netsol Technologies that no one was picking up at Rs27.16 is now doing brisk business at the price of Rs188.05, up 592pc."
      description="NetSol Technologies Limited incorporated in Pakistan on August 22, 1996 under the repealed Companies Ordinance, 1984, (Now Companies Act 2017). as a private company limited by shares, was later on converted into public limited company. Main business of the Company is development and sale of computer software and allied services in Pakistan as well as abroad"
    />,
    <Card head="Askari Bank Limited stock price increased by 5% after many months." image={image2}
      news="Askari Bank Limited was incorporated in Pakistan on October 9, 1991 as a Public Limited Company. The Bank is a scheduled commercial bank and is principally engaged in the business of banking"
      description="Askari Bank Limited was incorporated in Pakistan on October 9, 1991 as a Public Limited Company. The Bank is a scheduled commercial bank and is principally engaged in the business of banking as defined in the Banking Companies Ordinance, 1962. The ultimate parent of the Bank is Fauji Foundation."
    />,
    <Card head="Packages Limited stock price increased by 3.4% after many months." image={image3}
      news="Packages Limited is a public limited company incorporated in Pakistan. It is principally engaged in the manufacture and sale of packaging materials and tissue products. The Company also holds investments in companies"
      description="Packages Limited is a public limited company incorporated in Pakistan. It is principally engaged in the manufacture and sale of packaging materials and tissue products. The Company also holds investments in companies"
    />,
    <Card head="Fauji Fertilizer Company  Limited stock price increased by 3.4% after many months." image={image4}
      news="Fauji Fertilizer Company Limited is a public company incorporated in Pakistan under the Companies Act, 1913, (now the Companies Act, 2017). The principal activity of the Company is manufacturing, purchasing of fertilizers."
      description="Fauji Fertilizer Company Limited is a public company incorporated in Pakistan under the Companies Act, 1913, (now the Companies Act, 2017). The principal activity of the Company is manufacturing, purchasing and marketing of fertilizers and chemicals, including investment in other fertilizer, chemical, cement, energy generation, food processing and banking operations."
    />,
    <Card head="Shell Pakistan stock price dropped to 114.51 Rs after months of company growth." image={image5}
      news="Shell Pakistan Limited is a limited liability Company incorporated in Pakistan. The Company is a subsidiary of Shell Petroleum Company Limited,"
      description="Shell Pakistan Limited is a limited liability Company incorporated in Pakistan. The Company is a subsidiary of Shell Petroleum Company Limited, United Kingdom which is a subsidiary of Royal Dutch Shell Plc. The Company markets petroleum products and compressed natural gas. It also blends and markets various kinds of lubricating oils."
    />,
    <Card head="Brazil's Embraer aims for growth in 2023-2026 after pandemic recovery" image={image6}
      news="Brazilian planemaker Embraer SA expects a recovery in 2021-2022 while aiming for growth in 2023-2026, CEO Francisco Gomes Neto said on Monday."
      description="The outlook comes after large revenue drops due to the COVID-19 pandemic and a failed commercial aviation deal with Boeing Co BA.N.
The company's 2023-2026 'fit for growth' plan, Gomes Neto said, is based on pillars such as higher inventory usage and lowering the cost of goods sold."
    />,
    <Card head="Brazil's Embraer aims for growth in 2023-2026 after pandemic recovery" image={image7}
      news="Brazilian planemaker Embraer SA expects a recovery in 2021-2022 while aiming for growth in 2023-2026, CEO Francisco Gomes Neto said on Monday."
      description="The outlook comes after large revenue drops due to the COVID-19 pandemic and a failed commercial aviation deal with Boeing Co BA.N.
The company's 2023-2026 'fit for growth' plan, Gomes Neto said, is based on pillars such as higher inventory usage and lowering the cost of goods sold."
    />,
    <Card head="Brazil's Embraer aims for growth in 2023-2026 after pandemic recovery" image={image8}
      news="Brazilian planemaker Embraer SA expects a recovery in 2021-2022 while aiming for growth in 2023-2026, CEO Francisco Gomes Neto said on Monday."
      description="The outlook comes after large revenue drops due to the COVID-19 pandemic and a failed commercial aviation deal with Boeing Co BA.N.
The company's 2023-2026 'fit for growth' plan, Gomes Neto said, is based on pillars such as higher inventory usage and lowering the cost of goods sold."
    />,
    <Card head="Brazil's Embraer aims for growth in 2023-2026 after pandemic recovery" image={image9}
      news="Brazilian planemaker Embraer SA expects a recovery in 2021-2022 while aiming for growth in 2023-2026, CEO Francisco Gomes Neto said on Monday. The outlook comes after large revenue drops due to the COVID-19 pandemic and a failed commercial aviation deal with Boeing Co BA.N."
      description="The outlook comes after large revenue drops due to the COVID-19 pandemic and a failed commercial aviation deal with Boeing Co BA.N.
The company's 2023-2026 'fit for growth' plan, Gomes Neto said, is based on pillars such as higher inventory usage and lowering the cost of goods sold. The company expects to triple its inventory turnover as part of the plan and is well on its way to do so, he noted during an event, while also looking to achieve strong cash generation to finance projects with its own money."
    />
  ];

