import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addKontak, getListKontak, updateKontak } from '../actions/KontakAction'

const AddKontak = () => {
    const [nama, setNama] = useState("")
    const [nohp, setNohp] = useState("")
    const [id, setId] = useState(false)

    const { addKontakResult, detailKontakResult  } = useSelector((state) => state.kontakReducer)
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()

        if(id){
            dispatch(updateKontak({
                id: id,
                nama: nama,
                nohp: nohp
            }))
        } else {
            dispatch(addKontak({nama: nama, nohp: nohp}))
        }
    }

    useEffect( () => {
        if(addKontakResult){
            dispatch(getListKontak())
            setNama('')
            setNohp('')
        }
    }, [addKontakResult, dispatch])

    useEffect( ()=> {

        if(detailKontakResult){
            setId(detailKontakResult.id)
            setNama(detailKontakResult.nama)
            setNohp(detailKontakResult.nohp)
        }

    }, [dispatch, detailKontakResult])

    return (
        <div>
            <h2>{ id ? "Update Kontak" : "Add Kontak" } </h2>
            <form onSubmit={(event) => handleSubmit(event)} className="mt-5">
                <input type="text" name="nama" placeholder='nama . . . ' value={nama} onChange={ (event) => setNama(event.target.value)} className="border-2 px-5 py-1 rounded-md" />
                <input type="text" name="nohp" placeholder='No. Hp . . . ' value={nohp} onChange={ (event) => setNohp(event.target.value)} className="border-2 px-5 py-1 rounded-md mx-2" />
                <button type='submit' className='border-2 px-8 py-1 rounded-md'>Submit</button>
        </form>
        </div>
    )
}

export default AddKontak