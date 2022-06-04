import { GET_LIST_KONTAK, ADD_KONTAK, DELETE_KONTAK, UPDATE_KONTAK, DETAIL_KONTAK } from "../../actions/KontakAction";

const initialState = {
    getListKontakResult: false,
    getListKontakLoading: false,
    getListKontakError: false,

    addKontakResult: false,
    addKontakLoading: false,
    addKontakError: false,

    deleteKontakResult: false,
    deleteKontakLoading: false,
    deleteKontakError: false,

    detailKontakResult: false,

    updateKontakResult: false,
    updateKontakLoading: false,
    updateKontakError: false
}

const kontakReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_KONTAK:
            return {
                ...state,
                getListKontakResult: action.payload.data,
                getListKontakLoading: action.payload.loading,
                getListKontakError: action.payload.errorMessage
            }

        case ADD_KONTAK:
            return {
                ...state,
                addKontakResult: action.payload.data,
                addKontakLoading: action.payload.loading,
                addKontakError: action.payload.errorMessage
            }

        case DELETE_KONTAK:
            return {
                ...state,
                deleteKontakResult: action.payload.data,
                deleteKontakLoading: action.payload.loading,
                deleteKontakError: action.payload.errorMessage
            }

        case UPDATE_KONTAK:
            return {
                ...state,
                updateKontakResult: action.payload.data,
                updateKontakLoading: action.payload.loading,
                updateKontakError: action.payload.errorMessage
            }

        case DETAIL_KONTAK:
            return {
                ...state,
                detailKontakResult: action.payload.data
            }

        default:
            return state;
    }
}

export default kontakReducer;