import {createContext, useState} from 'react'

export default createContext({
    isLogged: false,
    setIsLogged: () => null,
    modalVisible:false,
    setModalVisible:()=>null
});

