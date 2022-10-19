import axios from 'axios'
import { API_VERSION } from '@/configs/api'

const RESOURCE = 'tenants'

const actions = {
    getCompanies ({ commit }) { // o commit permite chamar o mutations ou outras configs
        return axios.get(`${API_VERSION}/${RESOURCE}`)
                        .then(response => {
                            // insere a resposta na mutation
                            commit('SET_COMPANY', response.data)
                        })
    }
}

export default actions