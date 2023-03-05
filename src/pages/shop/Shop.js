import { Button } from '@chakra-ui/react';
import React from 'react';
import CommonLayout from '../../components/commonLayout/CommonLayout';
import './shop.css';
import { AddIcon, CheckIcon } from './Dummy';
import tokpedImage from '../../assets/images/tokpedImage.png';
import tokpedLogo from '../../assets/images/tokpedLogo.png';
import shopeeImage from '../../assets/images/shopeeImage.png';
import shopeeLogo from '../../assets/images/shopeeLogo.png';

const Shop = () => {
  const data = [
    {
      image: tokpedImage,
      logo: tokpedLogo,
      color: '#D9F2E3',
    },
    {
      image: shopeeImage,
      logo: shopeeLogo,
      color: '#FFDFCC',
    },
  ];
  return (
    <CommonLayout page={'shop'}>
      <div className="shop__container">
        <div className="shop__content">
          <p>Shop</p>
          <div className="shop__list">
            {data.map((value) => {
              return (
                <div className="shop-list__container">
                  <img src={value.image} alt="text logo" />
                  <div
                    className="shop-list__name"
                    style={{ background: `${value.color}` }}
                  >
                    <img src={value.logo} alt="logo" />
                    <p>Beauty Lovers</p>
                  </div>
                  <Button
                    isDisabled
                    w="100%"
                    leftIcon={<CheckIcon />}
                    variant="solid"
                    color="#FAFAFA"
                    background="#0C4AC0"
                    borderRadius="8px"
                    padding="12px"
                    fontWeight="400"
                    fontSize="14px"
                    lineHeight="20px"
                    height="48px"
                  >
                    Tersambung
                  </Button>
                </div>
              );
            })}
            <div className="shop-list__add">
              <Button
                leftIcon={<AddIcon />}
                variant="outline"
                color="#0C4AC0"
                border="1px solid #0C4AC0"
                borderRadius="8px"
                padding="12px"
                fontWeight="400"
                fontSize="14px"
                lineHeight="20px"
                height="48px"
              >
                Tambah toko
              </Button>
            </div>
          </div>
        </div>
      </div>
    </CommonLayout>
  );
};

export default Shop;
