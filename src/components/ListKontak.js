import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteKontak, getListKontak, detailKontak } from '../actions/KontakAction'
import CardKontak from './CardKontak'

const ListKontak = () => {

    const { getListKontakResult, getListKontakLoading, getListKontakError, deleteKontakResult, updateKontakResult } = useSelector((state) => state.kontakReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getListKontak())
    }, [dispatch])

    useEffect(() => {
        if (deleteKontakResult) {
            dispatch(getListKontak())
        }
    }, [deleteKontakResult, dispatch])

    useEffect(() => {
        if (updateKontakResult) {
            dispatch(getListKontak())
        }
    }, [updateKontakResult, dispatch])

    return (
        <div className='grid grid-cols-4 gap-5 w-full h-[50%] mt-16 overflow-auto rounded-lg'>
            {getListKontakResult ? (
                getListKontakResult.map((kontak) => {
                    return (

                            <div  key={kontak.id} >
                                <CardKontak nama={kontak.nama} nohp={kontak.nohp} />
                                <button onClick={() => dispatch(deleteKontak(kontak.id))}>Hapus</button> -
                                <button onClick={() => dispatch(detailKontak(kontak))}>Edit</button> -
                            </div>
                    )
                })

            ) : getListKontakLoading ? (
                <p>Loading . . . </p>
            ) : getListKontakError ? getListKontakError : "Data Kosong."}

        </div>
    )
}

export default ListKontak