import {
    Flex,
    Circle,
    Box,
    Image,
    Text,
    useColorModeValue,
    chakra,
    Tooltip,
  } from '@chakra-ui/react';
import { faShoppingCart, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Navigate } from 'react-router-dom';
import { Auth } from './ContextApi';
import { useContext } from 'react';
//   import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
//   import { FiShoppingCart } from 'react-icons/fi';
  
//   const data = {
//     isNew: true,
//     imageURL:
//       'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
//     name: 'Wayfarer Classic',
//     price: 4.5,
//     rating: 4.2,
//     numReviews: 34,
//   };
  
  function Rating({ rating, numReviews }) {
    return (
      <Box d="flex" alignItems="center">
        {Array(5)
          .fill('')
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <FontAwesomeIcon icon={faStar}
                  key={i}
                  style={{ marginLeft: '1' }}
                  color={i < rating ? 'teal.500' : 'gray.300'}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <FontAwesomeIcon icon={faStarHalfStroke}
              key={i} style={{ marginLeft: '1' }}
              />;
            } 
            // return <FontAwesomeIcon icon={'star-sharp'} 
            // key={i} style={{ marginLeft: '1' }} 
            // />;
          })}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
          {numReviews} review{numReviews > 1 && 's'}
        </Box>
      </Box>
    );
  }
  
  function ProductAddToCart({name,image,rating,price,numReviews,store,id}) {
    const {addItem}=useContext(Auth);
    return (
      <Flex p={50} alignItems="center" justifyContent="center" cursor={'pointer'} _hover={{color:'#90A4AE'}}>
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative">
            <Circle
              size="10px"
              position="absolute"
              top={2}
              right={2}
              bg="red.200"
              />
      <Link  to={`/products/${id}`}>
          <Image
            src={image}
            alt={`Picture of ${name}`}
            roundedTop="lg"
            />
            </Link>
  
          <Box p="6">
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated>
                {name}
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1.2em'}>
                <chakra.a href={'#'} display={'flex'} onClick={()=>{
                  let obj={
                    name:name,
                    img:image,
                    price:price,
                    store:store,
                    id:id
                  }
                  console.log(obj);
                  addItem(obj);
                }}>
                <FontAwesomeIcon icon={faShoppingCart}
                  h={7} w={7} alignSelf={'center'} />
                </chakra.a>
              </Tooltip>
            </Flex>
            <Text>Sold by {store}</Text>

            <Flex justifyContent="space-between" alignContent="center">
              <Rating rating={rating} numReviews={numReviews} />
              <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                <Box as="span" color={'gray.600'} fontSize="lg">
                  $
                </Box>
                {price}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    );
  }
  
  export default ProductAddToCart;