import React from 'react'
import {Drawer,DrawerBody,DrawerFooter,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,useDisclosure,Text} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {ChevronRightIcon} from '@chakra-ui/icons';
import BtnStyle from './Style/style.module.css';

export default function CategoryOptionDraw({id}) {

    const data={
        cl:[`Women's Clothing`,`Men's Clothing`,`Accessories`,`Girl's Clothing`,`Boy's Clothing`,`Baby & Toddler Clothing`],
        bea:[],
        hn:[],
        jewel:[]
    }

    const {isOpen,onOpen,onClose}=useDisclosure();
    

  return (
    <>
    <Text onClick={onOpen}>{id==='cl'? 'Clothes':id==='bea'? 'Beauty':id==='hn'? 'Health & Nutrition':id==='jewel'? 'Jewelry':''} <ChevronRightIcon/></Text>
    <Drawer
    isOpen={isOpen}
    placement='left'
    onClose={onClose}
    zIndex={0}
  >
    <DrawerOverlay />
    <DrawerContent>
    <Text cursor={'pointer'} onClick={onClose}><FontAwesomeIcon icon={faArrowLeft}/> Back to main</Text>
      <DrawerCloseButton />
      <DrawerHeader>{id==='cl'? 'Clothes':id==='bea'? 'Beauty':id==='hn'? 'Health & Nutrition':id==='jewel'? 'Jewelry':''}</DrawerHeader>
      <DrawerBody>
    {id==='cl'? data.cl.map((el,i)=>{
        return <Text key={i} className={BtnStyle.cateButton}>{el}<ChevronRightIcon/></Text>
    }):''}
      </DrawerBody>

      <DrawerFooter>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
  </>
  )
}
